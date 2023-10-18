import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPayer } from './interfaces/IPayer';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeScreen {
  constructor(private router: Router) {}

  public payers: (IPayer & { isEditing?: boolean })[] = [];

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
    // index: number
  ) {
    payer.items?.push({price: 0})
    console.log(payer);
    // this.payers[index].items?.push({price: 0})
  }
}
