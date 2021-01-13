import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export let HEADER_PERMISSION_API;

export let SERVER_API_URL_PERMISSION;
/*api for get permission and group*/
export let HEADER_GET_APP_PERMISSION;
export let SERVER_API_URL_APP_PERMISSION;
export let HEADER_GET_USER_MAN;
export let SERVER_API_URL_USER_MAN;
export let APP_NAME;


@Injectable({
	providedIn: 'root'
})
export class AppConfigService {

	private appConfig: any = {};

	constructor(
		private http: HttpClient
	) {
	}

	public loadAppConfig(): any {
		return this.http.get('/config/kbnn-config.json').toPromise().then(
			data => {
				this.appConfig = data;
				console.log(this.appConfig);
				APP_NAME = this.appConfig.APP_NAME;
			}
		);
	}

	public getConfigByKey(key: string) {
		return this.appConfig[key];
	}
}
