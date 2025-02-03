import { Injectable } from "@angular/core";
import e from "express";

@Injectable({ providedIn: 'root' }) //ovde se dodaje providedIn: 'root' da bi se mogao koristiti u svim komponentama
export class DataService {
  

    getData() {                     //Ovo je metoda koja vraca data(neku listu)
        return ['kruska', 'sljiva', 'smokva'];
    }

    // addData(name: string) {
    //     this.data.push(name);
    // }
}