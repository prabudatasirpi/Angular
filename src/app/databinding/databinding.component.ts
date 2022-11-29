import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  String = "Datasirpi";
  itemImageUrl="assets/car.png";
  defaultVal=""
  title="prabu";
  


  passValueToComponent(e){
    console.log(e.target.value);
  }
}
