import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function DashboardPage() {
	const documents = [
		{
			id: 1,
			title: "Project Proposal",
			updated: "2 hours ago",
		},
		{
			id: 2,
			title: "Meeting Notes",
			updated: "Yesterday",
		},
		{
			id: 3,
			title: "Research Document",
			updated: "5 days ago",
		},
	];

	return (
		<main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

			{/* Header */}
			<header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80">
				<div className="flex h-16 items-center justify-between px-8">

					<h1 className="text-2xl font-bold tracking-tight">
						<span className="text-blue-600">C</span>Docs
					</h1>


					<div className="flex items-center gap-4">

						<input
							placeholder="Search documents..."
							className="w-72 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
						/>

						<ThemeToggle />

						<Link
							href="/documents/new"
							className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
						>
							+ New Document
						</Link>

					</div>

				</div>
			</header>


			<div className="flex">

				{/* Sidebar */}
				<aside className="min-h-[calc(100vh-64px)] w-64 border-r border-zinc-200 bg-white/70 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50">

					<nav className="space-y-2">

						<SidebarItem active>
							Documents
						</SidebarItem>

						<SidebarItem>
							Shared with me
						</SidebarItem>

						<SidebarItem>
							Starred
						</SidebarItem>

						<SidebarItem>
							Trash
						</SidebarItem>

					</nav>

				</aside>


				{/* Content */}
				<section className="flex-1 p-8">

					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
								Recent Documents
							</h2>

							<p className="mt-2 text-zinc-600 dark:text-zinc-400">
								Continue working on your latest files.
							</p>
						</div>
					</div>


					<div className="mt-8 grid gap-6 md:grid-cols-3">

						{documents.map((doc) => (
							<Link
								key={doc.id}
								href={`/documents/${doc.id}`}
							>
								<DocumentCard
									title={doc.title}
									updated={doc.updated}
								/>
							</Link>
						))}

					</div>

				</section>

			</div>

		</main>
	);
}


function SidebarItem({
	children,
	active = false,
}: {
	children: React.ReactNode;
	active?: boolean;
}) {
	return (
		<button
			className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${active
					? "bg-blue-500/10 text-blue-600"
					: "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
				}`}
		>
			{children}
		</button>
	);
}


function DocumentCard({
	title,
	updated,
}: {
	title: string;
	updated: string;
}) {
	return (
		<div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

			<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
				📄
			</div>

			<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
				{title}
			</h3>

			<p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
				Last edited {updated}
			</p>

		</div>
	);
}
