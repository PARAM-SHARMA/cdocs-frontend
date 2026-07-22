"use client";

import {
	useState
} from "react";

import {
	useRouter
} from "next/navigation";

import {
	useCreateDocument
} from "../hooks/document";


export default function DocumentForm() {

	const router = useRouter();

	const createMutation =
		useCreateDocument();


	const [title, setTitle] =
		useState("");



	const handleSubmit =
		(e: React.FormEvent) => {

			e.preventDefault();


			createMutation.mutate(
				{
					title
				},
				{
					onSuccess: (data) => {

						/*
						  Later this will go to your CRDT editor
						*/

						router.push(
							`/documents/${data.document.id}`
						);
					}
				}
			);

		};



	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6"
		>

			<div>

				<label
					className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
				>
					Document Title
				</label>


				<input
					value={title}
					onChange={(e) =>
						setTitle(e.target.value)
					}
					type="text"
					placeholder="Untitled document"
					className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
				/>

			</div>


			<button
				type="submit"
				disabled={createMutation.isPending}
				className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
			>
				{
					createMutation.isPending
						? "Creating..."
						: "Create Document"
				}
			</button>


			{
				createMutation.isError && (
					<p className="text-sm text-red-500">
						Failed to create document
					</p>
				)
			}


		</form>
	);
}
