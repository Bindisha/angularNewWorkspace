import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbookReactive.component.html',
  styleUrls: ['./addbookReactive.component.css']
})
export class AddbookReactiveComponent implements OnInit {

myReactiveForm!: FormGroup;
genders= ['Male','Female'];
forBiddenTitle= ['sachin','SACHIN','TEST'];

ngOnInit(): void {

  this.myReactiveForm= new FormGroup(
    {
      metaData:new FormGroup({
        comments: new FormControl(null,Validators.required),
        category: new FormControl('Action',Validators.required)
      }),
      title:new FormControl(null,[Validators.required,this.forbidenName.bind(this)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender: new FormControl('Male'),
      hobbies: new FormArray([])

  })


  // this.myReactiveForm.valueChanges.subscribe(vaule=>{
  //   console.log(vaule);
  // })

  this.myReactiveForm.statusChanges.subscribe(status=>{
    console.log(status);
  })

  }

  onSubmit()
  {
    console.log(this.myReactiveForm)
    this.myReactiveForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
        (<FormArray>this.myReactiveForm.get('hobbies')).push(control);

  }

  get myArrayControls(): AbstractControl[] {
    return (this.myReactiveForm.get('hobbies') as FormArray).controls;
  }

  forbidenName(control:FormControl):{[s:string]:boolean} | null {
    if(this.forBiddenTitle.indexOf(control.value)!==-1)
    {
      console.log('true')
      return {'nameIsForbidden':true}
    }
     return null;
    }


    forbidenEmail(control:FormControl):Promise<any> | Observable<any>{
      const promise = new Promise<any>((resolve,reject)=>{
        setTimeout(()=>{
          if(control.value==="sachin19927@gmail.com"){
            resolve({'emailIsForbidden':true})
          }
          else
            resolve(null)
        },1500)
      })
      return promise
    }


    setValue()
    {
      this.myReactiveForm.setValue({
        metaData:{
          comments: 'TEST',
          category: 'Horror'
        },
        title:'House',
        email:'sachin19927@gmail.com',
        gender: 'Male',
        hobbies: []
      })
    }

    patchValue()
    {

      this.myReactiveForm.patchValue({
      title:'House of Dragon',
      metaData:{
      category: ''
      }
      });
    }

}
