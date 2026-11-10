<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Header from "#lib/components/header.svelte";
	import Socials from "#lib/components/socials_bar.svelte";
	import GameShowcase from "#lib/components/game_showcase.svelte";

	const modules = import.meta.glob("/src/lib/games_js/*.js", {
		eager: true,
	});
	const games = Object.values(modules)
		.map((m) => m.default)
		.sort((a, b) => new Date(b.date) - new Date(a.date));

	const modules2 = import.meta.glob("/src/lib/game_jams_js/*.js", {
		eager: true,
	});
	const games2 = Object.values(modules2)
		.map((m) => m.default)
		.sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<main>
	<Header />
	<Socials />
	<div class="vbox">
		<h1>Released Games</h1>

		{#each games as game}
			<GameShowcase data={game} />
		{/each}
		
		<h1>Game Jams & More</h1>

		{#each games2 as game}
			<GameShowcase data={game} />
		{/each}
		
	</div>
</main>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		color: #ffffff;
		margin: 20px;
	}

	main {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}

	.hbox {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		gap: 25px;
		align-items: center;
	}
</style>
