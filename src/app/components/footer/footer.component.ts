import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter - footer ');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter  - footer ');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave - footer ');
  }

  ionViewDidLeave() {
    console.log('ionViewWDidLeave - footer ');
  }
}
