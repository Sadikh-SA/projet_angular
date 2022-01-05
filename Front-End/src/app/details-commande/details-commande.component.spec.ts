import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Commande } from '../models/Commande';
import { CommandeService } from '../Services/commande.service';

import { DetailsCommandeComponent } from './details-commande.component';

describe('DetailsCommandeComponent', () => {
  let component: DetailsCommandeComponent;
  let fixture: ComponentFixture<DetailsCommandeComponent>;
  let commandeService: CommandeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('cette methode permet de chercher une commande', async () => {
    let commande :Commande = await commandeService.getCommande("61d071c69134fc1a9b01c498");
    expect(component.commande._id).toEqual
    ;

  });

});
