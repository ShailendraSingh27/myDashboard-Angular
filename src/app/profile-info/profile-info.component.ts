import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {

  constructor() { }

  isMCAActive=false;
  isBCAActive=true;
  isXIIActive=false;

  onClickMCA(){
    this.isMCAActive=true;
    this.isBCAActive=false;
    this.isXIIActive=false;
  }

  onClickBCA(){
    this.isMCAActive=false;
    this.isBCAActive=true;
    this.isXIIActive=false;
  }

  onClickXII(){
    this.isMCAActive=false;
    this.isBCAActive=false;
    this.isXIIActive=true;
  }


}
