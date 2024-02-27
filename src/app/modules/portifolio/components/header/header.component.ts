import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}
  currentPage: string = 'home';

  ngOnInit() {
    this.updateCurrentPage(this.currentPage)
    this.checkeScroll();
  }

  @HostListener('window:scroll', [])
  checkeScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach((sections) => {
      const sectionId = sections.getAttribute('id');
      const sectionOffset = sections.getBoundingClientRect().top;

      if (sectionOffset <= 200 && sectionId !== null) {
        this.updateCurrentPage(sectionId);
      }
    });
  }

  //Header click action -------------------------------------------------
  updateCurrentPage(page: string) {
    this.currentPage = page;
  }

  scrollElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (elementId === '0') {
      this.updateCurrentPage(elementId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (element) {
      this.updateCurrentPage(elementId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
