import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {LoadingController} from "ionic-angular";

/*
  Generated class for the LoadingOverlayService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoadingOverlayService {

  private loading:any;

  constructor(public loadingCtrl:LoadingController) {
    console.log('Hello LoadingOverlayService Provider');
  }

  public showLoaderOverlay(){
    this.presentLoadingCustom();
  }

  public hideLoaderOverlay(){
    this.loading.dismiss();
  }

  private presentLoadingCustom() {
     this.loading = this.loadingCtrl.create({
       spinner: 'hide',
       showBackdrop:true,
       content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">
            <img src="assets/florida-hospital-center-ice.png">
            <div>
              <h5>Loading...</h5>
            </div>
          </div>
        </div>`
    });

    this.loading.present();
  }

}
