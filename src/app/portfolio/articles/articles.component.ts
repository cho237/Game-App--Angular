import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.slidesPerView = 1
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 640){
      this.slidesPerView = 2
    } 
    if(this.innerWidth > 925){
      this.slidesPerView = 3
    }
    console.log(this.slidesPerView)
  }
  slidesPerView: number = 3;
  public innerWidth: any;
  articles: any = [
    {
      title: 'Lorem Ipsum is simply dummy text dummy text ',
      p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      p2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: 'article_1.svg',
    },
    {
      title: 'Lorem Ipsum is simply dummy text dummy text ',
      p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      p2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: 'article_2.svg',
    },
    {
      title: 'Lorem Ipsum is simply dummy text dummy text ',
      p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      p2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: 'head-img.svg',
    },
  ];
  slides:any = [1,2,3]
}
