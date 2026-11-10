<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Header from '#lib/components/header.svelte'
	import Socials from '#lib/components/socials_bar.svelte'
	import NavButton from '#lib/components/navigation_button.svelte'
	
</script>

<main>
	<Header/>
	<Socials/>
	<p>This is the contact page</p>
	
</main>


<style>
	h1, h2, h3, h4, h5, h6, p {
		color: #FFFFFF;
		margin: 20px;
	}

	main {
		max-width: 500px;
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


</style>
