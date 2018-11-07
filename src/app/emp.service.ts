import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpService {
  employees=[];
  constructor(private http:HttpClient) { }
  checkMe:any;
  getEmployees(){
    return this.http.get(environment.baseUrls+"/select.php/")
  }
  addEmployee(info){
    return this.http.post(environment.baseUrls+"/insert.php",info)
  }
  
  getEmployee(id){
    return this.http.post(environment.baseUrls+"/selectone.php/",{'id':id})
  }
  deleteEmployee(id){
    return this.http.post(environment.baseUrls+"/delete.php/",{'id':id})
  }
  updateEmployee(info){
    return this.http.post(environment.baseUrls+"/update.php/", info)
  }
}
