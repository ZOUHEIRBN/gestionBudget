import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';


import { ToolbarComponent } from './design-components/toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BarComponent } from './design-components/charts/bar/bar.component';
import { MiniDashboardComponent } from './mini-dashboard/mini-dashboard.component';
import { AddMarketFormComponent } from './form-components/add-market-form/add-market-form.component';
import { AddFundFormComponent } from './form-components/add-fund-form/add-fund-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent,
    BarComponent,
    MiniDashboardComponent,
    AddMarketFormComponent,
    AddFundFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatSidenavModule,
    MatTreeModule,
    MatStepperModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
