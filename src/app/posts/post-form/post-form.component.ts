import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  publish(){
    alert("neveikia");
  }
}
