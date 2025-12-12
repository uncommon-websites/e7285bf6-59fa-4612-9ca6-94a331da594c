<script lang="ts">
	import FeatureBlock from './FeatureBlock.svelte';
</script>

<!-- Block 1: AI-Powered Code Scanning -->
<FeatureBlock 
	title="AI-powered code scanning" 
	description="Connect your repo and let AI analyze your codebase to detect all interactive elements and events automatically."
	buttons={[
		{ text: "TRY DEMO", icon: true },
		{ text: "VIEW DOCS" }
	]}
>
	<div class="w-full h-full bg-white border border-border rounded shadow-sm p-4 font-mono text-xs">
		<div class="flex items-center gap-2 border-b border-border pb-2 mb-4">
			<div class="w-3 h-3 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
			<span class="text-muted">Scanning repository...</span>
		</div>
		<div class="space-y-3">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center text-white text-[8px]">✓</div>
				<span class="text-gray-600">Button: Sign Up</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center text-white text-[8px]">✓</div>
				<span class="text-gray-600">Form: Contact</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-primary-400 rounded-sm animate-pulse"></div>
				<span class="text-gray-400">Link: Learn More</span>
			</div>
		</div>
	</div>
</FeatureBlock>

<!-- Block 2: Type-Safe SDK Generation -->
<FeatureBlock 
	title="Auto-generated type-safe SDKs" 
	description="Get customized, type-safe tracking code for your specific events. No manual implementation needed."
	buttons={[
		{ text: "GENERATE SDK", icon: true }
	]}
	alignRight={true}
>
	<div class="w-full max-w-md bg-white border border-border rounded shadow-sm p-6 flex flex-col gap-4 font-mono text-xs">
		<div class="flex items-center justify-between border-b border-border pb-2">
			<span class="text-muted">weave-sdk.ts</span>
			<span class="text-green-600 text-[10px]">GENERATED</span>
		</div>
		<div class="space-y-2 text-[10px]">
			<div class="text-purple-600">export interface <span class="text-blue-600">ButtonClickedEvent</span> &#123;</div>
			<div class="pl-4 text-gray-600">component: <span class="text-green-600">string</span>;</div>
			<div class="pl-4 text-gray-600">action: <span class="text-green-600">string</span>;</div>
			<div class="text-purple-600">&#125;</div>
		</div>
		<div class="mt-2 flex items-center gap-2 text-[10px] text-muted">
			<div class="w-2 h-2 bg-green-500 rounded-full"></div>
			Type-safe & ready to use
		</div>
	</div>
</FeatureBlock>

<!-- Block 3: Real-Time Event Monitoring -->
<FeatureBlock 
	title="Real-time event monitoring" 
	description="Live event stream with schema validation. Get instant alerts when events fail or schemas change."
	buttons={[
		{ text: "VIEW DASHBOARD", icon: true }
	]}
>
	<div class="w-full h-full bg-white border border-border rounded shadow-sm overflow-hidden font-mono text-[10px]">
		<div class="grid grid-cols-5 gap-2 p-2 border-b border-border bg-gray-50 text-muted">
			<div>TIME</div>
			<div>EVENT</div>
			<div>STATUS</div>
			<div>PLATFORM</div>
			<div>VALID</div>
		</div>
		{#each [
			{ time: '10:23:45', event: 'button_clicked', status: 'valid', platform: 'Amplitude' },
			{ time: '10:23:44', event: 'page_viewed', status: 'valid', platform: 'Segment' },
			{ time: '10:23:42', event: 'form_submitted', status: 'valid', platform: 'Mixpanel' },
			{ time: '10:23:40', event: 'signup_completed', status: 'warning', platform: 'PostHog' },
			{ time: '10:23:38', event: 'video_played', status: 'valid', platform: 'Amplitude' }
		] as event}
			<div class="grid grid-cols-5 gap-2 p-2 border-b border-border/50 items-center">
				<div class="text-muted">{event.time}</div>
				<div class="text-gray-700">{event.event}</div>
				<div class="flex items-center gap-1">
					<div class="w-1.5 h-1.5 rounded-full {event.status === 'valid' ? 'bg-green-500' : 'bg-yellow-500'}"></div>
					<span class="text-[9px]">{event.status}</span>
				</div>
				<div class="text-gray-600">{event.platform}</div>
				<div class="text-green-600">✓</div>
			</div>
		{/each}
	</div>
</FeatureBlock>

<!-- Block 4: Multi-Platform Integration -->
<FeatureBlock 
	title="Send to all platforms simultaneously" 
	description="Platform-agnostic approach. Send events to Segment, Amplitude, Mixpanel, GA4, PostHog, and Heap at once."
	buttons={[
		{ text: "VIEW INTEGRATIONS", icon: true }
	]}
	alignRight={true}
>
	<div class="w-full h-full bg-white border border-border rounded shadow-sm p-6 flex flex-col gap-4">
		<div class="text-center font-mono text-xs text-muted mb-2">Event Distribution</div>
		<div class="flex flex-col gap-3">
			{#each [
				{ name: 'Segment', status: 'active', count: '1,247' },
				{ name: 'Amplitude', status: 'active', count: '1,247' },
				{ name: 'Mixpanel', status: 'active', count: '1,247' },
				{ name: 'PostHog', status: 'active', count: '1,247' },
				{ name: 'Google Analytics 4', status: 'active', count: '1,247' },
				{ name: 'Heap', status: 'active', count: '1,247' }
			] as platform}
				<div class="flex items-center justify-between p-2 border border-border rounded text-[10px] font-mono">
					<div class="flex items-center gap-2">
						<div class="w-2 h-2 bg-green-500 rounded-full"></div>
						<span class="text-gray-700">{platform.name}</span>
					</div>
					<span class="text-muted">{platform.count} events</span>
				</div>
			{/each}
		</div>
	</div>
</FeatureBlock>

<!-- Block 5: Export & Share Tracking Plans -->
<FeatureBlock 
	title="Export & share tracking plans" 
	description="Download tracking plans in PDF, CSV, Excel, or JSON. Share live links with stakeholders."
	buttons={[
		{ text: "EXPORT PLAN", icon: true }
	]}
>
	<div class="w-full h-full bg-white border border-border rounded shadow-sm p-6 flex flex-col gap-4">
		<div class="flex items-center justify-between border-b border-border pb-3">
			<div class="text-xs font-mono text-gray-700">Tracking Plan</div>
			<div class="text-[10px] text-muted font-mono">42 events</div>
		</div>
		
		<!-- Export Options -->
		<div class="grid grid-cols-2 gap-2">
			{#each [
				{ format: 'PDF', icon: '📄' },
				{ format: 'CSV', icon: '📊' },
				{ format: 'Excel', icon: '📈' },
				{ format: 'JSON', icon: '{ }' }
			] as option}
				<button class="flex items-center gap-2 p-3 border border-border rounded hover:bg-gray-50 transition-colors">
					<span class="text-lg">{option.icon}</span>
					<span class="text-xs font-mono text-gray-700">{option.format}</span>
				</button>
			{/each}
		</div>

		<div class="mt-2 pt-3 border-t border-border">
			<div class="flex items-center gap-2 p-2 bg-gray-50 rounded text-[10px] font-mono">
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-gray-500">
					<path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.5"/>
				</svg>
				<span class="text-gray-600">Share live link</span>
			</div>
		</div>
	</div>
</FeatureBlock>
