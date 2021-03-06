import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {

  public confirmationCode: string = "";
  public phone: string = "+52 1234567";

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  enterToTabsPage () 
  {
    this.navCtrl.navigateRoot('tabs/tabs')
  }

}
