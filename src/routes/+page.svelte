<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Header from "#lib/components/header.svelte";
	import Socials from "#lib/components/socials_bar.svelte";
	import NavButton from "#lib/components/navigation_button.svelte";
</script>

<main>
	<Header />
	<Socials />
	<h2>Hi, I'm Ashley</h2>
	<p>
		- Frontend Developer<br />
		- UI/UX Programmer<br />
		- Technical Artist<br />
		- Game Designer
	</p>
	<h3>I'm Currently</h3>
	<p>
		- Programming Lead @ <a
			href="https://store.steampowered.com/search/?publisher=PatchWorks"
			class="important_link"
		>
			PATCHWORKS</a
		><br />
		- Web Developer @
		<a
			href="https://www.linkedin.com/company/sheis-sports/home/"
			class="important_link"
		>
			SheIS Sports
		</a>
	</p>

	<div class="vbox">
		<NavButton
			text="Games"
			href="/Games"
			description="Shipped Games & Game Jams"
		/>

		<NavButton
			text="Projects"
			href="/Projects"
			description="Projects, Mods & Random Files"
		/>

		<NavButton
			text="Art"
			href="/Art"
			description="Motion Graphics, 3D Models & More"
		/>

		<NavButton
			text="Contact"
			href="/Contact"
			description="Social Links & Contact Info"
		/>

		<NavButton text="About" href="/About" description="More About Me" />
	</div>
</main>

<style>
	:global(body) {
		background-color: #26122d;
	}
	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6),
	:global(p) {
		color: #ffffff;
		margin: 20px;
	}

	h1 {
		color: #b36379;
	}

	h4 {
		line-height: 2em;
	}
	h3 {
		color: #57929e;
	}

	h2 {
		color: #dc7e67;
	}

	.content {
		max-width: 500px;
		margin: auto;
	}
	main {
		max-width: 500px;
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.important_link {
		text-decoration: underline;
	}

	:global(h1, h2, h3, h4, h5, h6, p, .sour-gummy) {
		font-family: "Sour Gummy", sans-serif;
		font-optical-sizing: auto;
		font-weight: 900;
		font-style: normal;
		font-variation-settings: "wdth" 100;
	}

	:global(h1) {
		font-size: 3.5em;
	}

	:global(h2) {
		font-size: 3em;
	}

	:global(h3) {
		font-size: 2.5em;
	}

	:global(h4) {
		font-size: 1.25em;
	}

	p {
		font-size: 1.5em;
		text-align: left;
	}

	.hbox {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
</style>
