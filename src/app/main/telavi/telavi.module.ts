import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, 
    SlickCarouselModule
    
  ]
})
export class TelaviModule { 
   
  constructor( ) { 
  }
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

  telaviData = TELAVI_DATA;
}

interface Batumi {
  name: string;
  population: number;
  location: string;
}

const TELAVI_DATA: Batumi[] = [
  {
    name: 'Batumi',
    population: 155000,
    location: '41.6416° N, 41.6357° E'
  },
  {
    name: 'Batumi Botanical Garden',
    population: 1200,
    location: '41.6598° N, 41.6441° E'
  },
  {
    name: '6 May Park',
    population: 2000,
    location: '41.6414° N, 41.6331° E'
  }
];

