import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailjsService } from '../../../services/emailjs/emailjs.service';

@Component({
  selector: 'app-request-a-quote',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './request-a-quote.component.html',
  styleUrl: './request-a-quote.component.scss'
})
export class RequestAQuoteComponent {

  quoteForm: FormGroup;

  constructor(private fb: FormBuilder, private emailjsService: EmailjsService) {
    this.createForm();
  }

  createForm() {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      make: [''],
      model: [''],
      year: [''],
      contactMethod: ['email'],
      issue: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    console.log('Form values:', this.quoteForm.value);
    if (this.quoteForm.valid) {
      this.emailjsService.sendQuoteRequest(this.quoteForm.value).then(
        response => {
          console.log('Response from EmailJS:', response);
          alert('Quote request sent successfully!');
          this.quoteForm.reset();
        },
        error => {
          console.error('Error sending quote request:', error);
          alert('Error sending quote request.');
        }
      );
    } else {
      console.log('Form is invalid:', this.quoteForm.errors);
    }
  }

}
