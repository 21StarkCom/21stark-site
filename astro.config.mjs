// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://gh.21stark.com',
	integrations: [
		starlight({
			title: '21Stark',
			description: 'Policies and guides for the 21Stark fleet of tools.',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/21stark.css'],
			sidebar: [
				{
					label: 'Policies',
					items: [
						{ label: 'Overview', slug: 'policies' },
						{
							label: 'Sleipnir Huginn',
							items: [{ label: 'Privacy policy', slug: 'policies/huginn/privacy' }],
						},
						{
							label: 'Sleipnir Huginn Scan',
							items: [{ label: 'Privacy policy', slug: 'policies/huginn-scan/privacy' }],
						},
						{
							label: 'Sleipnir Huginn Secrets',
							items: [{ label: 'Privacy policy', slug: 'policies/huginn-secrets/privacy' }],
						},
					],
				},
			],
		}),
	],
});
