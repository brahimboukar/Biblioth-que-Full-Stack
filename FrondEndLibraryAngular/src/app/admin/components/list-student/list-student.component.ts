import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserStorageService } from '../../../services/storage/user-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})

//const BASIC_URL = "http://localhost:8082/";

export class ListStudentComponent{

BASIC_URL = "http://localhost:8082/";
  constructor(private http:HttpClient){}




  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer' + UserStorageService.getToken()
    )
  }

  getAllUser(): Observable<any>{
    return this.http.get(this.BASIC_URL + 'api/admin/student',{
      headers: this.createAuthorizationHeader(),
    })
  }

  


  

}
