import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit() {
    const img = this.el.nativeElement;
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const imgElement = entry.target as HTMLImageElement;
            
            // Set the src if data-src exists
            if (imgElement.dataset['src']) {
              imgElement.src = imgElement.dataset['src'];
            }
            
            // Add loaded class for fade-in effect
            imgElement.classList.add('lazy-loaded');
            
            // Stop observing
            observer.unobserve(imgElement);
          }
        });
      }, {
        rootMargin: '50px' // Start loading 50px before entering viewport
      });

      observer.observe(img);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      if (img.dataset['src']) {
        img.src = img.dataset['src'];
      }
    }
  }
}
