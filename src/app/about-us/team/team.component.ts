import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  team: any = [
    {
      image: 'Claudia 1.svg',
      name: 'Claudia jones',
      title: 'COO',
    },
    {
      image: 'Beverly 1.svg',
      name: 'Beverly hills',
      title: 'Adviser',
    },
    {
      image: 'Bill 1.svg',
      name: 'Bill praise',
      title: 'Secretory',
    },
    {
      image: 'Avatar 1.svg',
      name: 'Nji kamdoum',
      title: 'Manager',
    },
  ];
}
