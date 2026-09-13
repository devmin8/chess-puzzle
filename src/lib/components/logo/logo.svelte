<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let { class: className }: { class?: string } = $props();
</script>

<div
	class={cn(
		'flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-white',
		className
	)}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		class="size-[19px]"
		aria-hidden="true"
	>
		<path
			fill="currentColor"
			d="M12 3.25c.9 0 1.65.75 1.65 1.65 0 .45-.18.85-.47 1.14 1 .25 1.74 1.14 1.74 2.21 0 .38-.1.74-.28 1.05h1.28v1.6h-.82l.98 3.9H8.92l.98-3.9h-.82v-1.6h1.28c-.18-.31-.28-.67-.28-1.05 0-1.07.74-1.96 1.74-2.21a1.65 1.65 0 0 1-.47-1.14c0-.9.75-1.65 1.65-1.65ZM9.7 16.15h4.6v1.2H9.7v-1.2Zm-.9 1.8h6.4V19.4H8.8v-1.45Z"
		/>
	</svg>
</div>
