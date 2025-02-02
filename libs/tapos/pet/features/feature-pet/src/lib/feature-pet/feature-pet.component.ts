import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {UiPetHeaderComponent} from "@tapos/pet/ui-pet-header";

@Component({
  selector: 'tapos-feature-pet',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UiPetHeaderComponent],
  templateUrl: './feature-pet.component.html',
  styleUrl: './feature-pet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePetComponent {

}
