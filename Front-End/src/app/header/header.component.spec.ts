import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should create', async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let livre :any = partageService.panier.getValue().lastIndexOf;
    partageService.removeFromPanier(livre);
    expect(partageService.panier.getValue.length).toBeGreaterThanOrEqual(0);
    localStorage.setItem("accessToken", "");

  });

  it('Cette methode permet de formatter le nom ', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let resultat = component.reformaterNom("ababacar gueye")
    expect(resultat).toEqual("Ababacar Gueye");
  });

  it('Cette methode permet de se déconnecter', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    component.logout();
    expect(localStorage.getItem("accessToken")).toEqual("");
  });

});
