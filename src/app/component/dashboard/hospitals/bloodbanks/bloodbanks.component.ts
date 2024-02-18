import { HttpClient } from '@angular/common/http';
import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-bloodbanks',
  templateUrl: './bloodbanks.component.html',
  styleUrl: './bloodbanks.component.css'
})
export class BloodbanksComponent implements OnInit {
  form ! :FormGroup;
  title !:string;
  name !:string;
  mobile !:string;
  blood !:string;
  email !:string;
  id !:string;
  buttonName !:string;
  
  constructor(
    
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data :any,
    private dialogRef : MatDialogRef<BloodbanksComponent>
  ){ 
    this.title = data.title;
    this.id=data.id;
    this.name=data.name;
    this.mobile=data.mobile;
    this.email=data.email;
    this.blood=data.blood;
    this.buttonName=data.buttonName;
  }

  ngOnInit(): void {
    this.form =this.fb.group({
      id: [this.id,[]],
      name :[this.name,[Validators.required]],
      mobile :[this.mobile,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      email : [this.email,[Validators.required, Validators.email]],
      blood:[this.blood,[Validators.required]]

    })
    
  }

  cancelRegistration() {
 this.dialogRef.close();
  }
  registerbank(){
 this.dialogRef.close(this.form.value);
  }

}
