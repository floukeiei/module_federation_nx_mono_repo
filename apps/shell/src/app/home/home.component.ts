import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth-lib';
import { NumberService } from '@shared/services/number.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService , public numberS: NumberService) { }

  ngOnInit() {
    this.authService.login('Demo-User', null);
  }

  addnumber(){
    this.numberS.sum++;
  }

}
