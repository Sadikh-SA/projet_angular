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
    let originalTimeout:number = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it("Cette methode permet d'ajouter une commande", async () => {          //Nous avons décidé de commenter cette fonction de test unitaire, car à chaque fois quelle est lancée, elle crée une commande dans la base de données et notre base de données est rapidement inondée.
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let commandeAjoute: boolean = await service.ajouterCommande([{_id: "61c788958e0fda4fecc75bbc"}]);
    expect(commandeAjoute).toBeTruthy();
    localStorage.setItem("accessToken", "");
  });

  it("Cette méthode permet de recupérer une commande en fonction de son _id", async () => {
    await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
    let commanderecuperee: Commande = await service.getCommande("61d353e8bc1a4c2008968928");
    expect(commanderecuperee._id).toEqual("61d353e8bc1a4c2008968928");
    localStorage.setItem("accessToken", "");
  });

  // it("Cette méthode permet de recupérer toutes les commandes de l'utilisateur connecté", async () => { //Problème de timeout quand il y a un grand notre de commande 
  //   await authenticationService.login({email: "test@test.com", password: "azerty", strategy: "local"});
  //   let commanderecuperee: Commande[] = await service.getCommandes();
  //   console.log(commanderecuperee);
  //   expect(commanderecuperee.length).toBeGreaterThanOrEqual(1);
  //   localStorage.setItem("accessToken", "");
  // });
});
