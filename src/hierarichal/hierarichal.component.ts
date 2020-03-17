import { Component, OnInit } from '@angular/core';

//import { ServicesService } from '../services.service';

@Component({
  selector: 'app-hierarichal',
  templateUrl: './hierarichal.component.html',
  styleUrls: ['./hierarichal.component.css']
})
export class HierarichalComponent implements OnInit {
  res: any;
  resp: any;
  dataSet: any;
  url: string = "https://api.zenefits.com/core/people";
  nextUrl: string = "https://api.zenefits.com/core/people?starting_after=9386734";

  constructor() {
   // this.res = serve.getData(this.url);
    //this.resp = serve.getData(this.nextUrl);
    this.dataSet = [
      {
        "status": null,
        "last_name": "User",
        "preferred_name": "Admin",
        "manager": {
          "url": null,
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386668",
        "city": null,
        "first_name": "Admin",
        "middle_name": null,
        "title": null,
        "work_phone": null,
        "personal_email": "sriharsha@example.com",
        "state": null,
        "date_of_birth": null,
        "location": {
          "url": null,
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386668/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": null,
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386668/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "admin",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": null,
        "is_admin": true,
        "work_email": "sriharsha@example.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386668",
        "country": null,
        "employee_number": null,
        "gender": ""
      },
      {
        "status": "active",
        "last_name": "Paoletti",
        "preferred_name": "Valentine",
        "manager": {
          "url": null,
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386671",
        "city": null,
        "first_name": "Valentine",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "05akwvi4@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386671/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386671/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "05akwvi4@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386671",
        "country": null,
        "employee_number": "1",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Ash",
        "preferred_name": "Nathan",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386674",
        "city": null,
        "first_name": "Nathan",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0q0v6r11@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386674/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386674/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0q0v6r11@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386674",
        "country": null,
        "employee_number": "2",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Dreher",
        "preferred_name": "Lisbeth",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386713",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386677",
        "city": null,
        "first_name": "Lisbeth",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0o0akdh0@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386677/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386677/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0o0akdh0@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386677",
        "country": null,
        "employee_number": "3",
        "gender": "F"
      },   
      {
        "status": "active",
        "last_name": "Colclough",
        "preferred_name": "Argelia",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386674",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386683",
        "city": null,
        "first_name": "Argelia",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0x154qnb@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386683/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386683/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0x154qnb@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386683",
        "country": null,
        "employee_number": "4",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Thoman",
        "preferred_name": "Emelia",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386686",
        "city": null,
        "first_name": "Emelia",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "00n26mys@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386686/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386686/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "00n26mys@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386686",
        "country": null,
        "employee_number": "5",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Lambrecht",
        "preferred_name": "Dortha",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386689",
        "city": null,
        "first_name": "Dortha",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0jnrmpeg@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386689/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386689/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0jnrmpeg@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386689",
        "country": null,
        "employee_number": "6",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Colclough",
        "preferred_name": "Jule",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386674",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386695",
        "city": null,
        "first_name": "Jule",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0obiwmma@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386695/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386695/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0obiwmma@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386695",
        "country": null,
        "employee_number": "7",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Thoman",
        "preferred_name": "Jule",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386698",
        "city": null,
        "first_name": "Jule",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0u19xd68@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386698/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386698/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0u19xd68@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386698",
        "country": null,
        "employee_number": "8",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Damewood",
        "preferred_name": "Marla",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386713",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386704",
        "city": null,
        "first_name": "Marla",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0k9hjb72@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386704/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386704/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0k9hjb72@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386704",
        "country": null,
        "employee_number": "9",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Petrone",
        "preferred_name": "Delila",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386707",
        "city": null,
        "first_name": "Delila",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0b9pbp1c@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386707/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386707/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0b9pbp1c@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386707",
        "country": null,
        "employee_number": "10",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Giancola",
        "preferred_name": "Lisbeth",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386713",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386710",
        "city": null,
        "first_name": "Lisbeth",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "01ww6995@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386710/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386710/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "01ww6995@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386710",
        "country": null,
        "employee_number": "11",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Petrone",
        "preferred_name": "Jammie",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386713",
        "city": null,
        "first_name": "Jammie",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0me9dgw6@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386713/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386713/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0me9dgw6@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386713",
        "country": null,
        "employee_number": "12",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Paoletti",
        "preferred_name": "Delila",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386716",
        "city": null,
        "first_name": "Delila",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "05dwioun@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386716/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386716/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "05dwioun@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386716",
        "country": null,
        "employee_number": "13",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Younker",
        "preferred_name": "Krista",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386695",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386719",
        "city": null,
        "first_name": "Krista",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0c73oz28@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386719/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386719/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0c73oz28@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386719",
        "country": null,
        "employee_number": "14",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Legrande",
        "preferred_name": "Bettyann",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386722",
        "city": null,
        "first_name": "Bettyann",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0qddlyrf@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386722/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386722/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0qddlyrf@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386722",
        "country": null,
        "employee_number": "15",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Nickell",
        "preferred_name": "Marla",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386725",
        "city": null,
        "first_name": "Marla",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0halgp4v@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386725/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386725/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0halgp4v@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386725",
        "country": null,
        "employee_number": "16",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Yan",
        "preferred_name": "Krista",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386728",
        "city": null,
        "first_name": "Krista",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0nqhsduv@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386728/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386728/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0nqhsduv@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386728",
        "country": null,
        "employee_number": "17",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Parkhurst",
        "preferred_name": "Gertrudis",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386671",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386731",
        "city": null,
        "first_name": "Gertrudis",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "0liz8pf7@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386731/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386731/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "0liz8pf7@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386731",
        "country": null,
        "employee_number": "18",
        "gender": "F"
      },
      {
        "status": "active",
        "last_name": "Heenan",
        "preferred_name": "Maricela",
        "manager": {
          "url": "https://api.zenefits.com/core/people/9386674",
          "object": "/meta/ref/detail",
          "ref_object": "/core/people"
        },
        "postal_code": null,
        "id": "9386734",
        "city": null,
        "first_name": "Maricela",
        "middle_name": null,
        "title": null,
        "work_phone": "(713) 555-1234",
        "personal_email": "05869ght@test.com",
        "state": null,
        "date_of_birth": "1980-01-01",
        "location": {
          "url": "https://api.zenefits.com/core/locations/367177",
          "object": "/meta/ref/detail",
          "ref_object": "/core/locations"
        },
        "subordinates": {
          "url": "https://api.zenefits.com/core/people/9386734/subordinates",
          "object": "/meta/ref/list",
          "ref_object": "/core/people"
        },
        "department": {
          "url": "https://api.zenefits.com/core/departments/219736",
          "object": "/meta/ref/detail",
          "ref_object": "/core/departments"
        },
        "employments": {
          "url": "https://api.zenefits.com/core/people/9386734/employments",
          "object": "/meta/ref/list",
          "ref_object": "/core/employments"
        },
        "type": "regular",
        "company": {
          "url": "https://api.zenefits.com/core/companies/216397",
          "object": "/meta/ref/detail",
          "ref_object": "/core/companies"
        },
        "personal_pronoun": null,
        "street1": null,
        "street2": null,
        "object": "/core/people",
        "photo_thumbnail_url": null,
        "personal_phone": "(650) 555-4321",
        "is_admin": false,
        "work_email": "05869ght@test.com",
        "photo_url": null,
        "url": "https://api.zenefits.com/core/people/9386734",
        "country": null,
        "employee_number": "19",
        "gender": "F"
      }
    ];
  }

  ngOnInit() {
    //console.log(this.res);
  }

  set(node: any) {

  }

 

}
