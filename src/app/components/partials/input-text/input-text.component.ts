import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent implements OnInit {
  @Input()
  control!: AbstractControl;

  @Input()
  showErrorsWhen: boolean = true; // Changed to camelCase

  @Input()
  label!: string;

  @Input()
  type: 'text' | 'password' | 'email' = 'text';

  get FormControl() {
    return this.control as FormControl;
  }

  ngOnInit(): void {}


}
