import Landing from '../components/layout/Landing';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

export const navItems = [
	{
		linkName: 'CollarBlue',
		component: Landing,
		path: '/',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	{
		linkName: 'Home',
		// component: HomePage,
		path: '/home',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	{
		linkName: 'Tradesmen',
		// component: AboutPage,
		path: '/profiles',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	{
		linkName: 'Sign up',
		component: Signup,
		path: '/register',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
	{
		linkName: 'Login',
		component: Login,
		path: '/login',
		subNav: [
			{
				subLinkName: 'Sub Link 1',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 2',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 3',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
			{
				subLinkName: 'Sub Link 4',
				path: 'https://www.youtube.com/watch?v=7UMuJMiNjSk',
			},
		],
	},
];
