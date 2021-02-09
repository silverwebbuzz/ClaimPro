import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {

  other_form_step3: FormGroup;
  fileImage = '';
  private uploadFile = null;
  images = [];
  data: any = [];
  editClaimData: any;
  attach_upload_document_set: any = [];
  ImageServerURL: string;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.other_step3_fb();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  other_step3_fb() {
    this.other_form_step3 = this.formBuilder.group({
      upload_document: [null],
    });
  }

  otherStep3Next() {
    for (let v in this.other_form_step3.controls) {
      this.other_form_step3.controls[v].markAsTouched();
    }
    if (this.other_form_step3.valid) {
      const step3 = {
        "step": 'step3',
        "ClaimNumber": localStorage.getItem('OtherClaimNumber'),
        "upload_document": this.data,
      };

      this._cS.put_API(this._cS.URL_Other_Claim_Post(), step3)
        .subscribe((step: any) => {
          if (step.status == 0) {
            this.data = [];
            this.setClaimData();
            this.router.navigate(['/step4']);
          } else {
          }
        }, err => {
        });
    }
  }
  ngOnInit() {
  }

  deleteImage(img, position) {
    this.images.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('OtherClaimNumber'),
        image_name: img.val,
        image_type: 'upload_document',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
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
      formData.append("claimNumber", localStorage.getItem('OtherClaimNumber'));
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

  back() {
    this.navCtrl.pop();
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('OtherClaimNumber');
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