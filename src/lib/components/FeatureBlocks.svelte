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
	<!-- Conceptual: Magnifying Glass Over Code -->
	<div class="w-full h-full bg-background border-2 border-border p-8 flex items-center justify-center relative overflow-hidden">
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-5 font-mono text-[8px] leading-tight overflow-hidden">
			{#each Array(20) as _, i}
				<div>const handleClick = () => trackEvent('click') // button.tsx</div>
			{/each}
		</div>
		
		<!-- Magnifying Glass Concept -->
		<div class="relative z-10">
			<div class="w-48 h-48 border-4 border-accent rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
				<div class="text-center space-y-2">
					<div class="text-5xl font-bold text-accent">AI</div>
					<div class="text-xs font-mono text-muted uppercase">Scanning</div>
					<div class="flex gap-1 justify-center">
						<div class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
						<div class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
						<div class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
					</div>
				</div>
			</div>
			<div class="absolute -bottom-4 -right-4 w-16 h-2 bg-accent rotate-45"></div>
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
	<!-- Conceptual: Assembly Line / Factory -->
	<div class="w-full h-full bg-foreground text-background p-8 flex flex-col justify-center gap-6">
		<div class="flex items-center justify-between">
			<div class="text-sm font-mono uppercase tracking-wider opacity-70">Input</div>
			<div class="text-sm font-mono uppercase tracking-wider opacity-70">Output</div>
		</div>
		
		<!-- Assembly Line Visual -->
		<div class="flex items-center gap-4">
			<!-- Input -->
			<div class="flex-shrink-0 w-20 h-20 border-2 border-background/30 flex items-center justify-center">
				<div class="text-xs font-mono text-center opacity-70">Your<br/>Code</div>
			</div>
			
			<!-- Arrow with gears -->
			<div class="flex-1 relative">
				<div class="h-0.5 bg-background/30 w-full"></div>
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-accent bg-foreground flex items-center justify-center">
					<div class="text-accent text-xl font-bold">⚙</div>
				</div>
			</div>
			
			<!-- Output -->
			<div class="flex-shrink-0 w-20 h-20 bg-accent border-2 border-accent flex items-center justify-center">
				<div class="text-xs font-mono text-center font-bold text-white">Type<br/>Safe<br/>SDK</div>
			</div>
		</div>
		
		<div class="text-xs font-mono opacity-70 text-center">
			Zero manual implementation required
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
	<!-- Conceptual: Heartbeat Monitor -->
	<div class="w-full h-full bg-background border-2 border-border p-8 flex flex-col justify-center gap-6">
		<!-- Pulse Line -->
		<div class="relative h-32 border-l-2 border-b-2 border-border">
			<svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
				<polyline
					points="0,50 50,50 60,20 70,80 80,50 150,50 160,30 170,70 180,50 250,50 260,25 270,75 280,50 400,50"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="text-accent"
				/>
			</svg>
			
			<!-- Pulse Dot -->
			<div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
		</div>
		
		<!-- Stats -->
		<div class="grid grid-cols-3 gap-4 text-center">
			<div>
				<div class="text-2xl font-bold text-accent">1,247</div>
				<div class="text-xs font-mono text-muted">Events/min</div>
			</div>
			<div>
				<div class="text-2xl font-bold text-accent">98.7%</div>
				<div class="text-xs font-mono text-muted">Valid</div>
			</div>
			<div>
				<div class="text-2xl font-bold text-accent">0ms</div>
				<div class="text-xs font-mono text-muted">Latency</div>
			</div>
		</div>
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
	<!-- Conceptual: Broadcasting Tower -->
	<div class="w-full h-full bg-accent text-white p-8 flex items-center justify-center">
		<div class="text-center space-y-8">
			<!-- Tower -->
			<div class="flex flex-col items-center gap-2">
				<div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
				<div class="w-1 h-12 bg-white/50"></div>
				<div class="w-8 h-2 bg-white/50"></div>
				<div class="w-1 h-8 bg-white/50"></div>
				<div class="w-12 h-3 bg-white"></div>
			</div>
			
			<!-- Broadcast Lines -->
			<div class="relative h-20">
				{#each [0, 1, 2, 3, 4, 5] as i}
					<div 
						class="absolute top-1/2 left-1/2 w-24 h-0.5 bg-white/30 origin-left"
						style="transform: translate(-50%, -50%) rotate({i * 60}deg)"
					></div>
				{/each}
			</div>
			
			<!-- Platform Count -->
			<div>
				<div class="text-4xl font-bold">6</div>
				<div class="text-sm font-mono opacity-80">Platforms simultaneously</div>
			</div>
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
	<!-- Conceptual: Document Stack with Share -->
	<div class="w-full h-full bg-background border-2 border-border p-8 flex items-center justify-center">
		<div class="relative">
			<!-- Stacked Documents -->
			<div class="relative">
				<div class="w-40 h-48 bg-foreground border-2 border-foreground absolute top-2 left-2 opacity-20"></div>
				<div class="w-40 h-48 bg-foreground border-2 border-foreground absolute top-1 left-1 opacity-40"></div>
				<div class="w-40 h-48 bg-background border-2 border-foreground relative z-10 p-4 flex flex-col justify-between">
					<div class="space-y-2">
						<div class="h-1 bg-foreground/20 w-3/4"></div>
						<div class="h-1 bg-foreground/20 w-full"></div>
						<div class="h-1 bg-foreground/20 w-2/3"></div>
					</div>
					
					<div class="text-center">
						<div class="text-2xl font-bold text-foreground">42</div>
						<div class="text-xs font-mono text-muted">Events</div>
					</div>
					
					<div class="grid grid-cols-2 gap-1 text-[8px] font-mono">
						<div class="border border-border p-1 text-center">PDF</div>
						<div class="border border-border p-1 text-center">CSV</div>
						<div class="border border-border p-1 text-center">XLS</div>
						<div class="border border-border p-1 text-center">JSON</div>
					</div>
				</div>
			</div>
			
			<!-- Share Icon -->
			<div class="absolute -bottom-4 -right-4 w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center text-white text-xl">
				↗
			</div>
		</div>
	</div>
</FeatureBlock>
