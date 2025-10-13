import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TypographyComponent {
  selectedFont: string = 'Arial';
  fontSize: number = 16;
  fontWeight: string = 'normal';

  // Lista de fuentes disponibles
  availableFonts = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'system-ui', label: 'Sistema' }
  ];

  // Lista de pesos de fuente
  fontWeights = [
    { value: 'normal', label: 'Normal' },
    { value: 'bold', label: 'Negrita' },
    { value: '300', label: 'Ligera' },
    { value: '600', label: 'Semi Negrita' }
  ];

  onFontChange() {
    document.documentElement.style.setProperty('--font-family', this.selectedFont);
    localStorage.setItem('appFont', this.selectedFont);
  }

  onFontSizeChange() {
    document.documentElement.style.setProperty('--base-font-size', `${this.fontSize}px`);
    localStorage.setItem('appFontSize', this.fontSize.toString());
  }

  onFontWeightChange() {
    document.documentElement.style.setProperty('--font-weight', this.fontWeight);
    localStorage.setItem('appFontWeight', this.fontWeight);
  }

  ngOnInit() {
    // Recuperar configuraciones guardadas
    const savedFont = localStorage.getItem('appFont');
    const savedFontSize = localStorage.getItem('appFontSize');
    const savedFontWeight = localStorage.getItem('appFontWeight');

    if (savedFont) {
      this.selectedFont = savedFont;
      this.onFontChange();
    }

    if (savedFontSize) {
      this.fontSize = parseInt(savedFontSize);
      this.onFontSizeChange();
    }

    if (savedFontWeight) {
      this.fontWeight = savedFontWeight;
      this.onFontWeightChange();
    }
  }
}