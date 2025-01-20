export default () => (
	<>
		<main class="flex flex-col items-center animate-nexus">
			<h1
				id="brand"
				class="mx-4 font-bold text-3xl leading-normal writing-vertical"
			>
				<ruby>
					<span>結</span>
					<span>ꦲꦂꦠꦤ꧀ꦠ</span>
					<rt>けっこん</rt>
				</ruby>
			</h1>
			<p id="title" class="font-display font-black text-l leading-none">
				Kekkon
				<br />
				Nexus
			</p>
		</main>
		<footer class="fixed bottom-0 w-full p-0.5 bg-[#212121] font-mono text-center text-[xx-small] text-white">
			<a
				href="/about"
				preload="mouseover"
				class="opacity-50 hover:opacity-100 active:opacity-100 active:text-[#aaa]"
			>
				about
			</a>
		</footer>
	</>
);
