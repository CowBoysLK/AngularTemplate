import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  categoryName: string;
  page = 0;
  pageSize = 12;
  data: any[] = [];

  cateogoryItems = [
    {id: 1, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.5 (62)'},
    {id: 2, src:'./assets/images/img2.jpg', title:'Mountain Bicycle', price: '33', rate:'4.1 (26)'},
    {id: 3, src:'./assets/images/img3.jpg', title:'Lawnmower', price: '15', rate:'4.8 (36)'},
    {id: 4, src:'./assets/images/img4.jpg', title:'Range Rover', price: '42', rate:'3.9 (94)'},
    {id: 5, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'4.2 (32)'},
    {id: 6, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.0 (42)'},
    {id: 7, src:'./assets/images/img2.jpg', title:'Mountain Bicycle', price: '33', rate:'3.8 (22)'},
    {id: 8, src:'./assets/images/img3.jpg', title:'Lawnmower', price: '15', rate:'4.7 (78)'},
    {id: 9, src:'./assets/images/img4.jpg', title:'Range Rover', price: '42', rate:'4.6 (88)'},
    {id: 10, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'5.0 (15)'},
    {id: 11, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.5 (62)'},
    {id: 12, src:'./assets/images/img2.jpg', title:'Mountain Bicycle', price: '33', rate:'4.1 (26)'},
    {id: 13, src:'./assets/images/img3.jpg', title:'Lawnmower', price: '15', rate:'4.8 (36)'},
    {id: 14, src:'./assets/images/img4.jpg', title:'Range Rover', price: '42', rate:'3.9 (94)'},
    {id: 15, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'4.2 (32)'},
    {id: 16, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.0 (42)'},
    {id: 17, src:'./assets/images/img2.jpg', title:'Mountain Bicycle', price: '33', rate:'3.8 (22)'},
    {id: 18, src:'./assets/images/img3.jpg', title:'Lawnmower', price: '15', rate:'4.7 (78)'},
    {id: 19, src:'./assets/images/img4.jpg', title:'Range Rover', price: '42', rate:'4.6 (88)'},
    {id: 20, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'5.0 (15)'},
  ];

  constructor() {}

  ngOnInit(): void {
    this.categoryName = 'Vehicles';
    this.getCategoryProducts({pageIndex: this.page, pageSize: this.pageSize});
  }

  openDatePicker() {
    console.log('Open Date Picker');
  }

  getCategoryProducts(obj: any) {
    let index = 0;
    let startIndex = obj.pageIndex * obj.pageSize;
    let endIndex = startIndex + obj.pageSize;

    this.data = this.cateogoryItems.filter(() => {
      index++;
      return (index > startIndex && index <= endIndex) ? true : false;
    });
  }
}
