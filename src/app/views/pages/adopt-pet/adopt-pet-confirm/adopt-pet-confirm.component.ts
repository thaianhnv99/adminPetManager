import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {OrdersService} from '../../../../core/e-commerce/_services/orders.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AdoptPetService} from '../adopt-pet.service';
import * as moment from 'moment';
import {NgbDateStruct} from '../../../../core/common/component/ngbDatepicker/ngb-date-struct';
import {finalize} from 'rxjs/operators';

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
		private adoptPetService: AdoptPetService,
		private spinnerService: NgxSpinnerService,
	) {
	}

	ngOnInit(): void {
		this.buildForm();
	}

	buildForm() {
	}

	loadDate(ev: any) {
		console.log(ev);
	}

	sentAdopt() {
		this.spinnerService.show();
		let body = {
			orderId: this.petItem.orderId,
			approvalDate: new Date(),
			deliveryDate: this.buildFormatDateOut(this.inputForm.get('sentDate').value),
			status: 1
		};
		console.log(body);
		this.adoptPetService.aproverOrderInfo(body).pipe(finalize(() => {
			this.spinnerService.hide();
		})).subscribe(res => {
			console.log(res);
			if (res.body.key === 'SUCCESS') {
				this.activeModal.close('OK');
			} else {
				alert('Error');
			}
		}, error => {
			alert('Error');
		});
	}

	buildFormatDateOut(date: NgbDateStruct) {
		if (date) {
			let year = date.year;
			let month = date.month - 1;
			let day = date.day;
			return new Date(year, month, day);
		}
		return null;
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
