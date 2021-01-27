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
					title: 'Trang chủ',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '',
					bullet: 'dot',
				},
				{section: 'Quản lý'},
				{
					title: 'Tài khoản',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Danh sách tài khoản',
							page: ''
						},
					]
				},
				{
					title: 'Vật nuôi',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Danh sách vật nuôi',
							page: ''
						},
					]
				},
				{
					title: 'Loài vật nuôi',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Danh sách loài vật nuôi',
							page: '/type-pet/list'
						},
					]
				},
				{
					title: 'Nhận nuôi',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Danh sách nhận nuôi',
							page: '/adopt-pet/list'
						},
					]
				},
				{
					title: 'Bài viết',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Danh sách bài viết',
							page: ''
						},
					]
				},
				{
					title: 'Báo cáo',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					page: ''
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
