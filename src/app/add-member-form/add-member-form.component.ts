import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  memberForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    emailAddress: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.memberForm.value);
  }

}
