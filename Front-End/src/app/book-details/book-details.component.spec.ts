import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Livre } from '../models/Livre';
import { AuthenticationService } from '../Services/authentication.service';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let authenticationService: AuthenticationService;
  let route : ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports: [RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cette methode permet de récupérer le livre de l"identifiant', async () => {
    //await authenticationService.login({email: "abougueye96@yahoo.fr", password: "Moimeme", strategy: "local"});
    let livre :any = await component.livresService.getLivre("61c788958e0fda4fecc75bbc");
    expect(livre._id).toEqual("61c788958e0fda4fecc75bbc");

  });

  it('cette methode permet d"ajouter un livre dans le panier', async () => {
    //await authenticationService.login({email: "abougueye96@yahoo.fr", password: "Moimeme", strategy: "local"});
    let livre :Livre = await component.livresService.getLivre("61c788958e0fda4fecc75bbc")
    component.addToPanier(livre);
    expect(component.panier).toContain(livre);

  });
});
 