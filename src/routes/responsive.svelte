<header class="bg-light text-center">
	<h4>Lorem, ipsum dolor.</h4>
	<h1>Responsive layouts don't have to be a struggle</h1>
</header>

<section>
	<p class="text-center">Quality Designs</p>
	<div class="first-section">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic ipsam incidunt quisquam
			quaerat dicta nesciunt provident neque mollitia culpa veritatis ratione nihil odio nulla
			debitis porro, dolore repellendus minima?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic ipsam incidunt quisquam
			quaerat dicta nesciunt provident neque mollitia culpa veritatis ratione nihil odio nulla
			debitis porro, dolore repellendus minima?
		</p>
	</div>
</section>

<section class="image-grid1">
	<div class="imagedesc1">
		<p>Lorem ipsum dolor sit.</p>
		<h3>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis, officia, maxime
			nostrum expedita enim optio corporis harum sit placeat quaerat voluptates odio! Aspernatur
			minus illum in consectetur dolorum maiores!
		</h3>
	</div>
	<img src="../../static/favicon.png" alt="" />
</section>

<section class="image-grid2">
	<img src="../../static/favicon.png" alt="" />
	<div class="imagedesc2">
		<p>Lorem ipsum dolor sit.</p>
		<h3>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis, officia, maxime
			nostrum expedita enim optio corporis harum sit placeat quaerat voluptates odio! Aspernatur
			minus illum in consectetur dolorum maiores!
		</h3>
	</div>
</section>

<style>
	:root {
		--clr-primary-300: #f3eed9;
		--clr-primary-400: #824936;
		--clr-neutral-100: white;
		--clr-neutral-900: #222c2a;
	}

	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	.first-section {
		display: grid;
		grid-auto-columns: 1fr 1fr;
	}
	.bg-light {
		background-color: var(--clr-primary-300);
	}

	.bg-dark {
		background-color: var(--clr-neutral-900);
	}

	.bg-primary {
		background-color: var(--clr-primary-400);
	}
</style>
