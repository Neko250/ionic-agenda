import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Contact } from '../../providers/contacts/contacts';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  contact: Contact;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.contact = this.navParams.get('contact');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  call(contact: Contact) {
    // FIXME: use the line below, ref: https://bugs.chromium.org/p/chromium/issues/detail?id=792990
    // window.open(`mailto:${contact.phone}`, '');
    window.location.href = `tel:${contact.phone}`;
  }

  mail(contact: Contact) {
    // FIXME: use the line below, ref: https://bugs.chromium.org/p/chromium/issues/detail?id=792990
    // window.open(`mailto:${contact.email}`, '');
    window.location.href = `mailto:${contact.email}`;
  }

}
