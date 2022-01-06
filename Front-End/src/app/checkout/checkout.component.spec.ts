import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../Services/authentication.service';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let data : any;
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();
    authenticationService = TestBed.inject(AuthenticationService);
    data = {nom: "GUEYE", prenom: "Sadikh", pays: "France", email: "abougueye96@yahoo.fr", telephone: 669195045, adresse: "37 rue du recteur marcel Bourchar", ville: "Dijon", codepostal: 21000 };
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Cette methode permet de valider un panier', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    await component.validerPanier(data);
    expect(component.commandeEnvoye).toEqual(true);
  });

  it('Cette methode permet de Vérifier si tous les champs sont remplis', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let resultat = await component.verifierTousLesChampsObligatoire(data);
    expect(resultat).toEqual(true);
  });

});
