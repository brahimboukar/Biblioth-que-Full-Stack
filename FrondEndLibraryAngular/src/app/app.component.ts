import { Component } from '@angular/core';
import { UserStorageService } from './services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrondEndLibraryAngular';

  isAdminLoggedIn : boolean = UserStorageService.isAdminLoggedIn();
  isStudentLoggedIn : boolean = UserStorageService.isStudentLoggedIn();

  constructor(private router : Router){}

  ngOnInit(): void{
    this.router.events.subscribe(event => {
      this.isStudentLoggedIn = UserStorageService.isStudentLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    })
  }

  logout(){
    UserStorageService.singOut();
    this.router.navigateByUrl('login');
  }






}
