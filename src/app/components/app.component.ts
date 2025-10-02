import { Component, OnInit, Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../services/theme.service";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container" 
         [class.dark-theme]="currentTheme === 'dark'" 
         [class.cyberpunk-theme]="currentTheme === 'cyberpunk'"
         [class.retro-theme]="currentTheme === 'retro'">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .main-content {
      flex: 1;
      padding: 20px;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    
    .app-container.dark-theme {
      background-color: #220033;
      color: #00ff99;
    }
    
    .app-container.cyberpunk-theme {
      background-color: #000033;
      color: #ffcc00;
    }
    
    .app-container.retro-theme {
      background-color: #121212;
      color: #f5f5f7;
    }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = "GameStore";
  currentTheme: 'cyberpunk' | 'retro' | 'dark' = 'cyberpunk';

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {
    console.log("AppComponent: Constructor iniciado");
  }

  ngOnInit(): void {
    console.log("AppComponent: ngOnInit iniciado");

    this.themeService.currentTheme$.subscribe((theme) => {
      console.log(`AppComponent: Tema recibido: ${theme}`);
      this.currentTheme = theme as any;
      
      // Aplicar tema al body del documento
      this.renderer.removeClass(document.body, "dark-theme");
      this.renderer.removeClass(document.body, "cyberpunk-theme");
      this.renderer.removeClass(document.body, "retro-theme");
      
      if (theme === "dark") {
        this.renderer.addClass(document.body, "dark-theme");
      } else if (theme === "cyberpunk") {
        this.renderer.addClass(document.body, "cyberpunk-theme");
      } else if (theme === "retro") {
        this.renderer.addClass(document.body, "retro-theme");
      }
    });

    setTimeout(() => {
      console.log("AppComponent: Registrando estado del tema");
      this.themeService.logCurrentState();
    }, 500);

    console.log("AppComponent: ngOnInit completado");
  }
}
