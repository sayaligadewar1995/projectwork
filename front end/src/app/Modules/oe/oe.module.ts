import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OEDashboardComponent } from './oedashboard/oedashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoangenerationComponent } from './loangeneration/loangeneration.component';
import { CustomerdetailsComponent } from './loangeneration/customerdetails/customerdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerdataComponent } from './loangeneration/customerdata/customerdata.component';
import { MatInputModule, MatFormFieldModule, MatCard, MatCardModule } from '@angular/material';
const oerouting: Routes = [
  { path: 'oedash', component: OEDashboardComponent },
  { path: 'loangenerationdash', component: LoangenerationComponent },
  { path: 'customerdetailsdash', component: CustomerdetailsComponent },
  { path: 'customerdatasdash', component: CustomerdataComponent }


]

@NgModule({
  declarations: [OEDashboardComponent, LoangenerationComponent, CustomerdetailsComponent, CustomerdataComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(oerouting),
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [OEDashboardComponent, LoangenerationComponent, CustomerdetailsComponent, CustomerdataComponent]
})
export class OEModule { }