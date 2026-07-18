import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-black dark:text-white">
			<header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/40">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
					<h1 className="text-2xl font-bold tracking-tight">
						<span className="text-blue-500">C</span>Docs
					</h1>

					<div className="flex items-center gap-3">
						<ThemeToggle />

						<Link
							href="/login"
							className="rounded-lg px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
						>
							Login
						</Link>

						<Link
							href="/register"
							className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:scale-105 hover:bg-blue-700"
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>

			<section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
				<div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-500">
					✨ Collaborative Docs Platform
				</div>

				<h2 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
					Beautiful documents
					<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
						{" "}
						with real-time collaboration
					</span>
				</h2>

				<p className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
					Write, edit, organize and collaborate with your team.
					Fast, modern and distraction free.
				</p>

				<div className="mt-10 flex gap-4">
					<Link
						href="/register"
						className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-blue-700"
					>
						Get Started
					</Link>

					<button className="rounded-xl border border-zinc-300 px-8 py-4 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
						Learn More
					</button>
				</div>
			</section>

			<section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-3">
				<FeatureCard
					title="Rich Editor"
					description="Markdown, tables, images, code blocks and much more."
				/>

				<FeatureCard
					title="Real-time Collaboration"
					description="See teammates typing instantly with live cursors."
				/>

				<FeatureCard
					title="Secure Sharing"
					description="Granular permissions for teams, clients and guests."
				/>
			</section>
		</main>
	);
}

function FeatureCard({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50">
			<h3 className="text-xl font-semibold">{title}</h3>

			<p className="mt-4 text-zinc-600 dark:text-zinc-400">
				{description}
			</p>
		</div>
	);
}
