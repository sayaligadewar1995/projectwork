import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/shared.service';
import { Customerdetails } from 'app/model/customerdetails.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerdetailsComponent implements OnInit {


  //
  validationForm: FormGroup;


  cust_Detail: Customerdetails = {
    cust_local_ps: '',
    cust_localdistid: '',
    cust_localstateid: '',
    cust_p_address: '',
    cust_p_ps: '',
    cust_p_distid: '',
    cust_p_stateid: '',
    annual_income: '',
    cust_p_d_id: null,
    cust_id: null,
    cust_occupation: '',
    cust_local_address: ''
  }

  //
  //loginForm: FormGroup;
  //isSubmitted  =  false;

  constructor(private service: SharedService,private routes:Router,private formBuilder: FormBuilder ) { }
  ngOnInit() {
   // this.cust_Detail=JSON.parse(sessionStorage.getItem('details'));
    //console.log(this.cust_Detail);
    this.reactiveForm();

    //

    //this.loginForm  =  this.formBuilder.group({
      //cust_id: ['', Validators.required],
      //cust_p_d_id: ['', Validators.required]
  //});
  }
//
reactiveForm() {


  this.validationForm = this.formBuilder.group(

  {

      vehiclePrice: new FormControl('', Validators.required),


      onRoadPrice: new FormControl('', Validators.required)


  })}

  previweData(data: Customerdetails) {
    
    console.log(data);
    this.cust_Detail=data;
    // this.service.saveData(data).subscribe();
    sessionStorage.setItem('details',JSON.stringify(this.cust_Detail));
    this.routes.navigateByUrl('role/oe/customerdatasdash');
  }
 // editdata(data:Customerdetails) {
   // console.log(data);
    //this.service.previewData(data).subscribe();
    //this.routes.navigateByUrl('role/oe/customerdatasdash');

  // }

}
