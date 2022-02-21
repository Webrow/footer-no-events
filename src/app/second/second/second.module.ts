import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPageRoutingModule } from './second-routing.module';

import { SecondPage } from './second.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SecondPageRoutingModule],
  declarations: [SecondPage, FooterComponent],
})
export class SecondPageModule {}
