import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()  email = "";
  @Output() submitted = new EventEmitter<string>();
  nom_complet = "";
  authenticationService : AuthenticationService;
  
  constructor(authenticationService : AuthenticationService, private route:Router) {
    this.authenticationService = authenticationService;
  }

  ngOnInit(): void {
  }

  async register(data: any) {
    console.log(data);
    var response = "";
    if(data.password1 !== data.password2) {
      Swal.fire(
        'Erreur',
        'Les deux mots de passe entrés ne correspondent pas.',
        'error'
      )
      return false;
    }
    response = await this.authenticationService.register(data);
     if(response) {
      Swal.fire(
        'Terminé !',
        'Votre inscription est terminée.',
        'success'
      ).then((result) => {
        if(result) {
          this.route.navigate(['/auth']); 
        }
      })
    }
    else {
      Swal.fire(
        'Erreur',
        "Quelque chose a pas marché. Reesayez !",
        'error'
      )
    }
    return true;
  }

  async login(data: any) {
    console.log(data);
    var response = await this.authenticationService.login(data);
    if(!response) {
      Swal.fire(
        'Erreur de connexion',
        'Votre email ou mot de passe est incorrect',
        'error'
      )
    }
    else {
      Swal.fire(
        'Connexion réussie !',
        'Vous etes connecté(e). Vous allez etre redigé(e)',
        'success'
      ).then((result) => {
        if(result) {
          this.route.navigate(['/']); 
        }
      })
    }
  }

}
