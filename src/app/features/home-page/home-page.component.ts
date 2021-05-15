import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { WebAppRoutes } from 'src/app/core/Enums/RoutesEnum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  activeCategory: SlidesOutputData;

  mainCategories = [
    {
      id: 1,
      src: './assets/images/img6.jpg',
      alt: 'Category 1',
      title: 'Vehicles',
    },
    {
      id: 2,
      src: './assets/images/img7.jpg',
      alt: 'Category 2',
      title: 'Sports & Leisure',
    },
    {
      id: 3,
      src: './assets/images/img2.jpg',
      alt: 'Category 3',
      title: 'Category 3',
    },
    {
      id: 4,
      src: './assets/images/img1.jpg',
      alt: 'Category 4',
      title: 'Category 4',
    },
    {
      id: 5,
      src: './assets/images/img8.jpg',
      alt: 'Category 5',
      title: 'Tools',
    },
  ];

  featureItems = [
    {
      id: 1,
      src: './assets/images/img1.jpg',
      alt: 'BMW M3',
      title: 'BMW M3',
      desc: 'Item description goes here.',
    },
    {
      id: 2,
      src: './assets/images/img2.jpg',
      alt: 'Mountain Bicycle',
      title: 'Mountain Bicycle',
      desc: 'Item description goes here.',
    },
    {
      id: 3,
      src: './assets/images/img3.jpg',
      alt: 'Lawnmower',
      title: 'Lawnmower',
      desc: 'Item description goes here.',
    },
    {
      id: 4,
      src: './assets/images/img4.jpg',
      alt: 'Range Rover',
      title: 'Range Rover',
      desc: 'Item description goes here.',
    },
    {
      id: 5,
      src: './assets/images/img8.jpg',
      alt: 'Tool Set',
      title: 'Tool Set',
      desc: 'Item description goes here.',
    },
  ];

  recentItems = [
    {
      id: 1,
      src: './assets/images/img1.jpg',
      title: 'BMW M3',
      price: '24',
      rate: '4.5 (62)',
    },
    {
      id: 2,
      src: './assets/images/img2.jpg',
      title: 'Mountain Bicycle',
      price: '33',
      rate: '4.1 (26)',
    },
    {
      id: 3,
      src: './assets/images/img3.jpg',
      title: 'Lawnmower',
      price: '15',
      rate: '4.8 (36)',
    },
    {
      id: 4,
      src: './assets/images/img4.jpg',
      title: 'Range Rover',
      price: '42',
      rate: '3.9 (94)',
    },
    {
      id: 5,
      src: './assets/images/img9.jpg',
      title: 'RV Camper',
      price: '60',
      rate: '4.2 (32)',
    },
    {
      id: 6,
      src: './assets/images/img1.jpg',
      title: 'BMW M3',
      price: '24',
      rate: '4.0 (42)',
    },
    {
      id: 7,
      src: './assets/images/img2.jpg',
      title: 'Mountain Bicycle',
      price: '33',
      rate: '3.8 (22)',
    },
    {
      id: 8,
      src: './assets/images/img3.jpg',
      title: 'Lawnmower',
      price: '15',
      rate: '4.7 (78)',
    },
    {
      id: 9,
      src: './assets/images/img4.jpg',
      title: 'Range Rover',
      price: '42',
      rate: '4.6 (88)',
    },
    {
      id: 10,
      src: './assets/images/img9.jpg',
      title: 'RV Camper',
      price: '60',
      rate: '5.0 (15)',
    },
  ];

  constructor(private router: Router) {}

  customOptions: OwlOptions = {
    items: 1,
    merge: true,
    margin: 30,
    center: true,
    loop: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    // dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
  };

  ngOnInit(): void {}

  getPassedData(data: SlidesOutputData) {
    this.activeCategory = data;
    console.log(this.activeCategory);
  }

  goToProductCatagory(id: number) {
    //console.log('catagoru ' + id);
    this.router.navigate([WebAppRoutes.CATAGORY_PAGE]);
  }
}
