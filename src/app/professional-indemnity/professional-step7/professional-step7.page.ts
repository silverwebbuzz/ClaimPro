import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-professional-step7',
  templateUrl: './professional-step7.page.html',
  styleUrls: ['./professional-step7.page.scss'],
})
export class ProfessionalStep7Page implements OnInit {

  professional_form_step7: FormGroup;
  fileImage = '';
  private uploadFile = null;
  images = [];
  data: any = [];
  editClaimData: any;
  attach_upload_document_set: any = [];
  ImageServerURL: string;


  constructor(private navCtrl: NavController,
    public _cS: CommonMockService,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 
      this.ImageServerURL = this._cS.imageUrl();

      this.general_step5_fb();
      this.setClaimData();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    general_step5_fb() {
      this.professional_form_step7 = this.formBuilder.group({
        upload_document: [null],
    });
  }

  professionalStep7Next(){
    for (let v in this.professional_form_step7.controls) {
      this.professional_form_step7.controls[v].markAsTouched();
    }
    if (this.professional_form_step7.valid) {
      const step7 = {
        "step": 'step7',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        "upload_document": this.data,
      };
      console.log("8888888",step7)
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step7)
        .subscribe((step: any) => {
          console.log("99999999999999",step)
          if (step.status == 0) {
            this.data = [];
            this.router.navigate(['/professional-step8']);
            this.setClaimData();
          } else {
            // this._cS.Display_Toaster('error', data.message);
          }
        }, err => {
        });
    }
  }
  
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


  ngOnInit() {
  }

  deleteImage(img, position) {
    this.images.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
        image_name: img.val,
        image_type: 'upload_document',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'upload_document/');
            this.images = dynamicI;
            this._cS.presentToastWithOptions(data.message);
          } else {
            this._cS.presentToastWithOptions(data.message);
          }
        });
    }

  }

  fileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "upload_document");
      formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.images.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.data.push(val.data[0].file_name);
        if (val) {
          this._cS.presentToastWithOptions(val.message);
        }
        else {
          this._cS.presentToastWithOptions(val.message);
        }
      })
    }
  }

  delete(){
    console.log("Delete");
  }

  back(){
    this.navCtrl.pop();
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
    if (claimNumber) {
    this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.editClaimData = data.data;
          if (this.editClaimData.upload_document) {
            var dynamicI = (this.dynamicImages(this.editClaimData.upload_document, '/upload_document/'));
            this.images = dynamicI;
          }
        }
      });
    }
  }
}