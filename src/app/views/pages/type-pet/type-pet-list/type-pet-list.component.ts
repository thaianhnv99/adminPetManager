import { Component, OnInit } from '@angular/core';
import {PetPageConfig} from '../../../../core/common/component/ngx-pagination/seanet-pagination.config';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SubheaderService} from '../../../../core/_base/layout';
import {TypePetService} from '../type-pet.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {finalize} from 'rxjs/operators';
import * as moment from 'moment';
import {TypePetDetailComponent} from '../type-pet-detail/type-pet-detail.component';
import {AdoptPetDetailComponent} from '../../adopt-pet/adopt-pet-detail/adopt-pet-detail.component';
import {TypePetCreateComponent} from '../type-pet-create/type-pet-create.component';
import {TypePetConfirmComponent} from '../type-pet-confirm/type-pet-confirm.component';

@Component({
  selector: 'kt-type-pet-list',
  templateUrl: './type-pet-list.component.html',
  styleUrls: ['./type-pet-list.component.scss']
})
export class TypePetListComponent implements OnInit {
	dataItemShow: any[] = [];
	pageNumber: number = 0;
	searchOption: any = {
		page: 0,
		pageSize: 50,
	};
	page = new PetPageConfig();

	constructor(
		private router: Router,
		private modal: NgbModal,
		private subheaderService: SubheaderService,
		private typePetService: TypePetService,
		private spinnerService: NgxSpinnerService,
	) {
	}

	ngOnInit() {
		this.subheaderService.setTitle('Loại vật nuôi');
		this.doSearch(1);
	}

	doSearch(pageNumber: any) {
		this.searchOption.pageSize = 1000;
		this.searchOption.page = pageNumber;
		this.page.page = pageNumber;
		this.fetchListTypePet();
	}

	fetchListTypePet() {
		this.spinnerService.show();
		this.typePetService.fetchListTypePet(this.searchOption).pipe(finalize(() => {
			this.spinnerService.hide();
		})).subscribe(res => {
			console.log(res);
			if (res.body.data.length) {
				this.dataItemShow = res.body.data;
			}
		}, error => {
			alert('Error');
		});
	}

	typePetDetail(data: any) {
		const modalRef = this.modal.open(TypePetDetailComponent, {size: 'lg'});
		modalRef.componentInstance.dataShow = data;
		modalRef.result.then(result => {
			this.doSearch(1);
		}, (reason) => {
		});
	}

	typePetEdit(data: any) {
		const modalRef = this.modal.open(TypePetCreateComponent, {size: 'lg'});
		modalRef.componentInstance.dataShow = data;
		modalRef.componentInstance.isAdd = false;
		modalRef.result.then(result => {
			if(result === 'SUCCESS'){
				this.doSearch(1);
			}
		}, (reason) => {
		});
	}

	typePetDelete(data: any) {
		const modalRef = this.modal.open(TypePetConfirmComponent, {size: 'sm'});
		modalRef.componentInstance.dataShow = data;
		modalRef.result.then(result => {
			if(result === 'SUCCESS'){
				this.doSearch(1);
			}
		}, (reason) => {
		});
	}

	createType() {
		const modalRef = this.modal.open(TypePetCreateComponent, {size: 'lg'});
		modalRef.componentInstance.isAdd = true;
		modalRef.result.then(result => {
			if(result === 'SUCCESS'){
				this.doSearch(1);
			}
		}, (reason) => {
		});
	}

	convertDate(date: any) {
		return moment(new Date(date)).format('DD/MM/YYYY');
	}

	showChangeItem(ev: any) {
		console.log(ev);
	}

	ngOnDestroy() {
	}
}
