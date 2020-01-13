import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

const material = [
  MatDialogModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
