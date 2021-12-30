export class Livre {
    _id: number | undefined;
    nom: string| undefined;
    prix!: number;
    description: string| undefined;
    img: string| undefined;
    auteur: string| undefined;
    categorie: any;
    annee: Date | undefined
}