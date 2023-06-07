import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-receipe',
  templateUrl: './add-receipe.component.html',
  styleUrls: ['./add-receipe.component.css']
})
export class AddReceipeComponent {
  @ViewChild('myForm') receipeForm!:NgForm;

  mode= ['Online','Offline'];
  defaultSelect='Punjab';
  receipe ={
    name: '',
    author:'',
    modes:'',
    date:'',
    state:'',
    phone:'',
    pincode:''
  }

  onSubmitReceipe(){
    console.log(this.receipeForm);

    this.receipe.name=this.receipeForm.value.recData.name;
    this.receipe.author=this.receipeForm.value.recData.author;
    this.receipe.modes=this.receipeForm.value.recData.modes;
    this.receipe.date=this.receipeForm.value.recData.date;
    this.receipe.state=this.receipeForm.value.recData.state;
    this.receipe.state=this.receipeForm.value.recData.pincode;
  }
}
