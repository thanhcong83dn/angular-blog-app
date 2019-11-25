import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

const SHARED_COMPONENT = [
  ButtonComponent,
  InputComponent
];
@NgModule({
  declarations: SHARED_COMPONENT,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
