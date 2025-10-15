import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="contact-header">
        <div class="pixel-decoration"></div>
        <h1 class="contact-title">Contacto</h1>
        <div class="pixel-decoration"></div>
      </div> 

      <div class="contact-content">
        <div class="contact-grid">
          <!-- Información de contacto -->
          <div class="contact-info-section">
            <div class="info-header">
              <h2>¿Cómo contactarnos?</h2>
              <div class="underline"></div>
            </div>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📧</div>
                <div class="method-details">
                  <h3>Email</h3>
                  <p>kawiim89&#64;gmail.com</p>
                  <p class="method-description">Respuesta en 24 horas</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-details">
                  <h3>Teléfono</h3>
                  <p>+52 (558) 825-4702</p>
                  <p class="method-description">Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">📍</div>
                <div class="method-details">
                  <h3>Dirección</h3>
                  <p>50 R. Cruz</p>
                  <p class="method-description">Ciudad de México, Cd. de México</p>
                </div>
              </div>
            </div>

            <!-- Horarios -->
            <div class="hours-section">
              <h3>Horarios de Atención</h3>
              <div class="hours-list">
                <div class="hour-item">
                  <span class="day">Lunes - Viernes</span>
                  <span class="time">9:00 AM - 6:00 PM</span>
                </div>
                <div class="hour-item">
                  <span class="day">Sábado</span>
                  <span class="time">10:00 AM - 4:00 PM</span>
                </div>
                <div class="hour-item">
                  <span class="day">Domingo</span>
                  <span class="time">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      min-height: 100vh;
      background: var(--bg-primary);
      padding: clamp(20px, 5vw, 40px) clamp(15px, 4vw, 30px);
    }

    .contact-header {
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

    .contact-title {
      color: var(--heading-color);
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
    }

    .contact-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(30px, 6vw, 50px);
      margin-bottom: clamp(40px, 8vw, 60px);
    }

    .info-header,
    .form-header,
    .faq-header {
      text-align: center;
      margin-bottom: clamp(25px, 5vw, 35px);
    }

    .info-header h2,
    .form-header h2,
    .faq-header h2 {
      color: var(--accent-color);
      font-size: clamp(1.3rem, 3.5vw, 2rem);
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin: 0 0 10px 0;
    }

    .underline {
      width: 60px;
      height: 3px;
      background: var(--accent-color);
      margin: 0 auto;
      position: relative;
    }

    .underline::after {
      content: '';
      position: absolute;
      right: -6px;
      top: -2px;
      width: 6px;
      height: 7px;
      background: var(--accent-color);
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
    }

    .contact-method {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: 20px;
      transition: all 0.3s;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .contact-method:hover {
      border-color: var(--accent-color);
      transform: translateY(-2px);
      box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.3);
    }

    .method-icon {
      font-size: 1.8rem;
      background: var(--accent-color);
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--border-color);
      box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
      flex-shrink: 0;
    }

    .method-details h3 {
      color: var(--heading-color);
      font-size: 1.1rem;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 5px 0;
    }

    .method-details p {
      color: var(--text-primary);
      font-size: 1rem;
      margin: 0;
      font-family: var(--retro-font);
    }

    .method-description {
      color: var(--text-secondary) !important;
      font-size: 0.9rem !important;
      margin-top: 5px !important;
    }

    .hours-section {
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: 25px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .hours-section h3 {
      color: var(--accent-color);
      font-size: 1.2rem;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 20px 0;
      text-align: center;
    }

    .hours-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .hour-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid var(--border-color);
    }

    .hour-item:last-child {
      border-bottom: none;
    }

    .day {
      color: var(--text-primary);
      font-family: var(--retro-font);
      font-weight: bold;
    }

    .time {
      color: var(--text-secondary);
      font-family: var(--retro-font);
    }

    .contact-form {
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: clamp(25px, 5vw, 35px);
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      color: var(--text-primary);
      font-family: var(--pixel-font);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .form-input,
    .form-select,
    .form-textarea {
      width: 100%;
      background: var(--bg-primary);
      border: 2px solid var(--border-color);
      padding: 12px 15px;
      color: var(--text-primary);
      font-family: var(--retro-font);
      font-size: 1rem;
      transition: all 0.3s;
      box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.3);
    }

    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(255, 215, 0, 0.3);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
    }

    .checkbox-label {
      display: flex !important;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      margin-bottom: 0 !important;
    }

    .form-checkbox {
      appearance: none;
      width: 20px;
      height: 20px;
      background: var(--bg-primary);
      border: 2px solid var(--border-color);
      position: relative;
      cursor: pointer;
    }

    .form-checkbox:checked {
      background: var(--accent-color);
      border-color: var(--accent-color);
    }

    .form-checkbox:checked::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: black;
      font-weight: bold;
      font-size: 14px;
    }

    .submit-btn {
      width: 100%;
      background: var(--accent-color);
      color: black;
      border: 2px solid var(--border-color);
      padding: 15px 25px;
      font-family: var(--pixel-font);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    }

    .submit-btn:hover:not(:disabled) {
      background: var(--accent-hover);
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-icon {
      font-size: 1.2rem;
    }

    .success-message {
      background: #4CAF50;
      border: 2px solid #45a049;
      padding: 25px;
      text-align: center;
      margin-top: 20px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .success-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .success-message h3 {
      color: white;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 10px 0;
    }

    .success-message p {
      color: white;
      font-family: var(--retro-font);
      margin: 0;
    }

    .quick-faq {
      background: var(--bg-secondary);
      border: 2px solid var(--border-color);
      padding: clamp(25px, 5vw, 35px);
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 45vw, 280px), 1fr));
      gap: 20px;
    }

    .faq-item {
      background: var(--bg-primary);
      border: 2px solid var(--border-color);
      padding: 20px;
      transition: all 0.3s;
      box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
    }

    .faq-item:hover {
      border-color: var(--accent-color);
      transform: translateY(-2px);
      box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.3);
    }

    .faq-item h3 {
      color: var(--accent-color);
      font-size: 1rem;
      font-family: var(--pixel-font);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0 10px 0;
    }

    .faq-item p {
      color: var(--text-primary);
      font-size: 0.9rem;
      line-height: 1.5;
      margin: 0;
      font-family: var(--retro-font);
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
      .contact-header {
        flex-direction: column;
        gap: 15px;
      }

      .pixel-decoration {
        width: 50px;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .faq-grid {
        grid-template-columns: 1fr;
      }

      .contact-method {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }

      .method-details {
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .contact-header {
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

      .method-icon {
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .contact-method,
      .faq-item,
      .submit-btn {
        transition: none;
      }

      .contact-method:hover,
      .faq-item:hover,
      .submit-btn:hover {
        transform: none;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  }

  isSubmitting = false
  showSuccessMessage = false

  onSubmit() {
    if (this.isSubmitting) return

    this.isSubmitting = true

    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false
      this.showSuccessMessage = true
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false
      }, 5000)
    }, 2000)
  }
}