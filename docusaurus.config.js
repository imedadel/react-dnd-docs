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
				{ to: "docs/doc1", label: "Docs", position: "right" },
				{ to: "blog", label: "Blog", position: "right" },
				{
					href: "https://github.com/facebook/docusaurus",
					label: "GitHub",
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
							label: "Style Guide",
							to: "docs/doc1",
						},
						{
							label: "Second Doc",
							to: "docs/doc2",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
					],
				},
				{
					title: "Social",
					items: [
						{
							label: "Blog",
							to: "blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/facebook/docusaurus",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
}
