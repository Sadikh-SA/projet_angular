export class Livre {
    _id: string | undefined;
    nom: string| undefined;
    prix!: number;
    description: string| undefined;
    img: string| undefined;
    auteur: string| undefined;
    categorie: any;
    annee: number | string | undefined;
    createdAt: Date | string | undefined;
    updatedAt: Date | string | undefined;
}