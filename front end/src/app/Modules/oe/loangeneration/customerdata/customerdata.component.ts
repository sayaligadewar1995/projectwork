import { Component, OnInit } from '@angular/core';
import { Customerdetails } from 'app/model/customerdetails.model';
import { SharedService } from 'app/shared/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.scss']
})
export class CustomerdataComponent implements OnInit {



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
  

  constructor(private service: SharedService,private routes:Router) { }

  ngOnInit() {
    this.cust_Detail=JSON.parse(sessionStorage.getItem('details'));
    console.log(this.cust_Detail);
    
  }

  saveData(data: Customerdetails) {
    console.log(data);
    this.cust_Detail=data;
     this.service.saveData(data).subscribe();
  
    //this.routes.navigateByUrl('role/oe/customerdatasdash');

}
// editData(data: Customerdetails) {
//    console.log(data);
//     this.cust_Detail=data;
//     sessionStorage.setItem('details',JSON.stringify(this.cust_Detail));
//    this.routes.navigateByUrl('role/oe/customerdetailsdash');
// }
}
