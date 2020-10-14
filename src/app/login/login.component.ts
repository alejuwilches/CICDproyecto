import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import {Usuario} from "../model/usuario";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : Usuario;
  constructor(private  router:RouterExtensions ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  ingresar()
  {
    this.router.navigate(["/home",{clearHistory: true} ]);
  }

}
