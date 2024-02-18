import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddVolunteersComponent } from '../add-volunteers/add-volunteers.component';

@Component({
  selector: 'app-delete-volunteer',
  templateUrl: './delete-volunteer.component.html',
  styleUrl: './delete-volunteer.component.css'
})
export class DeleteVolunteerComponent implements OnInit {

volunteerName !:string;
title!:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef :MatDialogRef<DeleteVolunteerComponent>
  ){
this.volunteerName=data.volunteerName;
this.title=data.title;
  }
  ngOnInit(): void {
    
  }
close(){
 this.dialogRef.close();
}
delete(){
const deleteVolunteer=true;
this.dialogRef.close(deleteVolunteer);
}

}
