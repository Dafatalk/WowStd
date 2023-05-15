import { Component, ElementRef, OnInit  } from '@angular/core';


function isElementInViewport(el:any) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'wowstudio';
  videomp4uri="assets/video.mp4"


  currentIndex: number = 0; 

  constructor(private elRef: ElementRef ) { 
    
  }


  updateIndex(index: number) {
    this.currentIndex = index;
    if(this.currentIndex == 6){
      const slider = this.elRef.nativeElement.querySelector('.slider');
      slider.classList.add('pause');
    }
  }


  ngOnInit() {
    const videoElement = this.elRef.nativeElement.querySelector('#video');
    const cuadElement = this.elRef.nativeElement.querySelector('#cuad');
    const fqaElement = this.elRef.nativeElement.querySelector('#FQA');
    const inteElement = this.elRef.nativeElement.querySelector('#inte');
    const capaElement = this.elRef.nativeElement.querySelector('#capa');

    window.addEventListener('scroll', function() {
      if (isElementInViewport(videoElement)) {
        // El elemento #video está visible en la ventana actual del navegador.
      }

      if (isElementInViewport(cuadElement)) {
        // El elemento #cuad está visible en la ventana actual del navegador.
      }

      if (isElementInViewport(fqaElement)) {
        // El elemento #FQA está visible en la ventana actual del navegador.
      }

      if (isElementInViewport(inteElement)) {
        // El elemento #inte está visible en la ventana actual del navegador.
      }

      if (isElementInViewport(capaElement)) {
        // El elemento #capa está visible en la ventana actual del navegador.
      }
    });
  }



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
  scrollToHab() {
    const section = this.elRef.nativeElement.querySelector('#habita');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
}


