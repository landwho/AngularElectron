import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:any;
  public lastName:any;
  public ID:any;
  public age:any;



  confirm(){

    let obj={
      "name":this.name,
      "lastname": this.lastName,
      "ID": this.ID,
      "age":this.age
    }
    console.log(obj);
    localStorage.setItem('register', JSON.stringify(obj));

  }




}
