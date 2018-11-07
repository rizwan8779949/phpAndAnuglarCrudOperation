import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ConsoleLog } from '../../console-log';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }
log= new ConsoleLog;
  ngOnInit() {
  }

model = new Employee();
  addEmployee(){
      this.empService.addEmployee(this.model).subscribe((res:any)=>{this.log.logs(res)});
       this.goBack()
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
