import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Livre } from '../models/Livre';
import { AuthenticationService } from '../Services/authentication.service';
import { PartageService } from '../Services/partage.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let authenticationService : AuthenticationService;
  let partageService: PartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    partageService = TestBed.inject(PartageService);
    authenticationService = TestBed.inject(AuthenticationService);
    let originalTimeout:number = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('Cette fonction permet de supprimer un livre du panier', async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let livre1: Livre= {
      "_id": "61c7866e8e0fda4fecc75bb0",
      "nom": "Hunger Games : L'Embrasement",
      "auteur": "Suzanne Collins",
      "categorie": "Fiction",
      "description": "",
      "annee": 2009,
      "prix": 35,
      "img": "https://images-na.ssl-images-amazon.com/images/I/61fVX6sjycL.jpg",
      "createdAt": "2021-12-25T21:00:30.436Z",
      "updatedAt": "2021-12-25T21:00:30.436Z",
    };
    let livre2: Livre = {
      "_id": "61c7866e8e0fda4fecc75bb0",
      "nom": "Pas de témoins pour un massacre",
      "auteur": "Cambera",
      "categorie": "Fiction",
      "description": "",
      "annee": 2009,
      "prix": 15,
      "img": "",
      "createdAt": "2021-12-25T21:00:30.436Z",
      "updatedAt": "2021-12-25T21:00:30.436Z",
    };
    partageService.addTopanier(livre1);
    partageService.addTopanier(livre2);
    partageService.removeFromPanier(livre1);
    console.log(partageService.panier.getValue());
    expect(partageService.panier.getValue().length).toBeGreaterThanOrEqual(1);
    localStorage.setItem("accessToken", "");

  });*/

  /*it('Cette methode permet de formatter le nom ', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let resultat = component.reformaterNom("ababacar gueye")
    expect(resultat).toEqual("Ababacar Gueye");
  });*/

  /*it('Cette methode permet de se déconnecter', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    component.logout();
    expect(localStorage.getItem("accessToken")).toEqual("");
  });*/

});
