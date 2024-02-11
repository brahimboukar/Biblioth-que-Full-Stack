import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;


  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private snackBar : MatSnackBar,
    private router : Router
  ){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email : [null,[Validators.required]],
      password : [null,[Validators.required]],
    })
  }

  onSubmit(): void{
    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username,password).subscribe(
      (res) => {
        if(UserStorageService.isAdminLoggedIn()){
          this.router.navigateByUrl('admin/dashboard');
        } else if(UserStorageService.isStudentLoggedIn()){
          this.router.navigateByUrl('student/dashboard');
        }
      },
      (error) => {
        this.snackBar.open('Bad credential','EROOR', {duration:500});
      }
    )
  }

}
