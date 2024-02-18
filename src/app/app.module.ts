import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment.development';
import { MaterialModule } from './material/material/material.module';
import { HospitalsComponent } from './component/dashboard/hospitals/hospitals.component';
import { VolunteersComponent } from './component/dashboard/volunteers/volunteers.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { BloodbanksComponent } from './component/dashboard/hospitals/bloodbanks/bloodbanks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './component/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBankComponent } from './component/dashboard/bank/delete-bank/delete-bank.component';
import { ViewBankComponent } from './component/dashboard/bank/view-bank/view-bank.component';
import { AddVolunteersComponent } from './component/dashboard/volunteers/add-volunteers/add-volunteers.component';
import { RulesComponent } from './component/dashboard/rules/rules.component';
import { GroupsComponent } from './component/dashboard/groups/groups.component';
import { DeleteVolunteerComponent } from './component/dashboard/volunteers/delete-volunteer/delete-volunteer.component';
import { ViewVolunteerComponent } from './component/dashboard/volunteers/view-volunteer/view-volunteer.component';
import { DatePipeConfig } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HospitalsComponent,
    VolunteersComponent,
    SidebarComponent,
    BloodbanksComponent,
    PopupComponent,
    DeleteBankComponent,
    ViewBankComponent,
    AddVolunteersComponent,
    RulesComponent,
    GroupsComponent,
    DeleteVolunteerComponent,
    ViewVolunteerComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  
  
  
})
export class AppModule { }
