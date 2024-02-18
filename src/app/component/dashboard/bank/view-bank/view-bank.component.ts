import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-view-bank',
  templateUrl: './view-bank.component.html',
  styleUrl: './view-bank.component.css'
})
export class ViewBankComponent implements OnInit {


   id!:any;
   bankObj !:any;


  constructor(private route : ActivatedRoute,
    private dataApi : DataService ){ 
    this.id=route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getBankById();

    
  }

  getBankById()
  {
   this.dataApi.getBankById(this.id).subscribe(res => {

    this.bankObj=res;
    
   })
  }

}
