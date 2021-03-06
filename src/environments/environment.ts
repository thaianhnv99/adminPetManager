// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	isMockEnabled: true, // You have to switch this, when your real back-end is done
	authTokenKey: 'evoucher_auth',
	DATE_FORMAT: 'YYYY-MM-DDTHH:mm:ss.SSS',
	authenticationUrl: 'https://apiintdev.seabank.com.vn/sb/sb/JWT-INTERNAL/login',
	voucherApiUrl: 'https://apiintdev.seabank.com.vn/sb/sb/api-e-voucher-rest/process',
	linkFileTemplate: 'assets/media/template/TemplateRegisterCustomerVoucherBatch.xlsx',
	API_URL: 'http://localhost:8081/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
