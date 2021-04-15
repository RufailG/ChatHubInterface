import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(nick: string, pass: string)
  {
    const url = `https://3000-lime-angelfish-c0awyhln.ws-eu03.gitpod.io/users/${nick}/${pass}`
    return this.http.get(url);
  }

  signUp(nick: string, pass: string)
  {
    const url = `https://3000-lime-angelfish-c0awyhln.ws-eu03.gitpod.io/signup/${nick}/${pass}`
    return this.http.get(url);
  }


}
