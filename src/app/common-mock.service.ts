import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';
import { AbstractControl } from '@angular/forms';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';

// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const API_URL = 'http://localhost/brokingapi/api/';
//const API_URL = 'http://182.70.121.222:8080/angularapi/api/';

@Injectable()
export class CommonMockService {

  toast: any;
  isLoading = false;
  ImageServerURL: string;

 
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmpassword = AC.get('confirmpassword').value; // to get value in input tag
    if (confirmpassword != "" && password != confirmpassword) {
        AC.get('confirmpassword').setErrors({ MatchPassword: true })
    } else {
        return null
    }
}

imageUrl() {
  return 'http://localhost/brokingapi/attachments/';
  //return 'http://182.70.121.222:8080/angularapi/attachments/';
}

assetsUrl() {
  return '../../assets/';
  //return 'http://182.70.121.222:8080/insurance-house/assets/';
}

  async presentToastWithOptions(message?, cssClass?, position?) {
    if(this.toast){
      this.toast.dismiss();
    }
    this.toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    this.toast.present();
  }

  async presentToastOptionsWithOutClose(message?, position?) {
    if(this.toast){
      this.toast.dismiss();
    }
    this.toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: 'dark-trans',
      showCloseButton: false
    });
    this.toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      spinner: 'crescent',
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading(){
    this.isLoading = false;
    return await this.loadingController.dismiss();
  } 


  loader_Status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  Display_Loader(IsShow) {
    this.loader_Status.next(IsShow);
  };

  dynamicImages(array, path) {
    let imageArray = array.split(',');
    var fileTypes = ['jpg', 'jpeg', 'png', 'gif']
    var json = [];
    imageArray.forEach((val) => {
      var fileArray = val.split('/');
      var extension = fileArray[1].split('.').pop().toLowerCase();
      var fileName = fileArray[1];
      console.log(fileArray[1].indexOf(extension) > -1);
      json.push({
        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
        path: this.ImageServerURL + path + val,
        name: fileName,
        val: val
      })
    })
    return json;
  }

  private handleError(error: HttpErrorResponse) {
    console.log('log : ', error);
    if (error.error instanceof ErrorEvent) {
    } else {
    }
    return throwError(error.error);
  }
  // #endregion
  
  // #region Toaster Message 
  // Display_Toaster(Type?: any, Message?: any, Title?: any) {
  //   Type == 'success' ? this.toastr.success(Message, Title) :
  //     Type == 'warning' ? this.toastr.warning(Message, Title) :
  //       this.toastr.error(Message, Title);
  // };
  // #endregion

  // #region GET, POST, DELETE Methods
  getToken() {
    return localStorage.getItem('keyToken') ? localStorage.getItem('keyToken') : null;
  };

  getHttp_Header() {
    var httpOptions;
    (this.getToken() != 'new' && this.getToken()) ? httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken(),
      })
    } : null;
    return httpOptions;
  };

  get_API(URL) {
    return this.http.get(API_URL + URL, this.getHttp_Header());
  };

  get_API_array(URL_array) {
    var ObservableBatch = [];
    URL_array.forEach((url) => {
      ObservableBatch.push(this.http.get(API_URL + url, this.getHttp_Header()));
    });
    return forkJoin(ObservableBatch);
  };

  post_API_withOutToken(URL, body) {
    return this.http.post(API_URL + URL, body);
  };

  get_API_withToken(URL: any): Observable<any> {
    var token = localStorage.getItem('keyToken');
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http
      .get(API_URL + URL, { headers: myHeaders })
      .pipe(map(data => { return data; }), catchError(this.handleError))
  }

  get_API_Data(URL: any, claimNumber: any): Observable<any> {
    var token = localStorage.getItem('keyToken');
    console.log("claimNumber:", claimNumber);
    console.log('token:', token);
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http
      .get(API_URL + URL + claimNumber, { headers: myHeaders })
      .pipe(map(data => { return data; }), catchError(this.handleError))
  }

  getoptionvalue_API(fieldtype: any): Observable<any> {
    var token = localStorage.getItem('keyToken');
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get(API_URL + 'common_form/getoptionvalue/' + fieldtype, { headers: myHeaders })
      .pipe(map(data => { return data; }), catchError(this.handleError))
  }

  post_API(URL: any, body: any): Observable<any> {
    var token = localStorage.getItem('keyToken');
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http
      .post(API_URL + URL, body, { headers: myHeaders })
      .pipe(map(data => { return data; }), catchError(this.handleError))
  }

  put_API(URL: any, body: any): Observable<any> {
    var token = localStorage.getItem('keyToken');
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
    return this.http
      .post(API_URL + URL, body, { headers: myHeaders })
      .pipe(map(data => { return data; }), catchError(this.handleError))
  }
  update_API(URL, body, id) {
    return this.http.put(API_URL + URL + id, body, this.getHttp_Header());
  };

  delete_API(URL, id) {
    return this.http.delete(API_URL + URL + id, this.getHttp_Header());
  };
  // #endregion

  // #region All URLS
  URL_Login_Post() {
    return 'user/userlogin';
  };
  URL_User_Details_Get(User_Id?: any) {
    return 'user/getuserbyid';
  };
  URL_User_Details_post() {
    return 'user/userdetailupdate';
  };
  URL_User_Create_post() {
    return 'user/usercreate';
  }
  URL_Claim_Feedback() {
    return 'claim/claimfeedback';
  };
  URL_All_Claims_Get() {
    return 'user/getuserclaimlist';
  };

  /* Common Form URL Start */
  URL_existing_claim_get() {
    return 'common_form/existingClaimCheck';
  }
  URL_Ref_Claim_data() {
    return 'common_form/refclaimdata/';
  }
  Upload_All_Image() {
    return API_URL + 'common_form/upload';
  };
  URL_image_delet() {
    return 'common_form/deleteImage';
  }
  URL_My_claim_get() {
    return 'common_form/myclaim';
  }
  URL_forgot_email_post() {
    return 'user/resetPassword';
  }
  URL_change_password_post() {
    return 'user/changePassword';
  }
  /* Common Form URL End */

  /* Vehicle Claim URL Start */
  URL_All_DropdownList_Get() {
    return 'vehicle_claim/getoptionvalue';
  };
  URL_Vehicle_Claim_FirstStep_Post() {
    return 'vehicle_claim/fisrtstep';
  };
  URL_Vehicle_Claim_Post() {
    return 'vehicle_claim/allstepclaim';
  };
  URL_Vehicle_Claim_existing_get() {
    return 'vehicle_claim/existingClaimCheck';
  }
  /* Vehicle Claim URL End */

  /* Medical Claim URL Start */
  URL_Medical_Claim_FirstStep_Post() {
    return 'medical_claim/fisrtstep';
  };
  URL_Medical_Claim_Post() {
    return 'medical_claim/allstepclaim';
  };
  /* Medical Claim URL End */

  /* Other Claim URL Start */
  URL_Other_Claim_FirstStep_Post() {
    return 'other_claim/fisrtstep';
  };
  URL_Other_Claim_Post() {
    return 'other_claim/allstepclaim';
  };
  /* Other Claim URL End */

  /* Professional Claim URL Start */
  URL_Professional_Claim_FirstStep_Post() {
    return 'professional_claim/fisrtstep';
  };
  URL_Professional_Claim_Post() {
    return 'professional_claim/allstepclaim';
  };
  /* Professional Claim URL End */

  /* Property Claim URL Start */
  URL_Property_Claim_FirstStep_Post() {
    return 'property/fisrtstep';
  };
  URL_Property_Claim_Post() {
    return 'property/allstepclaim';
  };
  /* Property Claim URL End */

  /* General Claim URL Start */
  URL_General_Claim_FirstStep_Post() {
    return 'general_claim/fisrtstep';
  };
  URL_General_Claim_Post() {
    return 'general_claim/allstepclaim';
  };
  /* General Claim URL End */


  // #region Logout
  logout() {
    localStorage.clear();
    this._router.navigate(['signin']);
  };
  // #endregion

  // #region Common Functions
  evidence_Images: any = [];
  uploaded_Images: any = [];
  uploaded_Image_name: any = null;

  deleteImage(index) {
    if (confirm('Are you sure want to delete this image?')) {
      this.evidence_Images.splice(index, 1);
      this.uploaded_Images.splice(index, 1);
    }
  };

  trackByFn(index, item) {
    return index; // or item.id
  };

  ImageUpload(formData):Observable<any>{
    var token = localStorage.getItem('keyToken');
    const myHeaders = new HttpHeaders({ 'Authorization': token });
    return this.http
    .post(this.Upload_All_Image(), formData,{headers:myHeaders})
    .concatMap(data=>{
      return Observable.of(data);
    }) 
  }
  

  All_dropDown_lst: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  get_All_drp_Options() {
    this.Display_Loader(true);
    this.get_API(this.URL_All_DropdownList_Get())
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.All_dropDown_lst.next(data.data);
        } else {
          this.All_dropDown_lst.next(null);
          // this.Display_Toaster('error', data.message);
        }
        this.Display_Loader(false);
      }, err => {
        this.logout();
        this.All_dropDown_lst.next(null);
        this.Display_Loader(false);
      });
  };

// get value for dropdown value in json format
  get_JSON_value(value) {
    if (value) {
      var array = Object.values(JSON.parse(value));
      return array;
    }
  }

  //get other value for dropdown value in json format
  checkOtherOption(value) {
    if(value){
    const array = Object.values(JSON.parse(value));
    return array.find(x => { if (x == 'Other') { return true; } else { return false; } })
    }
  }
  // #endregion

  
  constructor(public http: HttpClient, public _router: Router,private toastCtrl: ToastController, private loadingController: LoadingController) { }
}
