import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyService } from 'src/app/service.service';


@Component({
  selector: 'app-batumi',
  templateUrl: './batumi.component.html',
  styleUrls: ['./batumi.component.css']
})

export class BatumiComponent implements OnInit {
   
  constructor( ) { 
  }
  showImage = false;
  ngOnInit(): void  {
   ;
  
  }
  slides = [
    { img: './assets/batumi/ბათუმი1.jpg' },
    { img: './assets/batumi/ბათუმი2.jpg' },
    { img: './assets/batumi/ბათუმი3.jpg' },
    { img: './assets/batumi/ბათუმი4.jpg' },
    { img: './assets/batumi/ბათუმი5.jpg' },
  ];
  slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  batumiData = BATUMI_DATA;

  hotelImageSrc = '';

  showHotelImage(imageSrc: string) {
    this.hotelImageSrc = imageSrc;
    this.showImage = true;
}

  hideHotelImage(imageSrc :string) {
    this.hotelImageSrc = imageSrc;
    this.showImage = true;
  }

  @Input() Hotel: any[];
  @Output() citySelected = new EventEmitter<any>();

  onMouseOver(city: any) {
    this.citySelected.emit(city);
  }
  
}

interface Batumi {
  name: string;
  RoomNumber: number;
  price: number;
  
  
}

const BATUMI_DATA: Batumi[] = [
  {
    name: 'Hilton Batumi',
    RoomNumber: 155000,
    price:0,
    
  },
  {
    name: 'Radisson Blu Hotel Batumi',
    RoomNumber: 12000,
    price:0,
    
  },
  {
    name: 'Sheraton Batumi Hotel:',
    RoomNumber: 2000,
    price:0,
    
  }
];