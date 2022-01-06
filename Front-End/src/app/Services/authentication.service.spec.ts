import { TestBed } from '@angular/core/testing';
import jwt_decode from "jwt-decode";
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it("La méthode authentifie un utilisateur", async ()=> {
    let estAuthentifie:boolean = await service.login({email: "test@test.com", password: "azerty", strategy: "local"});
    expect(estAuthentifie).toEqual(true);
    expect(localStorage.getItem("accessToken")?.length).toBeGreaterThanOrEqual(10);
    let tokenDecode: any = jwt_decode(String(localStorage.getItem("accessToken")));
    expect(!tokenDecode).toEqual(false);
    //localStorage.setItem("accessToken", "");
    // estAuthentifie = await service.login({email: "test@test.com", password: "azertyy", strategy: "local"});
    // try {
    //   tokenDecode = jwt_decode(String(localStorage.getItem("accessToken")));
    // } catch (error) {
    //   tokenDecode = false;
    // }
    // expect(!tokenDecode).toEqual(true);
  });


  // it("La méthode inscrit un utilisateur", async ()=> { //A chaque qu'un test est lancé, un utilisateur random est créé. 
  //   let emailRandom:string = '';                        // Afin de ne pas innonder notre bdd, nous allons le garder commenter pour le moment
  //   let motdepassRandom:string = '';
  //   let nomRandom:string           = '';
  //   let characters:string       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   let charactersLength:number = characters.length;
  //   for ( let i = 0; i < length; i++ ) {
  //     motdepassRandom += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     emailRandom += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     nomRandom += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   emailRandom+="@test.com";
  //   let estInscrit:boolean = await service.register({email: emailRandom, password: motdepassRandom, nom: nomRandom});
  //   expect(estInscrit).toEqual(true);
  // });
});
