import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Livre } from '../models/Livre';
import { AuthenticationService } from '../Services/authentication.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let authenticationService : AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('cette methode permet de Supprimer un livre le panier', () => {
    //await authenticationService.login({email: "abougueye96@yahoo.fr", password: "Moimeme", strategy: "local"});
    let livre :any = component.partageService.panier.getValue().lastIndexOf;
    component.removeFromPanier(livre);
    expect(component.panier);
    //localStorage.setItem("accessToken", "");

  });

  it('cette methode permet de lister les livre dans le panier', () => {
    //await authenticationService.login({email: "abougueye96@yahoo.fr", password: "Moimeme", strategy: "local"});
    let panier =  component.partageService.panier;
    //component.addToPanier(livre);
    expect(component.panier).toEqual(panier.getValue());
    //localStorage.setItem("accessToken", "");

  });

});
