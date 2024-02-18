import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-bank',
  templateUrl: './delete-bank.component.html',
  styleUrl: './delete-bank.component.css'
})
export class DeleteBankComponent {
  bankName !:string;
  title!: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) data :any,
    private dialogRef : MatDialogRef<DeleteBankComponent>
  ){ 
    this.bankName =data.bankName;
    this.title=data.title;
  }

  ngOnInit():void{

  }

  close(){
    this.dialogRef.close();

  }

  delete(){
    const deleteBanks = true;
    this.dialogRef.close(deleteBanks);

  }
}
