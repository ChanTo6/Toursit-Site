import { Component, OnInit } from '@angular/core';
import { MyService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private myservice: MyService){
    
  }
  isRegister = false
  ngOnInit(): void {
      this.myservice.onRegister.subscribe(()=>{
        if(localStorage.getItem("username")){
          this.isRegister =true
        }else{
          this.isRegister =false
        }
      })
    
   
  }
  Hotel = [
    { name: 'Hotel A', RoomNumber: 101, price: 50, image: './assets/batumi/ბათუმი1.jpg' },
    { name: 'Hotel B', RoomNumber: 102, price: 75, image: './assets/batumi/ბათუმი2.jpg' },
    { name: 'Hotel C', RoomNumber: 103, price: 100, image: './assets/batumi/ბათუმი3.jpg'}
  ];
  selectedCity: any;


  onCitySelected(city: any) {
    this.selectedCity = city;
  }
  

}
