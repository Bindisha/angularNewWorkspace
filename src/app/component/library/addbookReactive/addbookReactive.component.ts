import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbookReactive.component.html',
  styleUrls: ['./addbookReactive.component.css']
})
export class AddbookReactiveComponent implements OnInit {

myReactiveForm!: FormGroup;
genders= ['Male','Female'];

ngOnInit(): void {

  this.myReactiveForm= new FormGroup(
    {
      userData:new FormGroup({

      }),
      title:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender: new FormControl('Male'),
      comments: new FormControl(null),
      category: new FormControl('Action',)
  })

  }

  onSubmit()
  {
    console.log(this.myReactiveForm)
  }

}
