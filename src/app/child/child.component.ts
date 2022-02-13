import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }


  //11.parent to child
  // @Input() item=0; //print item in child html file
  // @Input() item1=20;
  // @Input() item2:{name:string,email:string}={name:'',email:''};


  //12.child to parent 
  @Output() updateDataEvent = new EventEmitter<string>(); //updateDataEvent use in child html
  
  ngOnInit(): void {
  }

}
