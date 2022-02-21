import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter - secondpage ');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter  - secondpage ');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave - secondpage ');
  }

  ionViewDidLeave() {
    console.log('ionViewWDidLeave - secondpage ');
  }
}
