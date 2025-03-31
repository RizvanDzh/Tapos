import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPetSection, SECTIONS_PET } from '@tapos/pet/util-pet-consts';
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'tapos-ui-pet-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './ui-pet-header.component.html',
  styleUrl: './ui-pet-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiPetHeaderComponent {

  public petMenuSections: IPetSection[] = SECTIONS_PET;
}
