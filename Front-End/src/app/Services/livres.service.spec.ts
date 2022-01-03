import { TestBed } from '@angular/core/testing';
import { Livre } from "../models/Livre";
import { LivresService } from './livres.service';
import { AuthenticationService } from './authentication.service';
describe('LivresService', () => {
  let service: LivresService;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivresService);
    authenticationService = TestBed.inject(AuthenticationService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it("Cette méthode permet de recupérer un livre en fonction de son _id", async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let livreRecupere: Livre = await service.getLivre("61c788958e0fda4fecc75bbc");
    /*console.log("livre",livreRecupere);
    expect(livreRecupere);*/
    expect(livreRecupere._id).toEqual("61c788958e0fda4fecc75bbc");
    localStorage.setItem("accessToken", "");
  });

  it("Cette méthode permet de recupérer tous les livres de l'utilisateur connecté", async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let livreRecuperes: Livre[] = await service.getLivres();
    expect(livreRecuperes.length).toBeGreaterThanOrEqual(2);
    localStorage.setItem("accessToken", "");
  });
});
