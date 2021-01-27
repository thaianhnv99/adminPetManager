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
import {NgxPaginationModule} from '../../../core/common/component/ngx-pagination/ngx-pagination.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {OrdersService} from '../../../core/e-commerce/_services/orders.service';
import {NgbDatepickerModule} from '../../../core/common/component/ngbDatepicker/datepicker.module';
import { TypePetListComponent } from './type-pet-list/type-pet-list.component';
import { TypePetDetailComponent } from './type-pet-detail/type-pet-detail.component';
import { TypePetCreateComponent } from './type-pet-create/type-pet-create.component';
import { TypePetConfirmComponent } from './type-pet-confirm/type-pet-confirm.component';


@NgModule({
	entryComponents: [
		TypePetDetailComponent,
		TypePetCreateComponent,
		TypePetConfirmComponent
	],
	declarations: [
		TypePetListComponent,
		TypePetDetailComponent,
		TypePetCreateComponent,
		TypePetConfirmComponent
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
				component: TypePetListComponent
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
		NgbDatepickerModule,
	],
	providers: [
		OrdersService
	]
})
export class TypePetModule {
}
