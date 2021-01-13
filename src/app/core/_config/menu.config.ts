export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					translate: 'MENU.DASHBOARD',
				}
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'TRang chủ',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					bullet: 'dot',
				},
				{section: 'Quản lý'},
				{
					title: 'Google Material',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Form Controls',
							bullet: 'dot',
							submenu: [
								{
									title: 'Auto Complete',
									page: '/material/form-controls/autocomplete',
									permission: 'accessToECommerceModule'
								},
								{
									title: 'Checkbox',
									page: '/material/form-controls/checkbox'
								},
								{
									title: 'Radio Button',
									page: '/material/form-controls/radiobutton'
								},
								{
									title: 'Datepicker',
									page: '/material/form-controls/datepicker'
								},
								{
									title: 'Form Field',
									page: '/material/form-controls/formfield'
								},
								{
									title: 'Input',
									page: '/material/form-controls/input'
								},
								{
									title: 'Select',
									page: '/material/form-controls/select'
								},
								{
									title: 'Slider',
									page: '/material/form-controls/slider'
								},
								{
									title: 'Slider Toggle',
									page: '/material/form-controls/slidertoggle'
								}
							]
						},
						{
							title: 'Navigation',
							bullet: 'dot',
							submenu: [
								{
									title: 'Menu',
									page: '/material/navigation/menu'
								},
								{
									title: 'Sidenav',
									page: '/material/navigation/sidenav'
								},
								{
									title: 'Toolbar',
									page: '/material/navigation/toolbar'
								}
							]
						},
						{
							title: 'Layout',
							bullet: 'dot',
							submenu: [
								{
									title: 'Card',
									page: '/material/layout/card'
								},
								{
									title: 'Divider',
									page: '/material/layout/divider'
								},
								{
									title: 'Expansion panel',
									page: '/material/layout/expansion-panel'
								},
								{
									title: 'Grid list',
									page: '/material/layout/grid-list'
								},
								{
									title: 'List',
									page: '/material/layout/list'
								},
								{
									title: 'Tabs',
									page: '/material/layout/tabs'
								},
								{
									title: 'Stepper',
									page: '/material/layout/stepper'
								},
								{
									title: 'Default Forms',
									page: '/material/layout/default-forms'
								},
								{
									title: 'Tree',
									page: '/material/layout/tree'
								}
							]
						},
						{
							title: 'Buttons & Indicators',
							bullet: 'dot',
							submenu: [
								{
									title: 'Button',
									page: '/material/buttons-and-indicators/button'
								},
								{
									title: 'Button toggle',
									page: '/material/buttons-and-indicators/button-toggle'
								},
								{
									title: 'Chips',
									page: '/material/buttons-and-indicators/chips'
								},
								{
									title: 'Icon',
									page: '/material/buttons-and-indicators/icon'
								},
								{
									title: 'Progress bar',
									page: '/material/buttons-and-indicators/progress-bar'
								},
								{
									title: 'Progress spinner',
									page: '/material/buttons-and-indicators/progress-spinner'
								},
								{
									title: 'Ripples',
									page: '/material/buttons-and-indicators/ripples'
								}
							]
						},
						{
							title: 'Popups & Modals',
							bullet: 'dot',
							submenu: [
								{
									title: 'Bottom sheet',
									page: '/material/popups-and-modals/bottom-sheet'
								},
								{
									title: 'Dialog',
									page: '/material/popups-and-modals/dialog'
								},
								{
									title: 'Snackbar',
									page: '/material/popups-and-modals/snackbar'
								},
								{
									title: 'Tooltip',
									page: '/material/popups-and-modals/tooltip'
								}
							]
						},
						{
							title: 'Data table',
							bullet: 'dot',
							submenu: [
								{
									title: 'Paginator',
									page: '/material/data-table/paginator'
								},
								{
									title: 'Sort header',
									page: '/material/data-table/sort-header'
								},
								{
									title: 'Table',
									page: '/material/data-table/table'
								}
							]
						}
					]
				},
				{section: 'Quản lý đơn nhận nuôi'},
				{
					title: 'Danh sách đơn duyệt',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Đơn nhận nuôi',
							page: '/adopt-pet/list'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
