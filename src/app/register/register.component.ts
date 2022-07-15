import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterModel } from './register.module';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj: RegisterModel = new RegisterModel();
  employeeData !: any;
  model: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private register: RegisterService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      Email: [''],
      Password: [''],

    })
    this.getAllUser();
  }

  postEmployeDetails() {
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.Email = this.formValue.value.Email;
    this.userModelObj.Password = this.formValue.value.Password;

    this.register.postEmploye(this.userModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Register added succesfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUser();
      },
        err => {
          alert("Something went wrong")
        })
  }

  getAllUser() {
    this.register.getEmploye(data)
      .subscribe(res => {
        this.employeeData = res;
      })
  }

 

  onEdit(row: any) {
    this.userModelObj = row.id
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Password'].setValue(row.Password)
  }

  updateEmployeDetails() {
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.Email = this.formValue.value.email;
    this.userModelObj.Password = this.formValue.value.Password;
    
    this.register.updateEmploye(this.userModelObj, this.userModelObj.id)
      .subscribe(_res => {
        alert("updated")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUser();
      })
  }

  deleteUser(row: any) {
    this.register.deleteEmploye(row.id)
      .subscribe(_res => {
        alert("User Deleted");
        this.getAllUser();
      })
  }
}

function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

