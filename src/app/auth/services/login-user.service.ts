import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private afsAuth: AngularFireAuth) { }

  async loginByEmail(data){
      const result = await this.afsAuth.signInWithEmailAndPassword(data.email, data.password)
      
      console.log(result);
      
      return result;
  }
}
