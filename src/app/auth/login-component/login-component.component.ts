import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormValidators } from 'src/app/core/utils/FormValidators';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent  {

  error: boolean = false;
  loginUser: FormGroup | null ;
  modalOpen: boolean = false;

  constructor(private loginS: AuthService, private router: Router, private fb: FormBuilder,
    private formValid: FormValidators
  ){
    this.inicializarForm();
  }

  openRegisterModal() {
    this.modalOpen = !this.modalOpen;
  }

  private inicializarForm(){
    this.loginUser = this.fb.group({
      email: new FormControl('', [Validators.required, this.formValid.customeEmailValidator, Validators.email]),
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  getError(control:any): string{
    if(control.errors?.required && control.touched)
      return 'Este campo es obligatorio';
    else if(control.errors?.emailError && control.touched)
      return 'Correo electronico no valido';
    else return '';
  }

  loginForm(): void {
      this.loginS.loginForm(this.loginUser.value).then(
        () => {
          this.router.navigate(['/home']);
        }).catch(() => {
          this.error = true;
        });
  }

  resetPassword(){
    this.router.navigate(['reset-password']);
  }

}
