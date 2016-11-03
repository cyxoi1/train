import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class Detail {

  public permitDetail;
  constructor(public navCtrl: NavController,private navParams: NavParams) {
    this.permitDetail = navParams.get('permit');
  }

  ionViewDidLoad() {
    console.log('Hello Detail Page');
  }

}
