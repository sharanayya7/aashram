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
    public sendEmail(e: Event) {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_1vypnxp',
        'template_ztjv8uf',
        e.target as HTMLFormElement,
        'e1aXpfA6XJo_I8muJ'
      ).then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.text);
        alert("✅ Email Sent Successfully!");
      }, (error) => {
        console.log('FAILED...', error.text);
        alert("❌ Failed to Send Email");
      });
    }
  

}
