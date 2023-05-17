import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbookTemplate.component.html',
  styleUrls: ['./addbookTemplate.component.css']
})
export class AddbookTemplateComponent {


  @ViewChild('myForm') myForm! : NgForm;
  @ViewChild('title') title! : NgModel;


  defaultCategory= 'Action';
  description='';
  bookComments='TESTIG'

  genders=['Male','Female']

  bookData ={

      "title":"",
      "email":"",
    "category":"",
    "comments":"",
    "gender":""
  }


  SetInitialBook(){
    this.myForm.setValue({
      libData:{
        title:'House of dragon',
        email:'sachin@gmail.com',
        category:'Horror'
      }
      ,
      gender:'Male',
      comments:'TESTING'
    })
  };

  PatchInitialBook(){
    this.myForm.form.patchValue({
      gender:'Female',
      comments:'DEMO'
    })
  }


  onSubmit()
  {
    console.log(this.myForm);
    this.bookData.title=this.myForm.value.libData.title;
    this.bookData.category=this.myForm.value.libData.category;
    this.bookData.email=this.myForm.value.libData.email;
    this.bookData.comments=this.myForm.value.comments;
    this.bookData.gender=this.myForm.value.gender;

    this.myForm.reset();

  }


}


