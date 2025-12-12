<section class="pt-32 pb-24 overflow-hidden border-b border-border">
	<div class="container-custom">
		<!-- Editorial Hero Layout -->
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Left: Bold Statement -->
			<div class="space-y-8">
				<div class="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm font-mono uppercase tracking-wider">
					Public Beta
				</div>
				
				<h1 class="text-5xl md:text-6xl lg:text-7xl leading-none">
					Stop writing<br/>
					<span class="text-accent">tracking code</span>
				</h1>
				
				<div class="space-y-4 text-lg md:text-xl text-muted max-w-lg">
					<p>Your developers have better things to build. Let AI scan your codebase and auto-generate type-safe analytics in 7 minutes.</p>
					<p class="text-foreground font-medium">288x faster than manual implementation.</p>
				</div>

				<div class="flex flex-wrap gap-4 pt-4">
					<button class="px-6 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
						Try the demo
					</button>
					<button class="px-6 py-3 border-2 border-border hover:border-foreground transition-colors font-medium">
						View documentation
					</button>
				</div>
			</div>

			<!-- Right: Visual Statement -->
			<div class="relative">
				<!-- Large Crossed Out "Manual" -->
				<div class="relative bg-background border-2 border-border p-12 space-y-6">
					<div class="relative">
						<div class="text-6xl font-bold text-muted/20 select-none">
							MANUAL
						</div>
						<div class="absolute inset-0 flex items-center">
							<div class="w-full h-1 bg-accent rotate-[-8deg]"></div>
						</div>
					</div>
					
					<div class="space-y-3 text-sm text-muted font-mono">
						<div class="flex items-center gap-2 line-through opacity-50">
							<span>→</span> Write tracking code
						</div>
						<div class="flex items-center gap-2 line-through opacity-50">
							<span>→</span> Update on every change
						</div>
						<div class="flex items-center gap-2 line-through opacity-50">
							<span>→</span> Fix broken events
						</div>
						<div class="flex items-center gap-2 line-through opacity-50">
							<span>→</span> Maintain documentation
						</div>
					</div>

					<div class="pt-6 border-t-2 border-accent">
						<div class="text-accent font-bold text-2xl mb-2">AUTOMATED</div>
						<div class="text-sm text-muted">
							Connect repo → AI scans → Ship to production
						</div>
					</div>
				</div>

				<!-- Floating Stats -->
				<div class="absolute -bottom-6 -right-6 bg-foreground text-background p-6 border-2 border-foreground">
					<div class="text-4xl font-bold">7min</div>
					<div class="text-sm font-mono">setup time</div>
				</div>
			</div>
		</div>
	</div>
</section>
