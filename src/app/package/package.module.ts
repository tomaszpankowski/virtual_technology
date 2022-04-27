import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { PackageComponent } from './package/package.component';
import { PackageS1Component } from './package-s1/package-s1.component';
import { PackageS2Component } from './package-s2/package-s2.component';
import { PackageS3Component } from './package-s3/package-s3.component';
import { PackageS4Component } from './package-s4/package-s4.component';


@NgModule({
  declarations: [
    PackageComponent,
    PackageS1Component,
    PackageS2Component,
    PackageS3Component,
    PackageS4Component
  ],
  imports: [
    CommonModule,
    PackageRoutingModule
  ]
})
export class PackageModule { }
