import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {

  dos: string[] = [
    "Ensure you meet the minimum age and weight requirements.",
    "Eat a healthy meal before donating blood.",
    "Stay hydrated by drinking plenty of fluids before and after donation.",
    "Follow instructions given by medical staff.",
    "Rest for a few minutes after donation and have a snack and drink.",
    "Keep the donation site clean and dry."
  ];

  donts: string[] = [
    "Don't donate blood if you have cold or flu symptoms.",
    "Don't consume alcohol 24 hours before donation.",
    "Don't smoke immediately before or after donation.",
    "Don't skip meals on the day of donation.",
    "Don't rush through the donation process.",
    "Don't engage in strenuous physical activity immediately after donation."
  ];

  constructor() { }

}
