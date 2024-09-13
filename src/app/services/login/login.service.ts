import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,Auth } from '@angular/fire/auth';
import { Database, getDatabase, ref, set } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Users } from 'src/app/models/users/users';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private auth: Auth;
  private database: Database;

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);
    this.database = getDatabase(app);
  }

  async registerForm(user: Users) {
    return await createUserWithEmailAndPassword(this.auth, user.email, user.password).then(
      (userCredential) => {
        set(ref (this.database, 'users/' + userCredential.user.uid), {
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          password: user.password,
        })
      
      });
  }

  async loginForm(user: Users) {
    return await signInWithEmailAndPassword(this.auth,user.email, user.password);
  }
  
  
}
