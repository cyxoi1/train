import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SocrataService} from '../../app/socrata';
import {Detail} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SocrataService]
})
export class HomePage {

  public foundPermits;
  constructor(private socrata: SocrataService, public navCtrl: NavController) {

  }

  getPermits() {
        this.socrata.getPermits().subscribe(
            data => {
                this.foundPermits = data.json();
            },
            err => console.error(err),
            () => console.log('getPermits completed')
        );
  }

  goToDetail(permit) {
		this.navCtrl.push(Detail, { permit: permit });
	}
}
