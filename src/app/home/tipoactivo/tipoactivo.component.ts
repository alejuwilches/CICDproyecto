import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-tipoactivo',
  templateUrl: './tipoactivo.component.html',
  styleUrls: ['./tipoactivo.component.css']
})
export class TipoactivoComponent implements OnInit {

  constructor(private router:RouterExtensions) { }

  ngOnInit(): void {
  }

  salir() {

    this.router.navigate(["/login",{clearHistory: true}]);

  }

}
