import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
cardItems:any = [
  {
    btnText: "Lorem ipsum",
    btnColor: "#B000DC",
    p1: "Lorem Ipsum",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s"
  },
  {
    btnText: "Lorem ipsum",
    btnColor: "#DC4200",
    p1: "Lorem Ipsum",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s"
  },
  {
    btnText: "Lorem ipsum",
    btnColor: "#00DC8D",
    p1: "Lorem Ipsum",
    p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s"
  },
]
}
