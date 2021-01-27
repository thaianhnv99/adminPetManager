import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import * as moment from 'moment';

@Component({
	selector: 'kt-type-pet-detail',
	templateUrl: './type-pet-detail.component.html',
	styleUrls: ['./type-pet-detail.component.scss']
})
export class TypePetDetailComponent implements OnInit {
	inputForm = this.fb.group({
		petTypeId: [{value: '', disabled: true}],
		petTypeName: [{value: '', disabled: true}],
	});

	dataShow: any;

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
	) {
	}

	ngOnInit() {
		if (this.dataShow) {
			this.inputForm.patchValue({
				petTypeId: this.dataShow.petTypeId,
				petTypeName: this.dataShow.petTypeName,
			});
		}
	}

	convertDate(date: any) {
		return moment(new Date(date)).format('DD/MM/YYYY');
	}

	closed() {
		this.activeModal.close('Close');
	}

}
