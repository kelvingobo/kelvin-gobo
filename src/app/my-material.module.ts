import { NgModule } from '@angular/core';

import { MdToolbarModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [ MdToolbarModule, MdTabsModule ],
  exports: [ MdToolbarModule, MdTabsModule ]
})

export class MyMaterialModule {}
