import {Component} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-toolpit',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './toolpit.component.html',
  styleUrl: './toolpit.component.css'
})
export class ToolpitComponent {

}
