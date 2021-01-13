/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */

export const DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         class="pagination"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (showChangeItem)="showChangeItem.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <ul class="ngx-pagination"
        role="navigation"
        [attr.aria-label]="screenReaderPaginationLabel"
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-first" [ngClass]="{'circle-icon-disable' : p.isFirstPage()}" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks">
            <a class="circle-icon" tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.first()" (click)="p.first()" [attr.aria-label]="firstLabel + ' ' + screenReaderPageLabel">
                {{ firstLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()">
                {{ firstLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>
        <li class="pagination-previous" [ngClass]="{'circle-icon-disable' : p.isFirstPage()}" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks">
            <a class="circle-icon" tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()" [attr.aria-label]="previousLabel + ' ' + screenReaderPageLabel">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value"
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages">
            <a class="circle-icon-page" tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </ng-container>
        </li>

        <li class="pagination-next" [ngClass]="{'circle-icon-disable' : p.isLastPage()}" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a class="circle-icon" tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()" [attr.aria-label]="nextLabel + ' ' + screenReaderPageLabel">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>
        <li class="pagination-last" [ngClass]="{'circle-icon-disable' : p.isLastPage()}" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a class="circle-icon" tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.last()" (click)="p.last()" [attr.aria-label]="lastLabel + ' ' + screenReaderPageLabel">
                 {{ lastLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()">
                 {{ lastLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    <li class="pagination-info">
           Hiển thị kết quả: {{ p.getItemsPerPage() }} / {{ p.getTotalItems() }} kết quả
        </li>
    </pagination-template>
    `;

export const DEFAULT_STYLES = `
.circle-icon-page{
    margin: 0 2.5px;
    border-radius: 50% !important;
    width: 32px !important;
    height: 32px !important;
    padding: 6px !important;

    background: white !important;
    color: #666 !important;
    text-align: center !important;
    }
.circle-icon-page:hover {
  font-weight: bold;
}
.circle-icon-disable{
    margin: 0 2.5px;
    border-radius: 50% !important;
    width: 32px !important;
    height: 32px !important;
    padding: 6px !important;
    cursor: no-drop !important;

    background: #F4F5F8 !important;
    color: #666 !important;
    text-align: center !important;
    }
.circle-icon{
    margin: 0 2.5px;
    border-radius: 50% !important;
    width: 32px !important;
    height: 32px !important;
    padding: 6px !important;

    background: #D9D9D9 !important;
    color: #666 !important;
    text-align: center !important;
    }

.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  }
  .pagination{
  display: flex;
  justify-content: space-between;
};

  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a;
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    margin: 0 2.5px;
    border-radius: 50% !important;
    width: 32px !important;
    height: 32px !important;
    padding: 6px !important;

    background: #D71920 !important;
    color: white !important;
    text-align: center !important;}
  .ngx-pagination .disabled {
    margin: 0 2.5px;
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; }
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-first a::before,
.ngx-pagination .pagination-first.disabled::before {
  content: '«';
  display: inline-block;}

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before {
  content: '<';
  display: inline-block;}

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '>';
  display: inline-block;}

.ngx-pagination .pagination-last a::after,
.ngx-pagination .pagination-last.disabled::after {
  content: '»';
  display: inline-block;}

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; }
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}

.pagination-info {
},


  `;
