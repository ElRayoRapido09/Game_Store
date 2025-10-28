import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contraste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contraste.component.html',
  styleUrl: './contraste.component.css'
})

export class ContrasteComponent implements OnInit {
  contrasteActivo: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Cargar el estado guardado del contraste
    const contrasteGuardado = localStorage.getItem('contrasteActivo');
    if (contrasteGuardado === 'true') {
      this.contrasteActivo = true;
      this.aplicarContraste();
    }
  }

  toggleContraste() {
    this.contrasteActivo = !this.contrasteActivo;
    
    if (this.contrasteActivo) {
      this.aplicarContraste();
    } else {
      this.quitarContraste();
    }
    
    // Guardar el estado en localStorage
    localStorage.setItem('contrasteActivo', this.contrasteActivo.toString());
  }

  private aplicarContraste() {
    console.log('ContrasteComponent: Aplicando alto contraste');
    
    // 1. Limpiar TODOS los estilos inline del tema usando el servicio
    this.themeService.clearThemeInlineStyles();
    
    // 2. Agregar las clases de alto contraste
    const html = document.querySelector('html');
    const body = document.body;
    
    if (html) {
      html.classList.add('high-contrast');
    }
    body.classList.add('high-contrast');
    
    // 3. Aplicar estilos inline de alto contraste DIRECTAMENTE con setProperty
    if (body) {
      body.style.setProperty('background-color', '#000000', 'important');
      body.style.setProperty('color', '#FFFF00', 'important');
      body.style.setProperty('filter', 'none', 'important');
    }
    if (html) {
      html.style.setProperty('background-color', '#000000', 'important');
      html.style.setProperty('filter', 'none', 'important');
    }
    
    // 4. Aplicar estilos a elementos principales inmediatamente
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    
    if (header) {
      (header as HTMLElement).style.setProperty('background-color', '#000000', 'important');
      (header as HTMLElement).style.setProperty('color', '#FFFFFF', 'important');
    }
    if (footer) {
      (footer as HTMLElement).style.setProperty('background-color', '#000000', 'important');
      (footer as HTMLElement).style.setProperty('color', '#FFFFFF', 'important');
    }
    if (main) {
      (main as HTMLElement).style.setProperty('background-color', '#000000', 'important');
    }
    
    // 5. Forzar repaint múltiple
    if (body) {
      body.style.display = 'none';
      void body.offsetHeight; // Forzar reflow
      body.style.display = '';
    }
    
    // 6. Aplicar colores a todos los elementos de texto con múltiples delays
    requestAnimationFrame(() => {
      this.aplicarColoresAltoContraste();
      
      setTimeout(() => {
        this.aplicarColoresAltoContraste();
      }, 50);
      
      setTimeout(() => {
        this.aplicarColoresAltoContraste();
      }, 150);
    });
    
    console.log('ContrasteComponent: Alto contraste aplicado');
  }

  private quitarContraste() {
    const html = document.querySelector('html');
    const body = document.body;
    
    // 1. Remover la clase high-contrast PRIMERO
    if (html) {
      html.classList.remove('high-contrast');
      html.removeAttribute('style');
    }
    body.classList.remove('high-contrast');
    body.removeAttribute('style');
    
    // 2. Limpiar estilos inline de elementos principales
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (main) main.removeAttribute('style');
    if (header) header.removeAttribute('style');
    if (footer) footer.removeAttribute('style');
    
    // 3. Forzar repaint inmediato después de remover la clase
    if (body) {
      body.style.display = 'none';
      void body.offsetHeight; // Forzar reflow
      body.style.display = '';
    }
    
    // 4. Limpiar estilos inline de TODOS los elementos
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      if (htmlElement.style && htmlElement.hasAttribute('style')) {
        // Limpiar propiedades de color que pudimos haber aplicado
        htmlElement.style.removeProperty('color');
        htmlElement.style.removeProperty('background-color');
        
        // Limpiar propiedades de borde que pudimos haber aplicado
        htmlElement.style.removeProperty('border');
        htmlElement.style.removeProperty('border-color');
        htmlElement.style.removeProperty('border-width');
        htmlElement.style.removeProperty('border-style');
        htmlElement.style.removeProperty('border-top');
        htmlElement.style.removeProperty('border-bottom');
        htmlElement.style.removeProperty('border-left');
        htmlElement.style.removeProperty('border-right');
        
        // Si el elemento no tiene más estilos, remover el atributo
        if (htmlElement.style.length === 0) {
          htmlElement.removeAttribute('style');
        }
      }
    });
    
    // 5. Re-aplicar el tema actual después de quitar el alto contraste
    this.themeService.currentTheme$.subscribe(theme => {
      setTimeout(() => {
        this.themeService.setTheme(theme);
      }, 10);
    }).unsubscribe();
    
    // 6. Forzar otro repaint después de limpiar estilos
    requestAnimationFrame(() => {
      if (body) {
        body.style.display = 'none';
        void body.offsetHeight; // Forzar reflow
        body.style.display = '';
      }
    });
  }

  private aplicarColoresAltoContraste() {
    // Aplicar colores a TODOS los elementos de texto en una sola pasada
    const allTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, label, li, a, button, input, textarea, select, div');
    
    allTextElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      
      // SOLO excluir el theme dropdown, NO otros dropdowns
      if (htmlElement.closest('.theme-dropdown-menu') || 
          htmlElement.classList.contains('theme-dropdown-menu')) {
        return;
      }
      
      // Verificar si el elemento está dentro del footer o header
      const isInFooter = htmlElement.closest('footer') || htmlElement.closest('.footer');
      const isInHeader = htmlElement.closest('header') || htmlElement.closest('.header');
      
      // Enlaces (color cian o blanco dependiendo de ubicación)
      if (htmlElement.tagName === 'A') {
        if (!htmlElement.classList.contains('btn')) {
          // Enlaces en header: blanco
          if (isInHeader) {
            htmlElement.style.setProperty('color', '#FFFFFF', 'important');
          } else {
            htmlElement.style.setProperty('color', '#00FFFF', 'important');
          }
          htmlElement.style.setProperty('background-color', 'transparent', 'important');
        }
      }
      // Títulos (color blanco)
      else if (htmlElement.tagName.match(/^H[1-6]$/)) {
        htmlElement.style.setProperty('color', '#FFFFFF', 'important');
      }
      // Botones (color amarillo en fondo negro)
      else if (htmlElement.tagName === 'BUTTON' || htmlElement.classList.contains('btn')) {
        htmlElement.style.setProperty('background-color', '#000000', 'important');
        htmlElement.style.setProperty('color', '#FFFF00', 'important');
        htmlElement.style.setProperty('border-color', '#FFFF00', 'important');
      }
      // Inputs y textareas
      else if (htmlElement.tagName === 'INPUT' || htmlElement.tagName === 'TEXTAREA' || htmlElement.tagName === 'SELECT') {
        htmlElement.style.setProperty('background-color', '#000000', 'important');
        htmlElement.style.setProperty('color', '#FFFF00', 'important');
        htmlElement.style.setProperty('border-color', '#FFFF00', 'important');
      }
      // Elementos dentro del header (color blanco)
      else if (isInHeader) {
        htmlElement.style.setProperty('color', '#FFFFFF', 'important');
        htmlElement.style.setProperty('background-color', 'transparent', 'important');
      }
      // Elementos dentro del footer (color azul cian)
      else if (isInFooter) {
        htmlElement.style.setProperty('color', '#00FFFF', 'important');
        htmlElement.style.setProperty('background-color', 'transparent', 'important');
      }
      // Elementos de texto generales fuera del footer y header (párrafos, spans, labels, li - color amarillo)
      else {
        htmlElement.style.setProperty('color', '#FFFF00', 'important');
        htmlElement.style.setProperty('background-color', 'transparent', 'important');
      }
    });
    
    // Aplicar estilos específicos al fondo de los dropdowns del header
    const headerDropdowns = document.querySelectorAll('header .dropdown, .header .dropdown');
    headerDropdowns.forEach(dropdown => {
      (dropdown as HTMLElement).style.setProperty('background-color', '#000000', 'important');
      (dropdown as HTMLElement).style.setProperty('border-color', '#FFFFFF', 'important');
    });
    
    console.log(`ContrasteComponent: Colores aplicados a ${allTextElements.length} elementos`);
  }
}
