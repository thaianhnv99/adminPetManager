import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {OrdersService} from '../../../../core/e-commerce/_services/orders.service';
import {AdoptPetService} from '../adopt-pet.service';
import {NgxSpinnerService} from 'ngx-spinner';
import * as moment from 'moment';

@Component({
	selector: 'kt-adopt-pet-detail',
	templateUrl: './adopt-pet-detail.component.html',
	styleUrls: ['./adopt-pet-detail.component.scss']
})
export class AdoptPetDetailComponent implements OnInit {
	inputForm = this.fb.group({
		userId: [{value: '', disabled: true}],
		name: [{value: '', disabled: true}],
		phone: [{value: '', disabled: true}],
		address: [{value: '', disabled: true}],

		orderId: [{value: '', disabled: true}],
		petId: [{value: '', disabled: true}],
		petName: [{value: '', disabled: true}],
		status: [{value: '', disabled: true}],
		sentDate: [{value: '', disabled: true}],
		deliveryDate: [{value: '', disabled: true}],
		reason: [{value: '', disabled: true}],
		conditions: [{value: '', disabled: true}],
	});

	orderData: any = null;

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private ordersService: OrdersService,
		private adoptPetService: AdoptPetService,
		private spinnerService: NgxSpinnerService,
	) {
	}

	ngOnInit() {
		if (this.orderData) {
			this.inputForm.patchValue({
				userId: this.orderData.userId,
				name: this.orderData.name,
				phone: this.orderData.phone,
				address: this.orderData.address,

				orderId: this.orderData.orderId,
				petId: this.orderData.petId,
				petName: this.orderData.petName,
				status: this.getStatus(this.orderData.status),
				sentDate: this.convertDate(this.orderData.sentDate),
				deliveryDate: this.convertDate(this.orderData.deliveryDate),
				reason: this.orderData.reason,
				conditions: this.orderData.conditions
			});
		}
	}

	getStatus(data: any) {
		if (data == 0) {
			return 'Chưa duyệt';
		} else if (data == 1) {
			return 'Đã duyệt';
		} else {
			return 'Từ chối';
		}
	}

	convertDate(date: any) {
		return moment(new Date(date)).format('DD/MM/YYYY');
	}

	closed() {
		this.activeModal.close('Close');
	}

}
