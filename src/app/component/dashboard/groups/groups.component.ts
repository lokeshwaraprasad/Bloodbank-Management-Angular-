import { Component } from '@angular/core';

interface MatchingGroups {
  [key: string]: string[];
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

  selectedBloodGroup: string = '';
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-','A1B+'];

  getMatchingGroups(bloodGroup: string): string[] {
    const matchingGroups: MatchingGroups = {
      'A+': ['A+', 'AB+','O+'],
      'A-': ['A+', 'A-', 'AB+', 'AB-'],
      'B+': ['B+', 'AB+'],
      'B-': ['B+', 'B-', 'AB+', 'AB-'],
      'AB+': ['AB+'],
      'AB-': ['A-', 'B-', 'AB-', 'O-'],
      'O+': ['O+', 'A+', 'B+', 'AB+'],
      'O-': ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
      'A1B+':['A1B+']
    };
    return matchingGroups[bloodGroup] || [];
  }

}
