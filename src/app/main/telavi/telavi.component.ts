import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-telavi',
  templateUrl: './telavi.component.html',
  styleUrls: ['./telavi.component.css']
})
export class TelaviComponent {
  
  showImage =false
  constructor( ) { 
  }
  ngOnInit(): void  {
   ;
  
  }
  slides = [
    { img: './assets/telavi/თელავი1.jpg' },
    { img: './assets/telavi/თელავი2.jpg' },
    { img: './assets/telavi/თელავი3.jpg' },
    { img: './assets/telavi/თელავი4.jpg' },
    { img: './assets/telavi/თელავი5.jpg' },
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

  telaviData = TELAVI_DATA;

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

interface Telavi {
  name: string;
  RoomNumber: number;
  price: number;
  
  
}

const TELAVI_DATA: Telavi[] = [
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