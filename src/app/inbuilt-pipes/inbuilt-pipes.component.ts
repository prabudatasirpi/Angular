import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.css']
})
export class InbuiltPipesComponent {

  today = new Date();

  myname = "Prabu kannappan";
  myNumber = 12345.67890;
  mycurrency= 4500.50;
}
