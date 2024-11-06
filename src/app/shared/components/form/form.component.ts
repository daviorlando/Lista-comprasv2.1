import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { AuthFunctionsService } from '../../services/auth-functions.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() product: Product | null = null;

  userId?: string;

  form!: FormGroup;

  @Output() done = new EventEmitter<Product>();

  constructor(private authFunctions: AuthFunctionsService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      compra: new FormControl<boolean>(this.product?.compra ?? false, {
        validators: Validators.required,
      }),
      userId: new FormControl<string | null>(this.product?.userId ?? ''),
    });

    // Após inicializar o formulário, defina o userId
    this.setUserId();
  }

  async setUserId(): Promise<void> {
    this.userId = await this.authFunctions.getUserId();
    if (this.userId) {
      this.form.get('userId')?.setValue(this.userId);
    }
    console.log('User ID:', this.userId);
  }

  onSubmit() {
    if (this.form.valid) {
      const product = this.form.value as Product;
      console.log(this.userId);
      console.log('Produto:', product);
      this.done.emit(product);
    } else {
      console.log('Formulário inválido');
    }
  }
}
