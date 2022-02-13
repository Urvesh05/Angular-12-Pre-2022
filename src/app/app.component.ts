import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import {NgForm} from  '@angular/forms';
import {FormGroup,FormControl} from  '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  //1.Interpolation- show daynamic data in html page 
  interpolation="Use interpolation";

  //using funtion
  getData() //interpolation use funtion in html page
  {
    return "Get Function Data"
  };

  //using arry show data in html
  arry=[{
    name:"Pankaj",
    age:"22",
    add:"Baroda"
    }
  ];


 //2.two-way binding 
  // define property use in html page
  name:any; 


//3,Event Binding 
mouseEvent='';
showData($event:any)
{
   this.mouseEvent=$event
  console.log("button is clicked ");if($event)
  {
    //console.log($event.target);
    console.log($event.target.value);
  }
  return this.mouseEvent=$event.target.value
}

// Using keyup event on the input element.
text='';
onKeyUp(presskey:any)
{
  this.text += presskey.target.value+ " | ";
  console.log(this.text+=presskey.target.value +" | "); 
}

// Using keyDown event on the input element.
onKeyDown(eventsfire:any)
{
  console.log(eventsfire)
}

//4.Property Binding
userName="Rahul";
userName1="Pravin";
disabled=false;

//5.style Binding
color="red";
userData="Text color is styled using style binding";
bgColor="yellow";

//button click to change color
updateColor()
{
  this.color="blue";
  this.bgColor="pink"
}

//6.Get Input Box Value And Display
inputdata='';
getValue3(inputval:any)
{
  console.log(inputval)
  this.inputdata=inputval;
  
}

//7.if else condition
// show=true;
show=false;
// show="yes";

// esle if or multipale condition
color1="green";

//switch condition use multipale condition check
color2="red";


//ngFor Loop
// users=['anul','pink']

movies: any[] =[
 
  {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
  {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
  {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
  {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
  {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
]


//ngFor Nasted Loop
userArry=[
  {name:'Mohan',Phone:'123',socialmedia:['facebook','instagram','gmail']},
  {name:'Naresh',Phone:'333',socialmedia:['gmail','facebook','instagram']},
  {name:'pritesh',Phone:'222',socialmedia:[,'instagram','gmail','facebook']},
  {name:'rahul',Phone:'123343',socialmedia:['instagram','facebook','gmail']},
]

//8. Form
usergetData5:any={};
getData5(getData5:NgForm)
  {
    console.warn(getData5);
    this.usergetData5=getData5
  }

  
  //9.Toggal data
  displayData=true;
  Toggal()
  {
    this.displayData=!this.displayData;
  }


  //10.  TODO List (Add task Button click to add and Delete data)

  list:any[]=[];//blank Array
  addTask(task1:string)
  {
    console.warn(task1);
    this.list.push({id:this.list.length,name:task1}) //push data in list (array)
    console.warn(this.list);
  }

  removeTask(id:number)
  {
    console.warn(id);
    this.list=this.list.filter(taksData=>taksData.id!==id) //remove data in list (array)
  }


  //11. Parent to Child Componenet data passing..
  // pData=10; //pData variable define in component.ts file  
  // upadteChild()
  // {
  //   // this.pData=Math.random();
  //   this.pData=Math.floor(Math.random()*10);
  // }

  //Using Array (Data Resuable Componemt) parent ro child
  // userDetails=[
  //   {name:'Pavan',email:'test@gmail.com'},
  //   {name:'Mayank',email:'mayank@gmail.com'},
  //   {name:'Aman',email:'Aman@gmail.com'},
  // ]


  //12. Send Data Child To Parent Components
  //create function and use to html file than send function to child components
  dataParent='defult Value Change';
  parentData(item4:any)
  {
    console.log(this.dataParent=item4);
    this.dataParent=item4;
  }


  //13.Templet Reference Variable 
  getVal(reference:HTMLInputElement)
  {
    // console.log(reference);
    console.log(reference);
  }


  //14.pipes....
  test="Mayank Patel";
  today=Date();
  usingSlice="The Twon is a Good in Night"

  jsonpipe={
    name:'Pankaj',
    age:23
  }

}