import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wowstudio';
  
  constructor(private elRef: ElementRef) { }

  scrollToStart() {
    const section = this.elRef.nativeElement.querySelector('#video');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollToUs() {
    const section = this.elRef.nativeElement.querySelector('#cuad');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollToFQA() {
    const section = this.elRef.nativeElement.querySelector('#FQA');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


