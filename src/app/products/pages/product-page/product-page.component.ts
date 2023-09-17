import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent {

  private fb = inject(FormBuilder);
  public color: string = 'green'
  // constructor(private fb: FormBuilder) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  onSubmit() {
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    if (this.myForm.valid)
      this.myForm.reset();
  }

}
