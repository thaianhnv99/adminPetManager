import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {OrdersService} from '../../../../core/e-commerce/_services/orders.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
	selector: 'kt-adopt-pet-confirm',
	templateUrl: './adopt-pet-confirm.component.html',
	styleUrls: ['./adopt-pet-confirm.component.scss']
})
export class AdoptPetConfirmComponent implements OnInit {
	petItem: any = null;
	inputForm = this.fb.group({
		sentDate: ['', Validators.required],
	});

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private ordersService: OrdersService,
		private spinnerService: NgxSpinnerService,
	) {
	}

	ngOnInit(): void {
		this.buildForm();
	}

	buildForm() {
	}

	loadDate(ev: any){
		console.log(ev);
	}

	sentAdopt() {
		let data = this.convertToSave();
		this.spinnerService.show();
	}

	convertToSave() {
		let data = {
			petId: this.petItem.petId,
			reason: this.inputForm.get('reason').value,
		};
		return data;
	}

	closed() {
		this.activeModal.close();
	}
}
