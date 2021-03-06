import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home/home.component';
import { TipoactivoComponent } from './tipoactivo/tipoactivo.component';


@NgModule({
  declarations: [HomeComponent, TipoactivoComponent, TipoactivoComponent],
  imports: [
    HomeRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
