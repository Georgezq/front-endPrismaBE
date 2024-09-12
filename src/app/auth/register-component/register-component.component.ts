import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  registerUser: FormGroup | null ;
  closeModal: string = '';

  constructor(private fb: FormBuilder, private userService: LoginServiceService) { 
    this.inicializarForm();
   }

  private inicializarForm(){
    this.registerUser = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  registerWithEmailAndPassword(){
    this.closeModal = 'modal';
    if(this.registerUser.valid){
      this.userService.registerForm(this.registerUser.value)
      // limpiar formulario
      this.registerUser.reset();
    } else {
      Object.keys(this.registerUser.controls).forEach(key => {
        const control = this.registerUser.get[key];
        control.markAsTouched();
      })
    }
  }

}