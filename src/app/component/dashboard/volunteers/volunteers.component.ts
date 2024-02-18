
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../../shared/service/data.service';
import { AddVolunteersComponent } from './add-volunteers/add-volunteers.component';
import { Volunteer } from '../../../shared/model/volunteer';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DeleteBankComponent } from '../bank/delete-bank/delete-bank.component';
import { DeleteVolunteerComponent } from './delete-volunteer/delete-volunteer.component';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrl: './volunteers.component.css'
})
export class VolunteersComponent implements OnInit {
  volArr:Volunteer[]=[];
  displayedColumns:string[] =['volunteer_name','age','mobile','blood','date','gender','Action'];
  dataSource!:MatTableDataSource<Volunteer>;


  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;
  

  constructor(
    public dialog :MatDialog,
    private dataApi :DataService,
    private _snackbar :MatSnackBar,
    private datePipe :DatePipe
    
  ) { }

  ngOnInit(): void {
    this.getAllvolunteer();
  
  }

  addvolunteer(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.height='350px';
    

    dialogConfig.autoFocus=true;
   
    dialogConfig.data={
      title:'Enroll Volunteer',
      buttonName : 'Register'
    }

    const dialogRef=this.dialog.open(AddVolunteersComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      if(data){
        this.dataApi.addvolunteer(data);
        this.openSnackBar("Enrollment of Volunteer is Succesfull!","OK")


      }
    })
  }
editVolunteer(row:any){
  if(row.volunteer_id ||row.volunteer_name){
    return;
  }
  const dialogConfig =new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width='60%',
  dialogConfig.height='250px',
  dialogConfig.data=row;
  dialogConfig.data.title="Edit Volunteer";
  dialogConfig.data.buttonName="Update";

  const dialogRef=this.dialog.open(AddVolunteersComponent,dialogConfig);
  dialogRef.afterClosed().subscribe(data => {
  if(data){
    this.dataApi.updatevolunteer(data);
  this.openSnackBar("Detail of Volunteer is Updated Successfully","OK")
  }
  })

}


  deleteVolunteer( row:any){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus=true;
  dialogConfig.data ={
    title:'Delete Volunteer',
    volunteerName :row.volunteer_name
  }

  const dialogRef=this.dialog.open(DeleteVolunteerComponent,dialogConfig);

  dialogRef.afterClosed().subscribe(data=> {
    if(data){
      this.dataApi.deleteVolunteer(row.volunteer_id);
      this.openSnackBar("The volunteer is Deleted succesfully,","Ok")
    }
  })
  }


  viewvolunteer(row :any){
    window.open('/dashboard/volunteers/'+row.volunteer_id,'_blank');


  }
 getAllvolunteer(){
     this.dataApi.getAllvolunteer().subscribe(res =>{  
           this.volArr=res.map((e : any) => {
        
         const data= e.payload.doc.data();
          data.volunteer_id=e.payload.doc.id;
        
          console.log('Original Date:', data.date);
          data.date = this.datePipe.transform(data.date.toDate(), 'shortDate'); 
          // data.date = new Date(data.date.toDate()).toLocaleString(); 
    
        
         return data;
       })
       this.dataSource=new MatTableDataSource(this.volArr);
       this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
      })

  }
openSnackBar(message:string,action:string){
  this._snackbar.open(message,action);
}

applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

