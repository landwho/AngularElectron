import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let register = localStorage.getItem('register');
    //let storedSettings = JSON.parse(register);
    console.log(register);






  }

}
