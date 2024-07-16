import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';
import { BadgeComponent } from './componentes/badge/badge.component';
import { BottomSheetComponent } from './componentes/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './componentes/button/button.component';
import { ButtonToggleComponent } from './componentes/button-toggle/button-toggle.component';
import { CardComponent } from './componentes/card/card.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { ChipsComponent } from './componentes/chips/chips.component';
import { DatepickerComponent } from './componentes/datepicker/datepicker.component';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { DividerComponent } from './componentes/divider/divider.component';
import { ExpansionComponent } from './componentes/expansion/expansion.component';
import { FormfieldComponent } from './componentes/formfield/formfield.component';
import { GirdlistComponent } from './componentes/girdlist/girdlist.component';
import { IconComponent } from './componentes/icon/icon.component';
import { InputComponent } from './componentes/input/input.component';
import { ListComponent } from './componentes/list/list.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginatorComponent } from './componentes/paginator/paginator.component';
import { ProgressbarComponent } from './componentes/progressbar/progressbar.component';
import { ProgressspinnerComponent } from './componentes/progressspinner/progressspinner.component';
import { RadiobuttonComponent } from './componentes/radiobutton/radiobutton.component';
import { RipplesComponent } from './componentes/ripples/ripples.component';
import { SelectComponent } from './componentes/select/select.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { SlidetoggleComponent } from './componentes/slidetoggle/slidetoggle.component';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';
import { SortheaderComponent } from './componentes/sortheader/sortheader.component';
import { StepperComponent } from './componentes/stepper/stepper.component';
import { TableComponent } from './componentes/table/table.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { TollbarComponent } from './componentes/tollbar/tollbar.component';
import { ToolpitComponent } from './componentes/toolpit/toolpit.component';
import { TreeComponent } from './componentes/tree/tree.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionComponent,
    FormfieldComponent,
    GirdlistComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
    RadiobuttonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SliderComponent,
    SlidetoggleComponent,
    SnackbarComponent,
    SortheaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    TollbarComponent,
    ToolpitComponent,
    TreeComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unidad2';
}
