import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-tollbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './tollbar.component.html',
  styleUrl: './tollbar.component.css'
})
export class TollbarComponent {

}
