import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  constructor(private formService: FormService) { }
  infoForm: FormGroup
  ngOnInit() {
    this.infoForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required)
    })
  }
  addInformation() {
    console.log(this.infoForm)
    this.formService.saveInfo(this.infoForm.value.firstname, this.infoForm.value.lastname);
  }
}
