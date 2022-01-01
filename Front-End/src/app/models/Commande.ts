export class Commande {
    _id: string | undefined;
    __v: number | undefined;
    user: string| undefined;
    updatedAt: Date | undefined
    status: string| undefined;
    prix!: number;
    livres: any;
    createdAt: Date | undefined
    auteur: string| undefined;
}