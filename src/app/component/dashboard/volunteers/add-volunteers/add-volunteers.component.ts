import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-add-volunteers',
  templateUrl: './add-volunteers.component.html',
  styleUrl: './add-volunteers.component.css'
})
export class AddVolunteersComponent implements OnInit{
  form!:FormGroup;
  title!:string;
  volunteer_name!:string;
  volunteer_id!:string;
  gender!:string;
  mobile!:string;
  blood!:string;
  age!:string;
  date!:Date;
  buttonName !:string;

  









constructor(
 private fb :FormBuilder,
 @Inject(MAT_DIALOG_DATA) data:any,
 private dialogRef :MatDialogRef<AddVolunteersComponent>
){ 
  this.title=data.title;
  this.volunteer_name=data.volunteer_name;
  this.volunteer_id=data.volunteer_id;
  this.blood=data.blood;
  this.mobile=data.mobile;
  this.gender=data.gender;
  this.age=data.age;
  this.date=data.date;
  this.buttonName=data.buttonName;



}
ngOnInit(): void {
  this.form=this.fb.group({
    volunteer_id:[this.volunteer_id,[]],
    volunteer_name:[this.volunteer_name,[Validators.required]],
    mobile:[this.mobile,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    gender:[this.gender,[Validators.required]],
    age:[this.age,[Validators.required]],
    blood:[this.blood,[Validators.required]],
    date:[this.date,[Validators.required]]
  })

  
}
cancelEnroll(){
this.dialogRef.close();
}

enrollvolunteer(){
  this.dialogRef.close(this.form.value);
  

}
  
  

}

