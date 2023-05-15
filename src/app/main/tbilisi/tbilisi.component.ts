import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyService } from 'src/app/service.service';


@Component({
  selector: 'app-tbilisi',
  templateUrl: './tbilisi.component.html',
  styleUrls: ['./tbilisi.component.css']
})
export class TbilisiComponent {
   showImage = false;
  constructor( ) { 
  }
  
  slides = [
    { img: './assets/tbilisi/თბილისი1.jpg' },
    { img: './assets/tbilisi/თბილისი2.jpg' },
    { img: './assets/tbilisi/თბილისი3.jpg' },
    { img: './assets/tbilisi/თბილისი4.jpg' },
    { img: './assets/tbilisi/თბილისი5.jpg' },
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

  TbilisiData = TBILISI_DATA;

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

interface Tbilisi {
  name: string;
  RoomNumber: number;
  price: number;
  
  
}

const TBILISI_DATA: Tbilisi[] = [
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