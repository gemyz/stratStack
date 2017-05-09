import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StratColForm } from './stratColForm';

@NgModule({
  declarations: [
    StratColForm,
  ],
  imports: [
    IonicPageModule.forChild(StratColForm),
  ],
  exports: [
    StratColForm
  ]
})
export class StratColFormModule {}
