import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {

  addStudentForm!: FormGroup

  constructor(
    private fb : FormBuilder,
    private snackBar : MatSnackBar,
    private authService : AuthService,
    private router: Router
  ){}


  ngOnInit(): void{
    this.addStudentForm = this.fb.group({
      name : [null,[Validators.required]],
      email : [null,[Validators.required]],
      filires : [null,[Validators.required]],
      groupe : [null,[Validators.required]],
      classe : [null,[Validators.required]],
      password : [null,[Validators.required]]

    })
  }

  onSubmit(): void{
    this.authService.register(this.addStudentForm.value).subscribe(
      (response) => {
        this.snackBar.open('Add Student successfull','Close',{duration:5000});
        this.router.navigateByUrl("/admin");
      },
      (error) =>{
        this.snackBar.open('Add Student failed try again','Close',{duration:5000, panelClass:'error-snackbar'});
      }
    )
  }

}
