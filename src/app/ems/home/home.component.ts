import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private empService:EmpService,
    private router: Router
   ) { }

  // employees= new EmployeeDetails
  employees= new Employee
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
     this.empService.getEmployees().subscribe((res:any)=> {
 this.employees = res;
          console.log(this.employees);
          return this.employees
      } )
  }
  deleteEmployee(id){
      this.empService.deleteEmployee(id).subscribe((res:any) => {
        this.getEmployees();
      } )
  }

}