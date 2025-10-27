import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-privacy-policy",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="privacy-container">
      <div class="privacy-header">
        <div class="pixel-decoration"></div>
        <h1 class="privacy-title">Política de Privacidad</h1>
        <div class="pixel-decoration"></div>
      </div>

      <div class="privacy-content">
        <div class="last-updated">
          <p>Última actualización: {{ lastUpdated }}</p>
        </div>

        <section class="privacy-section">
          <h2>1. Información que Recopilamos</h2>
          <p>
            En GameStore, recopilamos información personal que nos proporcionas directamente cuando:
          </p>
          <ul>
            <li>Creas una cuenta en nuestro sitio web</li>
            <li>Realizas una compra</li>
            <li>Te suscribes a nuestro boletín</li>
            <li>Nos contactas para solicitar soporte</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>2. Cómo Utilizamos tu Información</h2>
          <p>
            Utilizamos la información recopilada para:
          </p>
          <ul>
            <li>Procesar y completar tus pedidos</li>
            <li>Proporcionarte soporte al cliente</li>
            <li>Enviarte actualizaciones sobre tus pedidos</li>
            <li>Mejorar nuestros servicios y experiencia de usuario</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>3. Compartir Información</h2>
          <p>
            No vendemos, comercializamos ni transferimos tu información personal a terceros, 
            excepto en los siguientes casos:
          </p>
          <ul>
            <li>Proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web</li>
            <li>Cuando sea requerido por ley</li>
            <li>Para proteger nuestros derechos y seguridad</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>4. Seguridad de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
            tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>
        </section>

        <section class="privacy-section">
          <h2>5. Cookies</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies nos ayudan a:
          </p>
          <ul>
            <li>Recordar tus preferencias</li>
            <li>Mantener tu sesión activa</li>
            <li>Analizar el tráfico del sitio web</li>
            <li>Personalizar contenido</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>6. Tus Derechos</h2>
          <p>
            Tienes derecho a:
          </p>
          <ul>
            <li>Acceder a tu información personal</li>
            <li>Rectificar datos incorrectos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
            <li>Portabilidad de datos</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>7. Menores de Edad</h2>
          <p>
            Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
            conscientemente información personal de menores sin el consentimiento de los padres.
          </p>
        </section>

        <section class="privacy-section">
          <h2>8. Cambios a esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
            Te notificaremos sobre cambios significativos publicando la nueva política en esta página.
          </p>
        </section>

        <section class="privacy-section">
          <h2>9. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
          </p>
          <div class="contact-info">
            <p>Email: privacy&#64;gamestore.com</p>
            <p>Teléfono: +1 (555) 123-4567</p>
            <p>Dirección: 123 Gaming Street, Tech City, TC 12345</p>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .privacy-container {
      min-height: 100vh;
      background: var(--bg-primary);
      padding: clamp(20px, 5vw, 40px) clamp(15px, 4vw, 30px);
    }

    .privacy-header {
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

    .privacy-title {
      color: var(--heading-color);
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
    }

    .privacy-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .last-updated {
      text-align: center;
      margin-bottom: clamp(30px, 6vw, 40px);
      padding: 15px;
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .last-updated p {
      color: var(--text-secondary);
      font-family: var(--retro-font);
      font-size: 0.9rem;
      margin: 0;
      font-style: italic;
    }

    .privacy-section {
      margin-bottom: clamp(30px, 6vw, 40px);
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: clamp(20px, 4vw, 30px);
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .privacy-section h2 {
      color: var(--accent-color);
      font-size: clamp(1.2rem, 3vw, 1.5rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 15px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--accent-color);
    }

    .privacy-section p {
      color: var(--text-primary);
      font-size: clamp(1rem, 2.5vw, 1.1rem);
      line-height: 1.6;
      margin-bottom: 15px;
      font-family: var(--retro-font);
    }

    .privacy-section ul {
      color: var(--text-primary);
      font-family: var(--retro-font);
      font-size: clamp(0.95rem, 2.3vw, 1.05rem);
      line-height: 1.5;
      margin: 15px 0;
      padding-left: 25px;
    }

    .privacy-section li {
      margin-bottom: 8px;
      position: relative;
    }

    .privacy-section li::marker {
      color: var(--accent-color);
    }

    .contact-info {
      background: var(--bg-primary);
      border: 2px solid var(--border-color);
      padding: 20px;
      margin-top: 15px;
      box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.3);
    }

    .contact-info p {
      color: var(--text-primary);
      font-family: var(--retro-font);
      font-size: 1rem;
      margin: 8px 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .contact-info p::before {
      content: '▸';
      color: var(--accent-color);
      font-family: var(--pixel-font);
      font-weight: bold;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
      .privacy-header {
        flex-direction: column;
        gap: 15px;
      }

      .pixel-decoration {
        width: 50px;
      }

      .privacy-section {
        padding: 20px 15px;
      }

      .privacy-section ul {
        padding-left: 20px;
      }
    }

    @media (max-width: 480px) {
      .privacy-header {
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

      .contact-info p {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
      }

      .contact-info p::before {
        align-self: flex-start;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .privacy-section,
      .last-updated,
      .contact-info {
        border-width: 3px;
      }

      .privacy-section h2 {
        border-bottom-width: 3px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .privacy-section,
      .last-updated,
      .contact-info {
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
      }
    }
  `]
})
export class PrivacyPolicyComponent {
  lastUpdated = '14 de octubre de 2025'
}