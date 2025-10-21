import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextSizeComponent } from './text_size';
import { ContrasteComponent } from './contraste/contraste.component';



@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TextSizeComponent, RouterModule, ContrasteComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
