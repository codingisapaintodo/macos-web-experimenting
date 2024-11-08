const apple_menu = {
	title: 'apple',
	menu: {
		'about-this-mac': {
			title: 'About This Mac',
			breakAfter: true,
		},
		'system-preferences': {
			title: 'System Preferences...',
		},
		'app-store': {
			title: 'App Store...',
			breakAfter: true,
		},
		'recent-items': {
			title: 'Recent Items',
			breakAfter: true,
		},
		'force-quit': {
			title: 'Force Quit...',
			breakAfter: true,
		},
		sleep: {
			title: 'Sleep',
		},
		restart: {
			title: 'Restart...',
		},
		shutdown: {
			title: 'Shut Down...',
			breakAfter: true,
		},
		'lock-screen': {
			title: 'Lock Screen',
		},
		logout: {
			title: 'Log Out User...',
		},
	},
};

export const create_menu_config = <T extends {}>(et: T) => ({ apple: apple_menu, ...et });
