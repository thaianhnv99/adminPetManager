export class PetPageConfig {
	//The number of elements in the page
	pageSize: number = 10;
	//The total number of elements
	totalElements: number = 0;
	//The total number of pages
	totalPages: number = 0;
	//The current page number
	page: number = 1;
}

export function buildSeanetPageConfig(size: number): PetPageConfig {
	let page = new PetPageConfig();
	page.pageSize = size;

	return page;
}
