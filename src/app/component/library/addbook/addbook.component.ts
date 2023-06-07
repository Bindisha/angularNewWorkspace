import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
form: any;
  libForm!: FormGroup;

ngOnInit(): void {
      this.libForm = new FormGroup(
        {
          firstName:new FormControl(null,Validators.required),
          lastName: new FormControl(null,Validators.required),
          contacts: new FormGroup({
            contactType: new FormControl(null,Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            phone: new FormControl(null, Validators.required)

          }),
          booklist: new FormArray([])
        }
      )
}

  save(){
    console.log(this.libForm);
  }

  addBookFormGroup(){
    const control = new FormControl(null,Validators.required);
        (<FormArray>this.libForm.get('booklist')).push(control);

  }
  get myBooksArrayControls(): AbstractControl[] {
    return (this.libForm.get('booklist') as FormArray).controls;
  }
}
