import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Commande } from '../models/Commande';
import { AuthenticationService } from '../Services/authentication.service';
import { CommandeService } from '../Services/commande.service';

import { DetailsCommandeComponent } from './details-commande.component';

describe('DetailsCommandeComponent', () => {
  let component: DetailsCommandeComponent;
  let fixture: ComponentFixture<DetailsCommandeComponent>;
  let commandeService: CommandeService;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    commandeService = TestBed.inject(CommandeService);
    authenticationService = TestBed.inject(AuthenticationService);
    let originalTimeout:number = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });


  it('cette methode permet de chercher une commande', async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let commande :Commande = await commandeService.getCommande("61da2343e371350875469f59");
    expect(commande._id).toEqual("61da2343e371350875469f59");
    localStorage.setItem("accessToken", "");
  });

});
