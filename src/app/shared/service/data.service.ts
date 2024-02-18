
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { bank } from '../model/bloodbank';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private afs : AngularFirestore) { }

    
   addBanks(bank :any){
    bank.id= this.afs.createId();
    return this.afs.collection("bank/").add(bank);



   }

   getAllBanks()
   {
    return this.afs.collection("bank/").snapshotChanges();
    
   }
   updateBanks( bank : any){
    return this.afs.doc("bank/"+bank.id).update(bank);
   }

   deleteBanks(id : string){
    return this.afs.doc("bank/"+id).delete();
   }

   getBankById(id:string){
    return this.afs.doc("bank/"+id).valueChanges();
   }

   addvolunteer(volunteer:any){
    volunteer.volunteer_id= this.afs.createId();
    return this.afs.collection("Volunteer/").add(volunteer);
   }

   getAllvolunteer(){
    return this.afs.collection("Volunteer/").snapshotChanges();
    
   }
   
   

updatevolunteer( volunteer:any){
  return this.afs.doc("Volunteer/"+volunteer.volunteer_id).update(volunteer);
}

deleteVolunteer( volunteer_id :string){
  return this.afs.doc("Volunteer/"+volunteer_id).delete();
  
}

getVolunteerById( volunteer_id :string){
  return this.afs.doc("Volunteer/"+volunteer_id).valueChanges();
}

}

