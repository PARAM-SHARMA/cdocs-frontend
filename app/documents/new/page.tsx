import Link from "next/link";

import ThemeToggle from "../../components/ThemeToggle";
import DocumentForm from "../../components/DocumentForm";


export default function NewDocumentPage() {

	return (
		<main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 px-6 py-12 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">


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
							Give your document a title to get started.
						</p>

					</div>


					<DocumentForm />


				</div>


			</div>


		</main>
	);
}
