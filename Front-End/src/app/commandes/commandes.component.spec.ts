import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../Services/authentication.service';
import { CommandeService } from '../Services/commande.service';

import { CommandesComponent } from './commandes.component';

describe('CommandesComponent', () => {
  let component: CommandesComponent;
  let fixture: ComponentFixture<CommandesComponent>;
  let date : any = Date.now();
  let maDate : any;
  let authenticationService: AuthenticationService;
  let commandeService : CommandeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CommandeService ]
    })
    commandeService = TestBed.inject(CommandeService);
    authenticationService = TestBed.inject(AuthenticationService);
    let originalTimeout:number = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    maDate = TestBed.inject(date);
    fixture = TestBed.createComponent(CommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Cette methode permet de formatter la date ', async() => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let resultat = component.formaterDate(maDate);
    expect(resultat);

  });
});
