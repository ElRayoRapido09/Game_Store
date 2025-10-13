import { Component } from '@angular/core';
import { TextSizeComponent } from './text_size';

@Component({
  selector: 'app-settings',
  imports: [TextSizeComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
