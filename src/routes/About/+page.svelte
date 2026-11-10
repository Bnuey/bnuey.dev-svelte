<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Header from "#lib/components/header.svelte";
	import Socials from "#lib/components/socials_bar.svelte";
	import NavButton from "#lib/components/navigation_button.svelte";
</script>

<main>
	<Header />
	<Socials />
	<br /><br />

	<h2>About Me</h2>
	<hr />
	<div class="about">
		<div class="about_column_l">
			<h4>
				I'm a passionate Game Developer trying to make cool things and
				give people memorable experiences. I'm familiar with a wide
				array of programs, tools, and fields. I like experimenting,
				learning new skills, and creating whatever my mind comes up
				with.
			</h4>
		</div>
		<div class="about_column_r">
			<img src="assets/LilLeahPNG.png">
		</div>
	</div>

	<br />

	<h2>Skills & Education</h2>
	<hr />
	<h3>Languages</h3>
	<h4>GDScript - Python - Java - Dart - HTML - CSS - TypeScript</h4>
	<br />

	<h3>Engines & Technologies</h3>
	<h4>Unity - Svelte - Flutterflow - Blender</h4>
	<br />

	<h3>Education</h3>
	<h4>
		B.IT, Information Systems in Business and Game Development · Ontario
		Tech University
	</h4>
	<br />

	<h3>Also</h3>
	<h4>3D Modelling - Video Editing - Motion Graphics - 3D Printing</h4>

	<br /><br />
	<h2>Awards</h2>
	<hr />
	<h4>
		- People’s Choice Award (GameCon 2026, Toyboxers!) (04/2026)
		<br />- Ubisoft’s Choice Award: Ubisoft (GameCon 2026, Toyboxers!)
		(04/2026)
		<br />- Best Tech Award: GDSA (GameCon 2025, Sword & Sail) (04/2025)
		<br />- Ubisoft’s Choice Award: Ubisoft (GameCon 2025, Sword & Sail)
		(04/2025)
		<br />- Conrgessional App Challenge Winner: District 13 (2020)
	</h4>
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
		text-align: left;
		padding: 0px;
		margin: 0px;
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
	main {
		max-width: 800px;
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
		gap: 20px;
		align-items: center;
	}

	.about {
		display:flex;
	}
	.about_column_r {
		flex: 1;
	}
	.about_column_l {
		flex: 2;
	}

	img {
		width: 75%;
	}
</style>
