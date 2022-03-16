import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { NgForm } from '@angular/forms';

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
    Salary: '',
    environment:'',
    profile:'',
    leadership:'',
    recognition:'',
    training:'',
    growth:'',
    overtime:'',
    valued_at_work:'',
    resources:'',
    stress:''
  });
  //DECLARING ALL THE VARIBALES
   overall: any;
   Salary: any;
   currentDate = new Date();
   latest_date =this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
   name="Aakanksha"
   lname="sahu"
   eid="KIPI410"
   
  
   

  constructor( private formBuilder: FormBuilder, private http: HttpClient,  public datepipe: DatePipe) { 
    
  }
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    var data={
      overall :this.checkoutForm.value.overall,
      Salary : this.checkoutForm.value.Salary,
      environment: this.checkoutForm.value.environment,
      profile: this.checkoutForm.value.profile,
      leadership:this.checkoutForm.value.leadership,
      recognition: this.checkoutForm.value.recognition,
      training: this.checkoutForm.value.training,
      growth:this.checkoutForm.value.growth

    }
    this.http.post<any>('http://localhost:5000/feedback', data).subscribe(data => {
  })
  }

  submitForm(){
    console.log("Form submitted")
  }

}
