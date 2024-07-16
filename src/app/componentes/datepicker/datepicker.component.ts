import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {

}
