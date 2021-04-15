import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nick: string;
  pass: string;
  loginObs : Observable<object>;
  result: any;

  constructor(private auth: AuthService, private user: UserService) { }

  submit(nick: HTMLInputElement, pass: HTMLInputElement)
  {
    this.nick = nick.value;
    this.pass = pass.value;
    this.loginObs = this.auth.login(this.nick, this.pass);
    this.loginObs.subscribe(this.getData);
  }

  getData = (data) =>
  {
    this.result = data;
    console.log(this.result);
    this.user.newUser(this.result);
  }



  ngOnInit(): void {
    this.user.sharedUserInfo.subscribe(message => this.result = message)
    console.log(this.result)

  }

}
