import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  ngOnInit(): void {
  }
  checkoutForm = this.formBuilder.group({
    overall: '',
    comprehensiveness: ''
  });
   overall: any;
   comprehensiveness: any;

  constructor( private formBuilder: FormBuilder, private http: HttpClient) { }
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    var data={
      overall :this.checkoutForm.value.overall,
      comprehensiveness : this.checkoutForm.value.comprehensiveness
    }
    this.http.post<any>('http://localhost:5000/feedback', data).subscribe(data => {
  })
  }

  submitForm(){
    console.log("Form submitted")
  }

}
