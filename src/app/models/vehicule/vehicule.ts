export class Vehicule {
    matricule: number;
    anneeModel: number;
    prix: number;
    imageVehicule: string

    constructor(matricule: number,
        anneeModel: number,
        prix: number,
        imageVehicule: string){
            this.matricule = matricule;
            this.anneeModel = anneeModel;
            this.prix = prix;
            this.imageVehicule = imageVehicule;

    }
}
