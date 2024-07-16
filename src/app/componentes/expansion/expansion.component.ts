import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './expansion.component.html',
  styleUrl: './expansion.component.css'
})
export class ExpansionComponent {
  readonly panelOpenState = signal(false);
}
