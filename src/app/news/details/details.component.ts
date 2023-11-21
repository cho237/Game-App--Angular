import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  listDetails: any = [
    {
      image: 'd-1.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#2351F5',
    },
    {
      image: 'd-2.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#FF8484',
    },
    {
      image: 'd-3.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#FF7C32',
    },
    {
      image: 'd-4.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#23A54F',
    },
    {
      image: 'd-5.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#FF8484',
    },
    {
      image: 'd-6.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#9921C3',
    },
    {
      image: 'd-7.svg',
      p1: 'Lorem Ipsum is simply dummy text dummy text',
      btnColor: '#2351F5',
    },
  ];
}
