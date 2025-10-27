import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-header">
        <div class="pixel-decoration"></div>
        <h1 class="about-title">Sobre Nosotros</h1>
        <div class="pixel-decoration"></div>
      </div>

      <div class="about-content">
        <!-- Historia -->
        <section class="about-section">
          <div class="section-header">
            <h2>Nuestra Historia</h2>
            <div class="underline"></div>
          </div>
          <div class="content-grid">
            <div class="text-content">
              <p>
                Todos hemos tenido siempre un problema, un error o alguna traba en algún videojuego, 
                algo sumamente difícil de solucionar, pero siempre estuvieron ahí.
              <p>
                Un pequeño sector de personas que siempre han encontrado una solución a todos nuestros problemas. 
                Hablo de los niños indios, con sus micrófonos de 2 pesos y una calidad de 480p han llenado 
                YouTube de soluciones  a los problemas mas raros del mundo de la tecnología.
              </p>
            </div>
          </div>
        </section>

        <!-- Misión -->
        <section class="about-section">
          <div class="section-header">
            <h2>Nuestra Misión</h2>
            <div class="underline"></div>
          </div>
          <div class="mission-cards">
            <div class="mission-card">
              <div class="card-icon">🎯</div>
              <h3>Calidad</h3>
              <p>Ofrecemos solo juegos auténticos y de la mejor calidad, garantizando una experiencia excepcional.</p>
            </div>
            <div class="mission-card">
              <div class="card-icon">💫</div>
              <h3>Innovación</h3>
              <p>Nos mantenemos a la vanguardia de las tendencias gaming para ofrecer lo último en entretenimiento.</p>
            </div>
            <div class="mission-card">
              <div class="card-icon">🤝</div>
              <h3>Comunidad</h3>
              <p>Creamos una comunidad de gamers donde todos pueden compartir su pasión por los videojuegos.</p>
            </div>
          </div>
        </section>

        <!-- Equipo -->
        <section class="about-section">
          <div class="section-header">
            <h2>Nuestro Equipo</h2>
            <div class="underline"></div>
          </div>

          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">👨‍💻</div>
              <h3>Jorge Velasquez</h3>
              <p class="member-role">Founder & CEO</p>
              <p>Apasionado gamer con más de 15 años de experiencia en la industria.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">�‍💼</div>
              <h3>Kevin Herrera</h3>
              <p class="member-role">Lead Developer</p>
              <p>Especialista en desarrollo frontend y experiencia de usuario.</p>
            </div>
            
            <div class="team-member">
              <div class="member-avatar">👨‍🎨</div>
              <h3>Antuane Figeroa</h3>
              <p class="member-role">UI/UX Designer</p>
              <p>Creativo enfocado en diseño de interfaces y experiencias gaming.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">👨‍🔧</div>
              <h3>Ricardo Mendoza</h3>
              <p class="member-role">Backend Developer</p>
              <p>Experto en desarrollo backend y arquitectura de sistemas.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">👨‍�</div>
              <h3>Angel Ordoñes</h3>
              <p class="member-role">Full Stack Developer</p>
              <p>Desarrollador versátil con experiencia en tecnologías web modernas.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">👨‍🎮</div>
              <h3>Emir Xolalpa</h3>
              <p class="member-role">Game Tester</p>
              <p>Especialista en testing y calidad de videojuegos.</p>
            </div>

            <div class="team-member">
              <div class="member-avatar">👨‍💼</div>
              <h3>Mastache Moreno</h3>
              <p class="member-role">Marketing Manager</p>
              <p>Experto en marketing digital y estrategias de crecimiento.</p>
            </div>
          </div>
        </section>

        <!-- Estadísticas -->
        <section class="about-section stats-section">
          <div class="section-header">
            <h2>Nuestros Números</h2>
            <div class="underline"></div>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">10,000+</div>
              <div class="stat-label">Juegos Vendidos</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">5,000+</div>
              <div class="stat-label">Clientes Satisfechos</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="stat-label">Títulos en Catálogo</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">4.8/5</div>
              <div class="stat-label">Calificación Promedio</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
      background: var(--bg-primary);
      padding: clamp(20px, 5vw, 40px) clamp(15px, 4vw, 30px);
    }

    .about-header {
      text-align: center;
      margin-bottom: clamp(40px, 8vw, 60px);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .pixel-decoration {
      width: clamp(40px, 8vw, 60px);
      height: 4px;
      background: var(--accent-color);
      position: relative;
    }

    .pixel-decoration::after {
      content: '';
      position: absolute;
      right: -6px;
      top: -2px;
      width: 6px;
      height: 8px;
      background: var(--accent-color);
    }

    .about-title {
      color: var(--heading-color);
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
    }

    .about-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-section {
      margin-bottom: clamp(50px, 10vw, 80px);
    }

    .section-header {
      text-align: center;
      margin-bottom: clamp(30px, 6vw, 40px);
    }

    .section-header h2 {
      color: var(--accent-color);
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 0 10px 0;
    }

    .underline {
      width: 80px;
      height: 3px;
      background: var(--accent-color);
      margin: 0 auto;
      position: relative;
    }

    .underline::after {
      content: '';
      position: absolute;
      right: -8px;
      top: -2px;
      width: 8px;
      height: 7px;
      background: var(--accent-color);
    }

    .content-grid {
      display: block;
    }

    .text-content p {
      color: var(--text-primary);
      font-size: clamp(1rem, 2.5vw, 1.1rem);
      line-height: 1.7;
      margin-bottom: 20px;
      font-family: var(--retro-font);
    }

    .mission-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr));
      gap: clamp(20px, 5vw, 30px);
    }

    .mission-card {
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: clamp(25px, 5vw, 35px);
      text-align: center;
      transition: all 0.3s;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .mission-card:hover {
      transform: translateY(-5px);
      box-shadow: 4px 6px 0 rgba(0, 0, 0, 0.3);
      border-color: var(--accent-color);
    }

    .card-icon {
      font-size: clamp(2.5rem, 6vw, 3rem);
      margin-bottom: 15px;
    }

    .mission-card h3 {
      color: var(--accent-color);
      font-size: clamp(1.2rem, 3vw, 1.4rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 15px 0;
    }

    .mission-card p {
      color: var(--text-primary);
      font-size: clamp(0.9rem, 2.2vw, 1rem);
      line-height: 1.6;
      margin: 0;
      font-family: var(--retro-font);
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30vw, 280px), 1fr));
      gap: clamp(25px, 5vw, 35px);
    }

    .team-member {
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: clamp(25px, 5vw, 35px);
      text-align: center;
      transition: all 0.3s;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .team-member:hover {
      transform: translateY(-3px);
      box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.3);
    }

    .member-avatar {
      font-size: clamp(3rem, 7vw, 4rem);
      background: var(--bg-tertiary);
      border: 2px solid var(--border-color);
      width: clamp(80px, 15vw, 100px);
      height: clamp(80px, 15vw, 100px);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px auto;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .team-member h3 {
      color: var(--heading-color);
      font-size: clamp(1.1rem, 3vw, 1.3rem);
      font-family: var(--pixel-font);
      margin: 0 0 5px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .member-role {
      color: var(--accent-color);
      font-size: clamp(0.9rem, 2.2vw, 1rem);
      font-family: var(--retro-font);
      font-weight: bold;
      margin: 0 0 15px 0 !important;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .team-member p:not(.member-role) {
      color: var(--text-primary);
      font-size: clamp(0.9rem, 2.2vw, 1rem);
      line-height: 1.5;
      margin: 0;
      font-family: var(--retro-font);
    }

    .stats-section {
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: clamp(30px, 6vw, 50px);
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 25vw, 200px), 1fr));
      gap: clamp(20px, 5vw, 30px);
    }

    .stat-card {
      text-align: center;
      padding: clamp(20px, 4vw, 25px);
    }

    .stat-number {
      color: var(--accent-color);
      font-size: clamp(2rem, 5vw, 3rem);
      font-family: var(--pixel-font);
      font-weight: bold;
      margin-bottom: 10px;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
    }

    .stat-label {
      color: var(--text-primary);
      font-size: clamp(0.9rem, 2.2vw, 1rem);
      font-family: var(--retro-font);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
      .about-header {
        flex-direction: column;
        gap: 15px;
      }

      .pixel-decoration {
        width: 50px;
      }

      .mission-cards,
      .team-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .about-header {
        gap: 10px;
      }

      .pixel-decoration {
        width: 30px;
        height: 3px;
      }

      .pixel-decoration::after {
        width: 4px;
        height: 6px;
        right: -4px;
        top: -1.5px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .mission-card,
      .team-member {
        transition: none;
      }

      .mission-card:hover,
      .team-member:hover {
        transform: none;
      }
    }
  `]
})
export class AboutComponent {}