import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-girdlist',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './girdlist.component.html',
  styleUrl: './girdlist.component.css'
})
export class GirdlistComponent {

}
