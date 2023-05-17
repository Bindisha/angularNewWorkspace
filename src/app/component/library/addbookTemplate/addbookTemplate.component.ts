import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbookTemplate.component.html',
  styleUrls: ['./addbookTemplate.component.css']
})
export class AddbookTemplateComponent {

  @ViewChild('myForm') libForm!:NgForm;
  defaultSelect='Action';
  bookComments='';
  genders= ['Male','Female'];

  library ={
    title: '',
    email:'',
    category:'',
    comments:'',
    gender:''
  }

onSubmitLocalElementRef(form: ElementRef){
 console.log(form)
}
onSubmitNgForm(form: NgForm){
  console.log(form)
}

onSubmit(){

  console.log(this.libForm)
  this.library.title=this.libForm.value.libData.title;
  this.library.email=this.libForm.value.libData.email;
  this.library.category=this.libForm.value.libData.category;
  this.library.comments=this.libForm.value.libData.comments;
  this.library.gender=this.libForm.value.libData.gender;

  this.libForm.reset();
}

suggestBook(){
   this.libForm.setValue({
     libData:{
       title:'House of Dragon',
       email:'sachin.hs@gmail.com',
       category:'Action',
       comments:'',
       gender:'Male'
     }
   })
  }
  patchBook(){
  this.libForm.form.patchValue({
    libData:{
      title:'House of Dragon'
    }
  })
  }
}
