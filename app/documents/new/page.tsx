import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";

export default function NewDocumentPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 px-6 py-12 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

			{/* Floating Theme Toggle */}
			<div className="fixed right-6 top-6">
				<ThemeToggle />
			</div>

			<div className="mx-auto max-w-2xl">

				<Link
					href="/dashboard"
					className="inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-500 hover:underline"
				>
					← Back to Dashboard
				</Link>

				<div className="mt-8 rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">

					<div className="mb-8">
						<h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
							Create New Document
						</h1>

						<p className="mt-2 text-zinc-600 dark:text-zinc-400">
							Give your document a title and optional description to get started.
						</p>
					</div>

					<form className="space-y-6">

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
								Document Title
							</label>

							<input
								type="text"
								placeholder="Untitled document"
								className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
								Description <span className="text-zinc-500">(Optional)</span>
							</label>

							<textarea
								rows={4}
								placeholder="What is this document about?"
								className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
							/>
						</div>

						<button
							type="submit"
							className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
						>
							Create Document
						</button>

					</form>

				</div>

			</div>

		</main>
	);
}
