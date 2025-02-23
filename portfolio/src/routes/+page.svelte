<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { initialisePosthog } from '$lib/posthog';

	// once the page load is complete, then init posthog

	const posthogStore = writable(localStorage.getItem('posthogStore') || '');

	posthogStore.subscribe((val) => localStorage.setItem('posthogStore', val));
	onMount(() => {
		// Initialize PostHog
		const posthog = initialisePosthog(document, posthogStore);
		posthog.init('phc_EJbUYSxg9VxUatRENfop8ovSIKF8MG8LS9IQlUZ6TaX', {
			ui_host: 'https://us.i.posthog.com',
			api_host: 'https://app.timothykemmis.com',
			person_profiles: 'always'
		});

		posthogStore.set(posthog);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
