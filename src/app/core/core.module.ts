// Anglar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Layout Directives
// Services
import {
	ContentAnimateDirective,
	FirstLetterPipe,
	GetObjectPipe,
	HeaderDirective,
	JoinPipe,
	MenuDirective,
	OffcanvasDirective,
	SafePipe,
	ScrollTopDirective,
	SparklineChartDirective,
	StickyDirective,
	TabClickEventDirective,
	TimeElapsedPipe,
	ToggleDirective
} from './_base/layout';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/interceptor/auth.interceptor';
import {NgxPaginationModule} from './common/component/ngx-pagination/ngx-pagination.module';
import {NgbDatepickerModule} from './common/component/ngbDatepicker/datepicker.module';

@NgModule({
	imports: [
		CommonModule,
		NgbDatepickerModule
	],
	declarations: [
		// directives
		ScrollTopDirective,
		HeaderDirective,
		OffcanvasDirective,
		ToggleDirective,
		MenuDirective,
		TabClickEventDirective,
		SparklineChartDirective,
		ContentAnimateDirective,
		StickyDirective,
		// pipes
		TimeElapsedPipe,
		JoinPipe,
		GetObjectPipe,
		SafePipe,
		FirstLetterPipe,
	],
	exports: [
		// directives
		ScrollTopDirective,
		HeaderDirective,
		OffcanvasDirective,
		ToggleDirective,
		MenuDirective,
		TabClickEventDirective,
		SparklineChartDirective,
		ContentAnimateDirective,
		StickyDirective,
		// pipes
		TimeElapsedPipe,
		JoinPipe,
		GetObjectPipe,
		SafePipe,
		FirstLetterPipe,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
	]
})
export class CoreModule {
}
