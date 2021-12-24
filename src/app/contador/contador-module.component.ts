import {  NgModule } from '@angular/core';
import { ContadorComponent } from './contad/contador.component';


@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})

export class ContadorModule{

}


