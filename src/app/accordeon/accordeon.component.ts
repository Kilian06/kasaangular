import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss']
})
export class AccordeonComponent implements OnInit {
  @Input() titre: any;
  @Input() data: any;
  isDataArray: any;
  isShowDivIf:boolean = true;  


  constructor() {}

  ngOnInit() {
    this.isDataArray = Array.isArray(this.data);
    console.log(this.data);
    console.log(this.isDataArray);
  }

  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }  

}
