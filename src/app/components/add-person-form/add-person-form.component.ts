import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.scss']
})
export class AddPersonFormComponent implements OnInit {

  addPersonForm: FormGroup;


  @Output() addNew = new EventEmitter();
  
  constructor(private fb: FormBuilder) {
    this.createNewForm();
   }

  createNewForm() {
    this.addPersonForm = this.fb.group({
      name: ['', Validators.required ],
      isComing: false,
      partner: this.fb.group({
        coming: false,
        name: '',
      }),
      phone: '', 
    })
    console.log(this.addPersonForm);
  }
  onSubmit() {
    if (this.addPersonForm.valid) {
      this.addNew.emit(this.addPersonForm.value);
    }
    
  }

  ngOnInit() {
  }

}
