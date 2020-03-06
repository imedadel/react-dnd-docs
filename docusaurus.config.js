module.exports = {
	title: "React DnD",
	tagline: "Drag and Drop for React",
	url: "https://react-dnd.imedadel.me",
	baseUrl: "/",
	favicon: "img/favicon.ico",
	organizationName: "ImedAdel", // Usually your GitHub org/user name.
	projectName: "react-dnd", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "React DnD",
			logo: {
				alt: "React Drag and Drop Logo",
				src: "img/DnD.svg",
			},
			links: [
				{ to: "docs/Overview", label: "Docs", position: "right" },
				{ to: "https://twitter.com/imedadel_", label: "Twitter", position: "right" },
				{
					href: "https://github.com/react-dnd/react-dnd",
					label: "React DnD on GitHub",
					position: "right",
				},
				{
					href: "https://github.com/ImedAdel/react-dnd-docs",
					label: "Docs on GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Quick Start",
							to: "docs/Overview",
						},
						{
							label: "Top-Level API",
							to: "docs/use-drag",
						},
						{
							label: "Monitoring State",
							to: "docs/drag-source-monitor",
						},
						{
							label: "Legacy Decorator API",
							to: "docs/drag-source",
						},
						{
							label: "Backends",
							to: "docs/html5",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/react-dnd",
						},
						{
							label: "Discord",
							href: "https://www.reactiflux.com/",
						},
					],
				},
				{
					title: "Social",
					items: [
						{
							label: "Old Site",
							to: "https://react-dnd.github.io/react-dnd/",
						},
						{
							label: "Imed Adel",
							to: "https://imedadel.me",
						},
						{
							label: "Docs on GitHub",
							href: "https://github.com/ImedAdel/react-dnd-docs",
						},
						{
							label: "React DnD on GitHub",
							href: "https://github.com/react-dnd/react-dnd",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/imedadel_",
						},
					],
				},
			],
			copyright: `Built by Imed Adel using with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/ImedAdel/react-dnd-docs/edit/master/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	themes: ["@docusaurus/theme-live-codeblock"],
}
