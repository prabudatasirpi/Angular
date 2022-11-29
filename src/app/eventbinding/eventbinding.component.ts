import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  ColumnSpan: number = 2;
  FirstName: string = 'Anurag';
  LastName: string = 'Mohanty';
  Branch: string = 'CSE';
  Mobile: number = 9876543210
  Gender: string = 'Male';
  Age: number = 20;
  ShowDetails: boolean = true;


  ToggleDetails(): void {
      this.ShowDetails = !this.ShowDetails;
  }

}
