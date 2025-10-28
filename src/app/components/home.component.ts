import { Component, HostListener, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, Router } from "@angular/router" //kevin
import  { GameService } from "../services/game.service"
import { AuthService } from "../services/auth.service"
import type { Game } from "../models/game.model"
import { GameCardComponent } from "./game-card.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, GameCardComponent],
  template: `
    <main class="home-container" role="main">
      <!-- Hero Section -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-content">
          <h1 id="hero-title">Descubre los mejores juegos digitales</h1>
          <p>Explora nuestra amplia selección de videojuegos para todas las plataformas</p>
          <div class="hero-buttons">
            <a routerLink="/games" class="btn btn-primary" aria-label="Explorar juegos disponibles">Explorar Juegos</a>
            <a routerLink="/register" class="btn btn-secondary" aria-label="Ir a registro de usuario">Registrarse</a>
          </div>
        </div>
      </section>
      
      <!-- Featured Games -->
      <section class="section" aria-labelledby="featured-title">
        <div class="section-header">
          <h2 id="featured-title">Juegos Destacados</h2>
          <a routerLink="/games" class="view-all" aria-label="Ver todos los juegos destacados">Ver todos</a>
        </div>
        
        <div class="games-grid" role="list">
          <app-game-card 
            *ngFor="let game of featuredGames" 
            [game]="game"
            role="listitem">
          </app-game-card>
        </div>
      </section>
      
      <!-- New Releases -->
      <section class="section" aria-labelledby="new-releases-title">
        <div class="section-header">
          <h2 id="new-releases-title">Nuevos Lanzamientos</h2>
          <a routerLink="/games" [queryParams]="{sort: 'newest'}" class="view-all" aria-label="Ver todos los nuevos lanzamientos">Ver todos</a>
        </div>
        
        <div class="games-grid" role="list">
          <app-game-card 
            *ngFor="let game of newReleases" 
            [game]="game"
            role="listitem">
          </app-game-card>
        </div>
      </section>
      
      <!-- Deals -->
      <section class="section" aria-labelledby="deals-title">
        <div class="section-header">
          <h2 id="deals-title">Ofertas Especiales</h2>
          <a routerLink="/games" [queryParams]="{discount: 'true'}" class="view-all" aria-label="Ver todas las ofertas especiales">Ver todas</a>
        </div>
        
        <div class="games-grid" role="list">
          <app-game-card 
            *ngFor="let game of discountedGames" 
            [game]="game"
            role="listitem">
          </app-game-card>
        </div>
      </section>
      
      <!-- Categories -->
      <section class="section categories-section" aria-labelledby="categories-title">
        <h2 id="categories-title">Explora por Categorías</h2>
        
        <div class="categories-grid" role="list">
          <div class="category-card" *ngFor="let category of categories" role="listitem">
            <a routerLink="/games" [queryParams]="{category: category.name}" [attr.aria-label]="'Ver juegos en categoría ' + category.name">
              <div class="category-image" [style.background-image]="'url(' + category.image + ')'">
                <div class="category-overlay"></div>
                <h3>{{ category.name }}</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <!-- Newsletter -->
      <section class="newsletter" aria-labelledby="newsletter-title">
        <div class="newsletter-content">
          <h2 id="newsletter-title">Suscríbete a nuestro boletín</h2>
          <p>Recibe las últimas noticias, ofertas y lanzamientos directamente en tu correo.</p>
          <form class="newsletter-form" role="form" aria-label="Formulario de suscripción al boletín">
            <input type="email" placeholder="Tu correo electrónico" aria-label="Ingresa tu correo electrónico">
            <button type="submit" class="btn btn-primary" aria-label="Suscribirse al boletín">Suscribirse</button>
          </form>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
    .home-container {
      width: 100%;
    }
    
    /* Hero Section */
    .hero {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
                url('/asset/Wallpaper.WebP') no-repeat center center;
      background-size: cover;
      color: white;
      padding: 120px 20px;
      text-align: center;
      margin-bottom: 40px;
      border-radius: 0;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid var(--border-color);
      box-shadow: 0 0 0 3px var(--accent-color);
      position: relative;
    }
    
    .hero::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      font-weight: 700;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      color: var(--text-primary);
      text-shadow: 4px 4px 0 rgba(0,0,0,0.8);
      letter-spacing: -1px;
    }
    
    .hero p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      opacity: 0.9;
      color: var(--text-secondary);
      font-family: var(--retro-font);
      text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
    }
    
    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    
    .btn {
      padding: 12px 24px;
      border-radius: 0;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s;
      display: inline-block;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      font-size: 0.8rem;
      border: 3px solid var(--border-color);
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
    }
    
    .btn-primary {
      background-color: var(--accent-color);
      color: white;
    }
    
    .btn-primary:hover {
      background-color: var(--accent-hover);
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);
    }
    
    .btn-secondary {
      background-color: transparent;
      color: white;
      border: 3px solid var(--border-color);
    }
    
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);
    }
    
    /* Sections */
    .section {
      margin-bottom: 60px;
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 3px solid var(--border-color);
      padding-bottom: 10px;
    }
    
    .section-header h2 {
      font-size: 1.8rem;
      color: var(--heading-color);
      position: relative;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      margin: 0;
      text-shadow: 3px 3px 0 rgba(0,0,0,0.5);
    }
    
    .view-all {
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s;
      font-family: var(--pixel-font);
      font-size: 0.8rem;
      text-transform: uppercase;
      border: 2px solid var(--border-color);
      padding: 5px 10px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    }
    
    .view-all:hover {
      color: var(--accent-hover);
      text-decoration: none;
      transform: translate(-2px, -2px);
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
      text-shadow: 0 0 5px var(--accent-color);
    }
    
    /* Games Grid */
    .games-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    /* Categories */
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .category-card {
      border-radius: 0;
      overflow: hidden;
      transition: transform 0.3s;
      border: 3px solid var(--border-color);
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
    }
    
    .category-card:hover {
      transform: translate(-4px, -4px) rotate(2deg);
      box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.5);
    }
    
    .category-image {
      height: 150px;
      background-size: cover;
      background-position: center;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .category-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
    }
    
    .category-image h3 {
      color: white;
      font-size: 1.2rem;
      position: relative;
      z-index: 1;
      text-align: center;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.8);
    }
    
    /* Newsletter */
    .newsletter {
      background-color: var(--bg-tertiary);
      color: white;
      padding: 60px 20px;
      border-radius: 0;
      margin-bottom: 40px;
      border: 3px solid var(--border-color);
      box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.5);
      position: relative;
    }
    
    .newsletter::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1) 10px,
        transparent 10px,
        transparent 20px
      );
      pointer-events: none;
    }
    
    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    
    .newsletter h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      color: var(--text-primary);
      text-shadow: 3px 3px 0 rgba(0,0,0,0.5);
    }
    
    .newsletter p {
      margin-bottom: 25px;
      opacity: 0.9;
      color: var(--text-secondary);
      font-family: var(--retro-font);
      font-size: 1.2rem;
    }
    
    .newsletter-form {
      display: flex;
      gap: 10px;
    }
    
    .newsletter-form input {
      flex: 1;
      padding: 12px 15px;
      border: 3px solid var(--border-color);
      border-radius: 0;
      font-size: 1rem;
      background-color: var(--input-bg);
      color: var(--text-primary);
      font-family: var(--retro-font);
    }
    
    @media (max-width: 768px) {
      .hero {
        padding: 80px 15px;
        min-height: 400px;
      }
      
      .hero h1 {
        font-size: 2rem;
        margin-bottom: 15px;
      }
      
      .hero p {
        font-size: 1rem;
        margin-bottom: 25px;
      }
      
      .games-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
      
      .newsletter-form input, 
      .newsletter-form button {
        width: 100%;
      }
      
      .section {
        padding: 30px 15px;
      }
    }

    @media (max-width: 550px) {
      .hero {
        padding: 60px 10px;
        min-height: 350px;
        margin-bottom: 30px;
      }
      
      .hero h1 {
        font-size: 1.8rem;
        line-height: 1.2;
        margin-bottom: 12px;
      }
      
      .hero p {
        font-size: 0.95rem;
        margin-bottom: 20px;
        line-height: 1.4;
      }
      
      .hero-buttons {
        gap: 12px;
      }
      
      .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
        min-width: 140px;
      }
      
      .games-grid {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 12px;
      }
      
      .categories-grid {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .category-card {
        border-width: 2px;
      }
      
      .category-image {
        height: 120px;
      }
      
      .section {
        padding: 25px 10px;
      }
      
      .section-header h2 {
        font-size: 1.5rem;
        margin-bottom: 15px;
      }
      
      .newsletter {
        padding: 30px 10px;
      }
      
      .newsletter h2 {
        font-size: 1.5rem;
        margin-bottom: 12px;
      }
      
      .newsletter p {
        font-size: 1rem;
        margin-bottom: 20px;
      }
    }
    
    @media (max-width: 480px) {
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .btn {
        width: 100%;
        max-width: 200px;
      }
      
      .games-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 10px;
      }
      
      .categories-grid {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      
      .category-image {
        height: 100px;
      }
    }

    @media (max-width: 380px) {
      .hero {
        padding: 50px 8px;
        min-height: 300px;
      }
      
      .hero h1 {
        font-size: 1.6rem;
        line-height: 1.1;
      }
      
      .hero p {
        font-size: 0.9rem;
        margin-bottom: 18px;
      }
      
      .games-grid {
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      
      .categories-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      
      .category-image {
        height: 80px;
      }
      
      .btn {
        padding: 8px 16px;
        font-size: 0.8rem;
        min-width: 120px;
      }
      
      .section {
        padding: 20px 8px;
      }
      
      .newsletter {
        padding: 25px 8px;
      }
    }
  `,
  ],
})
export class HomeComponent implements OnInit {
  featuredGames: Game[] = []
  newReleases: Game[] = []
  discountedGames: Game[] = []

  categories = [
    { name: "RPG", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop" },
    { name: "Acción/Aventura", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop" },
    { name: "FPS", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop" },
    { name: "Deportes", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop" },
  ]

  constructor(private gameService: GameService, private authService: AuthService, private router: Router) {}

  // kevin
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === 'l') {
      event.preventDefault();
      this.logout();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      console.log('🏠 Home component received games update:', games.length, 'games');
      
      // Juegos destacados (los 4 con mejor rating)
      this.featuredGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 4)

      // Nuevos lanzamientos (ordenados por fecha)
      this.newReleases = [...games]
        .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
        .slice(0, 4)

      // Juegos con descuento
      this.discountedGames = games.filter((game) => game.discount).slice(0, 4)
      
      console.log('🎮 Featured games updated:', this.featuredGames.length);
    })
  }
}
