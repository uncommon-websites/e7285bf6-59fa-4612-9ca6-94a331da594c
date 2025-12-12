<section class="py-20 border-b border-border">
	<div class="container-custom">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-16">
			
			<!-- Left Column: CTA & Visual -->
			<div class="flex flex-col h-full">
				<div class="mb-8">
					<p class="font-mono text-xs text-muted mb-4">Get started</p>
					<h2 class="text-2xl font-medium mb-4">Eliminate analytics debt forever</h2>
					<p class="text-muted font-light mb-8 text-sm leading-relaxed max-w-md">
						Weave treats analytics as code, automating event detection and SDK generation so developers can focus on shipping features.
					</p>
					<div class="flex gap-3 mb-12">
						<button class="border border-border px-3 py-1.5 text-xs font-mono uppercase hover:bg-primary-50 transition-colors flex items-center gap-2">
							TRY DEMO
							<span class="text-muted border border-muted/30 rounded px-1 text-[9px] min-w-[16px] text-center">D</span>
						</button>
						<button class="border border-border px-3 py-1.5 text-xs font-mono uppercase hover:bg-primary-50 transition-colors flex items-center gap-2">
							JOIN WAITLIST
							<span class="text-muted border border-muted/30 rounded px-1 text-[9px] min-w-[16px] text-center">W</span>
						</button>
					</div>
				</div>
				
				<!-- Code Pattern Visual -->
				<div class="mt-auto w-full h-48 bg-gray-950 relative overflow-hidden flex items-center justify-center">
					{#each Array(100) as _, i}
						<div 
							class="h-full bg-primary-500/20 absolute" 
							style="
								left: {i}%; 
								width: {Math.random() * 2}%; 
								opacity: {Math.random() * 0.6};
							"
						></div>
					{/each}
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="bg-gray-950 text-primary-400 font-mono text-sm px-3 py-2 z-10 border border-primary-500/30">
							weave.analytics
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Updates -->
			<div>
				<p class="font-mono text-xs text-muted mb-8">Latest updates</p>
				
				<div class="space-y-12">
					<!-- Update 1 -->
					<div class="flex gap-8 group">
						<div class="font-mono text-xs text-muted w-24 shrink-0 pt-1">January 15</div>
						<div>
							<h3 class="font-medium text-sm mb-2 group-hover:text-accent transition-colors cursor-pointer">Public Beta Launch</h3>
							<p class="text-xs text-muted leading-relaxed mb-3">
								Weave is now in Public Beta with a waitlist system for controlled rollout. The product is live and accepting users for testing, with a demo available without signup required. Early access users get special pricing and priority support.
							</p>
							<span class="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-muted">Product Launch</span>
						</div>
					</div>

					<!-- Update 2 -->
					<div class="flex gap-8 group">
						<div class="font-mono text-xs text-muted w-24 shrink-0 pt-1">January 10</div>
						<div>
							<h3 class="font-medium text-sm mb-2 group-hover:text-accent transition-colors cursor-pointer">SOC 2 Type II Certification</h3>
							<p class="text-xs text-muted leading-relaxed mb-3">
								Weave achieves SOC 2 Type II certification and GDPR compliance. All data is encrypted in transit and at rest, with read-only GitHub access and no source code storage. We're committed to enterprise-grade security from day one.
							</p>
							<div class="flex gap-2">
								<span class="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-muted">Security</span>
								<span class="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-muted">Compliance</span>
							</div>
						</div>
					</div>

					<!-- Update 3 -->
					<div class="flex gap-8 group">
						<div class="font-mono text-xs text-muted w-24 shrink-0 pt-1">December 20</div>
						<div>
							<h3 class="font-medium text-sm mb-2 group-hover:text-accent transition-colors cursor-pointer">Multi-Platform Integration Support</h3>
							<p class="text-xs text-muted leading-relaxed mb-3">
								Weave now supports sending events to multiple platforms simultaneously: Segment, Amplitude, Mixpanel, Google Analytics 4, PostHog, and Heap. Platform-agnostic approach means no vendor lock-in and seamless integration with your existing analytics stack.
							</p>
							<span class="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-muted">Integrations</span>
						</div>
					</div>

					<!-- Update 4 -->
					<div class="flex gap-8 group">
						<div class="font-mono text-xs text-muted w-24 shrink-0 pt-1">December 1</div>
						<div>
							<h3 class="font-medium text-sm mb-2 group-hover:text-accent transition-colors cursor-pointer">Framework Support Expansion</h3>
							<p class="text-xs text-muted leading-relaxed mb-3">
								Weave now supports React, Next.js, Vue, Angular, Svelte, and vanilla JavaScript. We're adding new frameworks monthly based on user demand, with backward compatibility for existing tracking implementations.
							</p>
							<span class="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded text-muted">Product Update</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
