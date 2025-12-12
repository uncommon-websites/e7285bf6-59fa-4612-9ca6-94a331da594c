<section class="pt-20 pb-12 overflow-hidden">
	<div class="container-custom">
		<div class="max-w-4xl mb-12">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
				Ship features, not tracking code
			</h1>
			<p class="text-2xl md:text-3xl text-muted font-light">
				Auto-generate type-safe analytics tracking <span class="text-accent">in 7 minutes</span>
			</p>
		</div>

		<div class="relative w-full aspect-[2/1] bg-gray-950 rounded-sm overflow-hidden group">
			<!-- Code Editor Background -->
			<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
			
			<!-- Grid Overlay -->
			<div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
			
			<!-- Code Lines Visual -->
			<div class="absolute inset-0 p-8 font-mono text-xs text-gray-500 space-y-2 overflow-hidden">
				<div class="flex gap-4"><span class="text-gray-700">1</span><span class="text-primary-400">import</span> <span class="text-gray-300">&#123; trackEvent &#125;</span> <span class="text-primary-400">from</span> <span class="text-green-400">'@weave/sdk'</span></div>
				<div class="flex gap-4"><span class="text-gray-700">2</span></div>
				<div class="flex gap-4"><span class="text-gray-700">3</span><span class="text-purple-400">function</span> <span class="text-blue-300">handleClick</span><span class="text-gray-400">()</span> <span class="text-gray-400">&#123;</span></div>
				<div class="flex gap-4 pl-8"><span class="text-gray-700">4</span><span class="text-gray-300">trackEvent</span><span class="text-gray-400">(</span><span class="text-green-400">'button_clicked'</span><span class="text-gray-400">,</span> <span class="text-gray-400">&#123;</span></div>
				<div class="flex gap-4 pl-16"><span class="text-gray-700">5</span><span class="text-blue-300">component</span><span class="text-gray-400">:</span> <span class="text-green-400">'hero'</span><span class="text-gray-400">,</span></div>
				<div class="flex gap-4 pl-16"><span class="text-gray-700">6</span><span class="text-blue-300">action</span><span class="text-gray-400">:</span> <span class="text-green-400">'signup'</span></div>
				<div class="flex gap-4 pl-8"><span class="text-gray-700">7</span><span class="text-gray-400">&#125;)</span></div>
				<div class="flex gap-4"><span class="text-gray-700">8</span><span class="text-gray-400">&#125;</span></div>
			</div>

			<!-- Gradient Overlay -->
			<div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

			<!-- Floating Badge -->
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm shadow-2xl border border-gray-200 flex items-center gap-3 text-xs font-mono">
				<div class="flex items-center gap-2">
					<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
					<span class="text-gray-900 font-semibold">98.7% Schema Valid</span>
				</div>
				<div class="w-px h-4 bg-gray-300"></div>
				<span class="text-gray-600">288x Faster Setup</span>
			</div>
		</div>
	</div>
</section>
