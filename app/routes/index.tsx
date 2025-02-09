export default () => (
	<>
		<main class="flex animate-nexus flex-col items-center">
			<h1
				id="brand"
				class="mx-4 font-bold text-3xl leading-normal [writing-mode:vertical-lr]"
			>
				<ruby>
					<span>結</span>
					<span>ꦲꦂꦠꦤ꧀ꦠ</span>
					<rt>けっこん</rt>
				</ruby>
			</h1>
			<p id="title" class="font-black font-display text-l leading-none">
				Kekkon
				<br />
				Nexus
			</p>
		</main>
		<footer class="fixed bottom-0 w-full bg-gray-50 p-0.5 text-center font-mono text-[xx-small] text-white">
			<a
				href="/about"
				preload="mouseover"
				class="opacity-50 hover:opacity-100 active:text-white/80 active:opacity-100"
			>
				about
			</a>
		</footer>
	</>
);
