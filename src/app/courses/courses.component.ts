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

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  text = `Lorem ipsum dolor sit amet. Et dicta exercitationem aut corporis incidunt non libero ipsa eos tenetur sint ut deserunt molestiae. Aut repellendus aperiam est explicabo consectetur in odio consectetur eos ullam maiores! Nam beatae repudiandae ea voluptatibus praesentium qui quaerat voluptatem sed dolorem veniam et corrupti reiciendis et similique velit quo modi nihil. Et quae ipsam ut saepe praesentium rem harum obcaecati. Et quam error est laborum voluptatum vel voluptatem corporis. Et mollitia tenetur sit quos dolor ea rerum consectetur cum similique quae in atque dolorum. In quia minima non omnis quaerat aut voluptatibus eligendi. Et eaque expedita est maxime iusto ea nemo itaque. Aut laudantium placeat  consequatur tenetur non perferendis magni qui porro reiciendis et beatae repellendus rem facere dolor.
  `

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
