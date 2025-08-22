import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-ngo-request-form',
  standalone: true,
  imports: [],
  templateUrl: './ngo-request-form.component.html',
  styleUrl: './ngo-request-form.component.css'
})
export class NgoRequestFormComponent {

  
    // 🔹 EmailJS send function
    public async sendEmail(e: Event) {
      e.preventDefault();
  
      try {
        const result = await emailjs.sendForm(
          'service_1vypnxp',
          'template_ztjv8uf',
          e.target as HTMLFormElement,
          'e1aXpfA6XJo_I8muJ'
        );
        console.log('SUCCESS!', result.text);
        alert('✅ Email Sent Successfully!');
      } catch (error) {
        console.log('FAILED...', (error as EmailJSResponseStatus)?.text || error);
        alert('❌ Failed to Send Email');
      }
    }
}
