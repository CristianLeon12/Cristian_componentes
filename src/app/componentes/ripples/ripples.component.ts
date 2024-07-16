import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-ripples',
  standalone: true,
  imports: [MatRippleModule],
  templateUrl: './ripples.component.html',
  styleUrl: './ripples.component.css'
})
export class RipplesComponent {
  myColor: string = 'rgba(0,0,0,0.1)';
}
