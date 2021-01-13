import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AdoptPetService {
	API_URL = `${environment.API_URL}mapi/orderController`;
	itemCard: any = null;

	constructor(
		private http: HttpClient
	) {
	}

	fetchListOrder(data: any): Observable<any> {
		return this.http.post(this.API_URL + `/getDatatableOrder`, data, {observe: 'response'});
	}

	aproverOrderInfo(data: any): Observable<any>{
		return this.http.post(this.API_URL + `/approverOrderInfo`, data, {observe: 'response'});
	}
}
