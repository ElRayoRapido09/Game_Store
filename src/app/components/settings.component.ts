import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextSizeComponent } from './text_size';



@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TextSizeComponent, RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
