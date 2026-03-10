import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon, IonRouterLink, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ExpensesComponent } from "../features/expenses/expenses.component";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [IonText, IonIcon, CommonModule, IonButton, IonRouterLink, RouterLink, ExpensesComponent],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  constructor() {
      addIcons({ add });
    }

}
