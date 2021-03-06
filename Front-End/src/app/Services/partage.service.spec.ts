import { TestBed } from '@angular/core/testing';
import { Livre } from '../models/Livre';
import { PartageService } from './partage.service';

  class MockPartageService {
    public panier:Livre[] = [];
    public addToPanier(livre:Livre) {
      this.panier.push(livre);
    }

    getTaillePanier():number {
      return this.panier.length;
    }

}
let mock:any=null;
describe('PartageService', () => {
  let service: PartageService;
  let serviceMock: MockPartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartageService);
    serviceMock = new MockPartageService;
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it("Cette methode permet de mettre à jour le nom du client", () => {
    service.setNom("Toto");
    expect(String(service.nomClient.getValue())).toEqual("Toto");
    service.setNom("Tata");
    expect(String(service.nomClient.getValue())).toEqual("Tata");
  });

  it("Cette methode permet de mettre à jour le token du client", () => {
    service.setAccessToken("4258sdfsd4fdfswfsdfdsfsdfsdfsd");
    expect(String(service.accessToken.getValue())).toEqual("4258sdfsd4fdfswfsdfdsfsdfsdfsd");
    service.setAccessToken("zerfzSDREERF84524884erfergregreferfreferfre");
    expect(String(service.accessToken.getValue())).toEqual("zerfzSDREERF84524884erfergregreferfreferfre");
  });


  it("Cette methode permet de donner le prix d'un panier(liste de livre)", () => {
    let panier: Livre[] = [{
        "_id": "61c7866e8e0fda4fecc75bb0",
        "nom": "Hunger Games : L'Embrasement",
        "auteur": "Suzanne Collins",
        "categorie": "Fiction",
        "description": "",
        "annee": 2009,
        "prix": 35,
        "img": "https://images-na.ssl-images-amazon.com/images/I/61fVX6sjycL.jpg",
        "createdAt": "2021-12-25T21:00:30.436Z",
        "updatedAt": "2021-12-25T21:00:30.436Z",
      },
      {
        "_id": "61c7866e8e0fda4fecc75bb0",
        "nom": "Pas de témoins pour un massacre",
        "auteur": "Cambera",
        "categorie": "Fiction",
        "description": "",
        "annee": 2009,
        "prix": 15,
        "img": "",
        "createdAt": "2021-12-25T21:00:30.436Z",
        "updatedAt": "2021-12-25T21:00:30.436Z",
      }];
    expect(service.prixDuPanier(panier)).toEqual(50);
  });

  it("Cette methode permet d'ajouter un livre au panier", () => {
    serviceMock.addToPanier({
        "_id": "61c7866e8e0fda4fecc75bb0",
        "nom": "Hunger Games : L'Embrasement",
        "auteur": "Suzanne Collins",
        "categorie": "Fiction",
        "description": "",
        "annee": 2009,
        "prix": 35,
        "img": "https://images-na.ssl-images-amazon.com/images/I/61fVX6sjycL.jpg",
        "createdAt": "2021-12-25T21:00:30.436Z",
        "updatedAt": "2021-12-25T21:00:30.436Z",
      })
      serviceMock.addToPanier({
        "_id": "df5sdfdfes5sdfsdfsdfsd",
        "nom": "Pas de témoins pour un massacre",
        "auteur": "Cambera",
        "categorie": "Fiction",
        "description": "",
        "annee": 2009,
        "prix": 15,
        "img": "",
        "createdAt": "2021-12-25T21:00:30.436Z",
        "updatedAt": "2021-12-25T21:00:30.436Z",
      })
      expect((serviceMock.getTaillePanier())).toEqual(2);
  });



});
