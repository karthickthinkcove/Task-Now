import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskModel} from './task.module';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj: TaskModel = new TaskModel();
  employeeData !: any;
  model: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private api: ApiService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      userName: [''],
      TaskName: [''],
      Email: [''],
      Description: [''],
      StartDate: [''],
      EstimateDate: ['']


    })
    this.getAllUser();
  }

  postEmployeDetails() {
    this.userModelObj.userName = this.formValue.value.userName;
    this.userModelObj.TaskName = this.formValue.value.TaskName;
    this.userModelObj.Email = this.formValue.value.Email;
    this.userModelObj.Description = this.formValue.value.Description;
    this.userModelObj.StartDate = this.formValue.value.StartDate;
    this.userModelObj.EstimateDate = this.formValue.value.EstimateDate;


    this.api.postEmploye(this.userModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Task added succesfully")
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
    this.api.getEmploye(data)
      .subscribe(res => {
        this.employeeData = res;
      })
  }

  // clickAddUser() {
  //   this.formValue.reset();
  //   this.showAdd = true;
  //   this.showUpdate = false;
  // }

  onEdit(row: any) {
    this.userModelObj = row.id
    this.formValue.controls['userName'].setValue(row.userName);
    this.formValue.controls['TaskName'].setValue(row.TaskName);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Description'].setValue(row.Description);
    this.formValue.controls['StartDate'].setValue(row.StartDate);
    this.formValue.controls['EstimateDate'].setValue(row.EstimateDate);
  }

  updateEmployeDetails() {
    this.userModelObj.userName = this.formValue.value.userName;
    this.userModelObj.TaskName = this.formValue.value.TaskName;
    this.userModelObj.Email = this.formValue.value.email;
    this.userModelObj.Description = this.formValue.value.Description;
    this.userModelObj.StartDate = this.formValue.value.StartDate;
    this.userModelObj.EstimateDate = this.formValue.value.EstimateDate;
    
    
    this.api.updateEmploye(this.userModelObj, this.userModelObj.id)
      .subscribe(_res => {
        alert("updated")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUser();
      })
  }

  deleteUser(row: any) {
    this.api.deleteEmploye(row.id)
      .subscribe(_res => {
        alert("User Deleted");
        this.getAllUser();
      })
  }
}

function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

