import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponent } from './base/devices/devices.component';
import { DeviceDetailsComponent } from './base/device-details/device-details.component';
import { BaseComponent } from './base/base.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailsComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    GoogleChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
