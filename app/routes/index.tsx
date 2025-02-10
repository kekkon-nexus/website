export default () => (
	<>
		<svg
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			class="mask-circle -z-40 absolute top-0 h-full w-full overflow-hidden mix-blend-lighten blur-[66px]"
		>
			<title>Ring</title>

			<clipPath id="clip">
				<path
					d="M 50,18.18019484660536
				a 33.75 33.75 0 1 0 0,63.63961030678928
				a 33.75 33.75 0 1 0 0,-63.63961030678928
				z"
					transform="rotate(45 50 50)"
				/>
			</clipPath>

			<clipPath id="clip-rotate">
				<path
					d="M 50,18.18019484660536
				a 33.75 33.75 0 1 0 0,63.63961030678928
				a 33.75 33.75 0 1 0 0,-63.63961030678928
				z"
				/>
			</clipPath>

			<foreignObject
				x="0"
				y="0"
				width="100"
				height="100"
				clip-path="url(#clip)"
			>
				<div class="bg-nexus-gradient" xmlns="http://www.w3.org/1999/xhtml" />
			</foreignObject>

			<foreignObject
				x="0"
				y="0"
				width="100"
				height="100"
				clip-path="url(#clip-rotate)"
				class="origin-center scale-85 animate-spin"
			>
				<div class="bg-nexus-gradient" xmlns="http://www.w3.org/1999/xhtml" />
			</foreignObject>
		</svg>
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
