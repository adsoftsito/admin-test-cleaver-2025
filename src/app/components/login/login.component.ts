import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}


  submitted = false;
  missingValuesError = '';
  badCredentialsError = '';

  usuarioError = '';
  passwordError = '';

  usuario = '';
  password = '';
  saveTest(): void {

    if (this.usuario == "")
      this.usuarioError = "usuario requerido"
    if (this.password == "")
      this.passwordError = "password requerido"


    if ((this.usuario == "admin")
      && (this.password == "cleaver"))
    {
       sessionStorage.setItem('user', 'admin');
       console.log(sessionStorage.getItem('user'))
//       this.router.navigate(['/']);
       window.location.reload();
    }
    else
       this.badCredentialsError = "Error de usuario  o password"

  }

}
