import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-property-step8',
  templateUrl: './property-step8.page.html',
  styleUrls: ['./property-step8.page.scss'],
})
export class PropertyStep8Page implements OnInit {

  property_form_step8: FormGroup;
  fileImage = '';
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
    this.property_step8_fb();
    this.setClaimData();
  }

  property_step8_fb() {
    this.property_form_step8 = this.formBuilder.group({
      upload_document: [null],

      ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
      }
    });
  }

  propertyStep8Next() {
    for (let v in this.property_form_step8.controls) {
      this.property_form_step8.controls[v].markAsTouched();
    }
    if (this.property_form_step8.valid) {
      const step8 = {
        "step": 'step8',
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "upload_document": this.data,
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), step8)
        .subscribe((step: any) => {
          if (step.status == 0) {
            this.data = [];
            this.setClaimData();
            this.router.navigate(['/property-step9']);
          } else {
          }
        }, err => {
        });
    }
  }

  deleteImage(img, position) {
    this.images.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
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
      formData.append("claimNumber", localStorage.getItem('PropertyClaimNumber'));
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
  setClaimData() {
    var claimNumber = localStorage.getItem('PropertyClaimNumber');
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

  ngOnInit() {
  }

  delete() {
    console.log("Delete");
  }

  back() {
    this.navCtrl.pop();
  }
}