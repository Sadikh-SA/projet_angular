import { TestBed } from '@angular/core/testing';
import { Commande } from '../models/Commande';
import { CommandeService } from './commande.service';
import { AuthenticationService } from './authentication.service';
describe('CommandeService', () => {
  let service: CommandeService;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeService);
    authenticationService = TestBed.inject(AuthenticationService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it("Cette methode permet d'ajouter une commande", async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let commandeAjoute: boolean = await service.ajouterCommande([{_id: "61c788958e0fda4fecc75bbc"}]);
    expect(commandeAjoute).toBeTruthy();
    localStorage.setItem("accessToken", "");

  });

  it("Cette méthode permet de recupérer une commande en fonction de son _id", async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let commanderecuperee: Commande = await service.getCommande("61d071c69134fc1a9b01c498");
    expect(commanderecuperee._id).toEqual("61d071c69134fc1a9b01c498");
    localStorage.setItem("accessToken", "");
  });

  it("Cette méthode permet de recupérer toutes les commandes de l'utilisateur connecté", async () => {
    await authenticationService.login({email: "abougueye96@yahoo.fr", password: "Moimeme", strategy: "local"});
    let commanderecuperee: any = service.getCommandes();
    expect(commanderecuperee.length).toBeGreaterThanOrEqual(1);
    localStorage.setItem("accessToken", "");
  });
});
