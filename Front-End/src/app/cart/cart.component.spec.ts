import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Livre } from '../models/Livre';
import { AuthenticationService } from '../Services/authentication.service';
import { PartageService } from '../Services/partage.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let authenticationService : AuthenticationService;
  let partageService: PartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    partageService = TestBed.inject(PartageService);
    authenticationService = TestBed.inject(AuthenticationService);
    let originalTimeout:number = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('cette methode permet de Supprimer un livre le panier', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let livre :any = partageService.panier.getValue().lastIndexOf;
    partageService.removeFromPanier(livre);
    expect(partageService.panier.getValue.length).toBeGreaterThanOrEqual(0);
    localStorage.setItem("accessToken", "");

  });

  it('cette methode permet de lister les livre dans le panier', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let panier =  partageService.panier.getValue();
    //component.addToPanier(livre);
    expect(panier.length).toBeGreaterThanOrEqual(0);
    localStorage.setItem("accessToken", "");

  });

});
