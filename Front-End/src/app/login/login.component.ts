import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { PartageService } from '../Services/partage.service';

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
 
  public action : string = "";
  constructor(authenticationService : AuthenticationService,
     private route:Router, private aroute: ActivatedRoute, private partageService:PartageService) {
    this.authenticationService = authenticationService;
    this.aroute.queryParams.subscribe((params: any) => {
      this.action = params['action'];
      console.log("blaaaaaaaaaaaaaa",this.action);
  });
  
  }

  ngOnInit(): void {
    //this.action = this.aroute.snapshot.paramMap.get('action');
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
          // this.route.navigate(['/']);
          if(this.action == "validation-panier"){
            this.route.navigate(['/order-confirmation']);
          }else {
          //  window.location.replace('/');
          this.route.navigate(['/']);
          }
        }
      })
    }
  }

}
