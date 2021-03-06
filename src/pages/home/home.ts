import { BitpointDataProvider } from '../../providers/bitpoint-data/bitpoint-data.provider';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts;
  constructor(
    public navCtrl: NavController,
    public userData: BitpointDataProvider) {
    this.contacts = userData.getUsers();
  }

  goToContact(contact) {
    this.navCtrl.push('ContactDetailPage', contact);
  }

}
