import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalsComponent } from './component/dashboard/hospitals/hospitals.component';
import { VolunteersComponent } from './component/dashboard/volunteers/volunteers.component';
import { ViewBankComponent } from './component/dashboard/bank/view-bank/view-bank.component';
import { RulesComponent } from './component/dashboard/rules/rules.component';
import { GroupsComponent } from './component/dashboard/groups/groups.component';
import { ViewVolunteerComponent } from './component/dashboard/volunteers/view-volunteer/view-volunteer.component';


const routes: Routes = [
  {path: 'dashboard', children : [
    {path :'', redirectTo : 'Hospitals',pathMatch :'full'},
    {path : 'Hospitals', component: HospitalsComponent},
    {path : 'volunteers', component: VolunteersComponent},
    {path : 'bank/:id', component: ViewBankComponent},
    {path : 'rules', component: RulesComponent},
    {path : 'groups', component: GroupsComponent},
    {path : 'volunteers/:volunteer_id', component: ViewVolunteerComponent}

    
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
