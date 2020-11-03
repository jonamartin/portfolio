import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulink',
  templateUrl: './menulink.component.html',
  styleUrls: ['./menulink.component.css']
})
export class MenulinkComponent implements OnInit {

 @Input() public path: string;
 @Input() public click: Function;
   
  constructor() {}

  ngOnInit(): void {

  }

}
