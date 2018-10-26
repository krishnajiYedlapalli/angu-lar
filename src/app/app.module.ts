import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EncapNoneComponent } from './encap-none/encap-none.component';
import { EncapNativeComponent } from './encap-native/encap-native.component';


@NgModule({
  declarations: [
    AppComponent,
    EncapNoneComponent,
    EncapNativeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
