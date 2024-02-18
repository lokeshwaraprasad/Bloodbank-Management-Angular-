import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-view-volunteer',
  templateUrl: './view-volunteer.component.html',
  styleUrl: './view-volunteer.component.css'
})
export class ViewVolunteerComponent  implements OnInit{
 volunteer_id!:any;
  volunteerObj !:any;
  constructor(private route :ActivatedRoute,
    private dataApi :DataService){
  this.volunteer_id=route.snapshot.paramMap.get('volunteer_id');
  }

  ngOnInit(): void {
    this.getVolunteerById();
  }
  getVolunteerById(){
this.dataApi.getVolunteerById(this.volunteer_id).subscribe( res=>{
  this.volunteerObj=res;
  

})
  }

  formatDate(timestamp: any): string {
    const date = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JavaScript Date object
    return date.toDateString(); // Format the date as desired
  }
}
