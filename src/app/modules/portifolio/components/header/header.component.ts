import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}
  currentPage: string = 'aboutme' ;

  ngOnInit(){
    this.checkeScroll();
  }

  @HostListener('window:scroll', [])
  checkeScroll(){
    const sections = document.querySelectorAll('section');

    sections.forEach(sections =>{
      const sectionId = sections.getAttribute('id');
      const sectionOffset = sections.getBoundingClientRect().top;

      if(sectionOffset <= 50 && sectionId !== null){
        this.updateCurrentPage(sectionId)
      }
    })
  }


  //Header click action -------------------------------------------------
  updateCurrentPage(page: string){
    this.currentPage = page
  }

  scrollElement(elementId: string ): void {
    if (typeof elementId === 'string') {
      const element = document.getElementById(elementId);
      const active = document.getElementsByClassName(elementId);
      if (element) {
        this.updateCurrentPage(elementId)
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }else if (typeof elementId === 'number'){
      this.updateCurrentPage(elementId)
      window.scrollTo({top: elementId, behavior: 'smooth'})
    }
  }
}
