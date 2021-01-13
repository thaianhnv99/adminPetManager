import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SubheaderService} from '../../../../core/_base/layout';
import {PetPageConfig} from '../../../../core/common/component/ngx-pagination/seanet-pagination.config';
import {AdoptPetService} from '../adopt-pet.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {finalize} from 'rxjs/operators';
import * as moment from 'moment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdoptPetConfirmComponent} from '../adopt-pet-confirm/adopt-pet-confirm.component';

@Component({
	selector: 'kt-adopt-pet-list',
	templateUrl: './adopt-pet-list.component.html',
	styleUrls: ['./adopt-pet-list.component.scss']
})
export class AdoptPetListComponent implements OnInit {
	dataItemShow: any[] = [];
	pageNumber: number = 0;
	searchOption: any = {
		page: 0,
		pageSize: 50,
	};
	page: any = new PetPageConfig();

	constructor(
		private router: Router,
		private modal: NgbModal,
		private subheaderService: SubheaderService,
		private adoptPetService: AdoptPetService,
		private spinnerService: NgxSpinnerService,
	) {
	}

	ngOnInit() {
		this.subheaderService.setTitle('Nhận nuôi pet');
		this.doSearch(1);
	}

	doSearch(pageNumber: any) {
		this.searchOption.pageSize = this.page.pageSize;
		this.searchOption.page = pageNumber;
		this.page.page = pageNumber;
		this.fetchListAdoptPet();
	}

	fetchListAdoptPet() {
		this.spinnerService.show();
		this.adoptPetService.fetchListOrder(this.page).pipe(finalize(() => {
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

	approverAdopt(data: any) {
		const modalRef = this.modal.open(AdoptPetConfirmComponent, {size: 'sm'});
		modalRef.componentInstance.petItem = data;
		modalRef.result.then(result => {
			this.doSearch(1);
		});
	}

	rejectAdopt(data: any) {
		this.spinnerService.show();
		let body = {
			orderId: data.orderId,
			approvalDate: new Date(),
			status: 2
		};
		this.adoptPetService.aproverOrderInfo(body).pipe(finalize(() => {
			this.spinnerService.hide();
		})).subscribe(res => {
			console.log(res);
			if (res.body.key === 'SUCCESS') {
				this.doSearch(1);
			} else {
				alert('Error');
			}
		}, error => {
			alert('Error');
		});
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

	adoptDetail(event: any) {
		console.log(event);
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
