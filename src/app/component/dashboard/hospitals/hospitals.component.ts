import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { BloodbanksComponent } from './bloodbanks/bloodbanks.component';
import { DataService } from '../../../shared/service/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import {   bank } from '../../../shared/model/bloodbank';
import { DeleteBankComponent } from '../bank/delete-bank/delete-bank.component';







@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.css'
})
export class HospitalsComponent implements OnInit {

  banksArr :  bank[]=[];
  data: any;
  displayedColumns: string[] = ['name', 'mobile', 'email', 'blood','action'];
  dataSource!: MatTableDataSource<bank>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


 
  constructor(
    public dialog :MatDialog,
    private dataApi : DataService,
    private _snackbar: MatSnackBar
  ){ }
  

  ngOnInit(): void {
    this.getAllBanks();
    
  }

  Bloodbanks()
  {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width='60%',
    dialogConfig.height='250px',
    dialogConfig.autoFocus=true;
  
    dialogConfig.data={
      title:'Register blood banks',
      buttonName:'Register'
      

    }
    

    const dialogRef=this.dialog.open(BloodbanksComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.dataApi.addBanks(data);
        this.openSnackBar("Registration of Blood Banks is Succesful.","OK")

        
      }
    })
  }


  editBank( row :any)
  {
    if(row.id ==null ||row.name == null){
      return;
    }
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width='60%',
    dialogConfig.height='250px',
    dialogConfig.data=row;
    dialogConfig.data.title=" Edit BloodBank";
    dialogConfig.data.buttonName="Update";

          

    
    

    const dialogRef=this.dialog.open(BloodbanksComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.dataApi.updateBanks(data);
        this.openSnackBar("Detail of Blood Bank is updated successfully.","OK")

        
      }
    })
  }

  deleteBanks(row :any)
  {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.width='60%',
    dialogConfig.height='250px',
    dialogConfig.data={
      title:'Delete bank',
      bankName : row.name
      

    }
    

    const dialogRef=this.dialog.open(DeleteBankComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.dataApi.deleteBanks(row.id);
        this.openSnackBar("The BloodBank is Deleted Successfully","OK")

        
      }
    })
  }

  getAllBanks(){
  this.dataApi.getAllBanks().subscribe(res => {
    this.banksArr=res.map((e : any) => {
      const data= e.payload.doc.data();
      
      
      data.id=e.payload.doc.id;
      return data;
    })
  
    
    this.dataSource=new MatTableDataSource(this.banksArr);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
  
  }

  viewBank(row : any){
    window.open('/dashboard/bank/'+row.id,'_blank');
  }

  
    
      
  

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

  

  
