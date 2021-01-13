import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PartialsModule} from '../../partials/partials.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatSelectModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatTooltipModule
} from '@angular/material';
import {AdoptPetListComponent} from './adopt-pet-list/adopt-pet-list.component';
import {NgxPaginationModule} from '../../../core/common/component/ngx-pagination/ngx-pagination.module';
import {AdoptPetConfirmComponent} from './adopt-pet-confirm/adopt-pet-confirm.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {OrdersService} from '../../../core/e-commerce/_services/orders.service';
import {NgbDatepickerModule} from '../../../core/common/component/ngbDatepicker/datepicker.module';


@NgModule({
	entryComponents: [AdoptPetConfirmComponent],
	declarations: [
		AdoptPetListComponent,
		AdoptPetConfirmComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		PartialsModule,
		NgbModalModule,
		RouterModule.forChild([
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full',
			},
			{
				path: 'list',
				component: AdoptPetListComponent
			}
		]),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
		NgxPaginationModule,
		NgbDatepickerModule
	],
	providers: [
		OrdersService
	]
})
export class AdoptPetModule {
}
