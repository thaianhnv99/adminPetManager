import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TypePetService} from '../type-pet.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';
import {finalize} from 'rxjs/operators';

@Component({
	selector: 'kt-type-pet-confirm',
	templateUrl: './type-pet-confirm.component.html',
	styleUrls: ['./type-pet-confirm.component.scss']
})
export class TypePetConfirmComponent implements OnInit {
	dataShow: any;

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private typePetService: TypePetService,
		private spinnerService: NgxSpinnerService,
		private toastrService: ToastrService,
	) {
	}

	ngOnInit() {
	}

	convertDate(date: any) {
		return moment(new Date(date)).format('DD/MM/YYYY');
	}

	save() {
		this.spinnerService.show();
		this.typePetService.deletePetTypeInfo(this.dataShow.petTypeId).pipe(finalize(() => {
			this.spinnerService.hide();
		})).subscribe(res => {
			if (res.body && res.body.key === 'SUCCESS') {
				this.toastrService.success('Xóa thành công', 'Thông báo');
				this.activeModal.close('SUCCESS');
			} else {
				this.toastrService.success('Xóa không thành công', 'Thông báo');
			}
		});
	}

	closed() {
		this.activeModal.close('Close');
	}
}
