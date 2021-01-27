import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TypePetService {
	API_URL = `${environment.API_URL}mapi/petTypeController`;
	itemCard: any = null;

	constructor(
		private http: HttpClient
	) {
	}

	fetchListTypePet(data: any): Observable<any> {
		return this.http.post(this.API_URL + `/getDatatablePetType`, data, {observe: 'response'});
	}

	createTypePet(data: any): Observable<any> {
		return this.http.post(this.API_URL + `/insert`, data, {observe: 'response'});
	}

	updatePetTypeInfo(data: any): Observable<any> {
		return this.http.post(this.API_URL + `/updatePetTypeInfo`, data, {observe: 'response'});
	}

	deletePetTypeInfo(petTypeId: any): Observable<any> {
		return this.http.get(this.API_URL + `/delete?petTypeId=${petTypeId}`, {observe: 'response'});
	}
}
