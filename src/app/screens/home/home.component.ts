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
    this.payers.push({ name: '', isEditing: true });
  }

  public changeIsEditing(
    payer:  (IPayer & { isEditing?: boolean })
  ) {
    payer.isEditing = !payer.isEditing;
  }
}
