import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
const MaterialComponent = [MatButtonModule, MatButtonToggleModule];

@NgModule({
  imports: [MaterialComponent, MatButtonToggleModule],
  exports: [MaterialComponent, MatButtonToggleModule],
})
export class MaterialModule {}
