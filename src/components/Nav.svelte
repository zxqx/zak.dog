<script>
	export let segment;
</script>

<style>
	header {
		display: flex;
		justify-content: center;
		background: #272727;
		color: #fff;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 2em);
		height: 2px;
		background-color: transparent;
		display: block;
		bottom: 0;
	}

	nav a {
		display: block;
		padding: 1em;
		font-weight: 400;
		line-height: 42px;
		text-decoration: none;
	}

	.logo {
		padding: 1em;
		font-size: 20px;
		font-weight: 900;
		font-style: italic;
	}

	.logo a {
		text-decoration: none;
	}

	@media (min-width: 600px) {
		nav a {
			line-height: 38px;
		}
	}
</style>

<header>
	<div class="logo">
		<a href="/">
			zak.dog
		</a>
	</div>
</header>
