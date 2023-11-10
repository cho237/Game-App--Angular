import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  openMenu: boolean = false;
  scroll: boolean = false;

  onMenuButton() {
    this.openMenu = !this.openMenu;
  }

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  
}
