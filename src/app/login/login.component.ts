import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './login.module';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue !: FormGroup;
  userModelObj: LoginModel = new LoginModel();
  employeeData !: any;
  model: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  router: any;
  
  
  constructor(private log: LoginService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    
      this.formValue = this.formbuilder.group({
        userName: [''],
        Password: [''],
  
      })
   
    this.getAllUser();
  }
 
  postEmployeDetails() {
    this.userModelObj.UserName = this.formValue.value.userName;
    this.userModelObj.Password = this.formValue.value.Password;

    this.log.postEmploye(this.userModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Login added succesfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUser();
        
      },
        (err: any) => {
          alert("Something went wrong")
        })
  }

  getAllUser() {
    this.log.getEmploye(data)
      .subscribe((res: any) => {
        this.employeeData = res;
      })
  }
}

function data(_data: any, _any: any) {
  throw new Error('Function not implemented.');
}



