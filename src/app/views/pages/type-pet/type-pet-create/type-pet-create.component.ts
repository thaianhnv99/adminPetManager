import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import {TypePetService} from '../type-pet.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
	selector: 'kt-type-pet-create',
	templateUrl: './type-pet-create.component.html',
	styleUrls: ['./type-pet-create.component.scss']
})
export class TypePetCreateComponent implements OnInit, AfterViewInit {
	inputForm = this.fb.group({
		petTypeId: [{value: '', disabled: true}, Validators.required],
		petTypeName: ['', Validators.required],
	});

	dataShow: any;
	isAdd: boolean = false;

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

	ngAfterViewInit() {
		if (!this.isAdd && this.dataShow) {
			this.inputForm.patchValue({
				petTypeId: this.dataShow.petTypeId,
				petTypeName: this.dataShow.petTypeName,
			});
		}
	}

	convertDate(date: any) {
		return moment(new Date(date)).format('DD/MM/YYYY');
	}

	save() {
		this.spinnerService.show();
		if (this.isAdd) {
			let data = {
				petTypeName: this.inputForm.get('petTypeName').value
			};
			this.typePetService.createTypePet(data).pipe(finalize(() => {
				this.spinnerService.hide();
			})).subscribe(res => {
				if (res.body && res.body.key === 'SUCCESS') {
					this.toastrService.success('Tạo mới thành công', 'Thông báo');
					this.activeModal.close('SUCCESS');
				} else {
					this.toastrService.success('Tạo mới không thành công', 'Thông báo');
				}
			});
		} else {
			let data = {
				petTypeId: this.inputForm.get('petTypeId').value.toString(),
				petTypeName: this.inputForm.get('petTypeName').value,
			};
			this.typePetService.updatePetTypeInfo(data).pipe(finalize(() => {
				this.spinnerService.hide();
			})).subscribe(res => {
				if (res.body && res.body.key === 'SUCCESS') {
					this.toastrService.success('Sửa thành công', 'Thông báo');
					this.activeModal.close('SUCCESS');
				} else {
					this.toastrService.success('Sửa không thành công', 'Thông báo');
				}
			});
		}
	}

	closed() {
		this.activeModal.close('Close');
	}
}
