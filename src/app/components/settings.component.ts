import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextSizeComponent } from './text_size';



@Component({
  selector: 'app-settings',
  standalone: true,
<<<<<<< HEAD
=======
  imports: [TextSizeComponent, RouterModule],
>>>>>>> 5b998959f71d152cb81bc50ccc5580b75a4a6880
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  cursorSize: number = 16; // Tamaño inicial del cursor en píxeles

  changeCursorSize(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.cursorSize = value;
    document.documentElement.style.setProperty('--cursor-size', `${value}px`);
  }

  
  
  }
