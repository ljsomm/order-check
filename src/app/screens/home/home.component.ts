import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { IPayer } from './interfaces/IPayer';
import { IItem } from './interfaces/IItems';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeScreen {

  constructor(private router: Router) {}

  public payers: (IPayer & { isEditing?: boolean })[] = [];

  public total: number = 0;

  public addPayer(): void {
    this.payers.push({ name: '', isEditing: true, items: [] });
  }

  public changeIsEditing(
    payer:  (IPayer & { isEditing?: boolean })
  ) {
    payer.isEditing = !payer.isEditing;
  }

  public addItem(
    payer:  (IPayer & { isEditing?: boolean })
  ) {
    payer.items?.push({price: 0, quantity: 1})
  }

  public updateTotal() {
    this.total = this.payers.reduce((incrementTotal: number, payer: IPayer) => {
      return incrementTotal + (!!payer.items?.length ? payer.items?.reduce((incrementer: number, current: IItem) => incrementer + ( current.price * current.quantity ), 0) : 0);
    }, 0)
  }
}
