import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileImgSrc = './assets/images/profileImg.jpg';
  profileAddress = '77, Parkes Road, Melbourne, Victoria, 3000.';

  recentPurchases = [
    {id: 1, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.5 (62)'},
    {id: 2, src:'./assets/images/img2.jpg', title:'Mountain Bicycle', price: '33', rate:'4.1 (26)'},
    {id: 3, src:'./assets/images/img3.jpg', title:'Lawnmower', price: '15', rate:'4.8 (36)'},
    {id: 4, src:'./assets/images/img4.jpg', title:'Range Rover', price: '42', rate:'3.9 (94)'},
    {id: 5, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'4.2 (32)'},
    {id: 6, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.0 (42)'},
  ];

  recentRentals = [
    {id: 1, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'4.2 (32)'},
    {id: 2, src:'./assets/images/img1.jpg', title:'BMW M3', price:'24', rate:'4.0 (42)'},
    {id: 3, src:'./assets/images/img2.jpg', title:'Mountain Bicycle', price: '33', rate:'3.8 (22)'},
    {id: 4, src:'./assets/images/img3.jpg', title:'Lawnmower', price: '15', rate:'4.7 (78)'},
    {id: 5, src:'./assets/images/img4.jpg', title:'Range Rover', price: '42', rate:'4.6 (88)'},
    {id: 6, src:'./assets/images/img9.jpg', title:'RV Camper', price: '60', rate:'5.0 (15)'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
