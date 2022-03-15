import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title = "List of Courses";
  imageUrl = "https://picsum.photos/400/200";
  colSpan = 2;
  isActive:boolean = true;
  email:string | undefined;
  email2: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSave($event: any){
    //evento para previnir o bubble event (que continue seguindo para os elementos sobrepostos)
    $event.stopPropagation();
    console.log('button was clicked', $event);
  }

  onDivClicked(){
    console.log("div was clicked");
  }

  onKeyUp($event: any){
    if($event){
      console.log("ENTER was pressed")
    }
  }

  onKeyUp2(email: string){
    console.log(email);
  }

  onKeyUp3(){
    console.log(this.email2);
  }

}
