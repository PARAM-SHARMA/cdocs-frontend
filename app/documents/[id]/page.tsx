"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ThemeToggle from "../../components/ThemeToggle";
import { useEffect, useRef } from "react";
import { CRDTManager } from "@/app/crdt/manager";
import { useParams } from "next/navigation";
import { useDocumentSocket } from "../../hooks/useDocumentSocket";

export default function DocumentEditorPage() {
	const crdtRef = useRef<CRDTManager | null>(null);
	const param = useParams();
	const documentId = param.id as string;


	const { socket, message } =
		useDocumentSocket(documentId);


	if (!crdtRef.current) {
		crdtRef.current = new CRDTManager();
	}
	console.log('page', message);


	const editor = useEditor({
		extensions: [StarterKit],
		editorProps: {
			attributes: {
				class:
					"prose prose-zinc dark:prose-invert max-w-none min-h-[600px] outline-none",
			},
		},
	});


	useEffect(() => {
		console.log({
			editorReady: !!editor,
			message,
		});

		if (!editor || !message) return;


		if (message.type === "init") {
			console.log("setting content");
			editor.commands.setContent(message.document);
		}

		if (message.type === "document_state") {
			console.log("setting content");
			editor.commands.setContent(message.document);
		}
	}, [editor, message]);

	useEffect(() => {

		if (!editor) return;

		const handler = ({ transaction }: any) => {

			if (!transaction.docChanged) {
				return;
			}


			transaction.steps.forEach((step: any) => {

				if (
					step.slice &&
					step.slice.content.size > 0
				) {

					const insertedText =
						step.slice.content.textBetween(
							0,
							step.slice.content.size
						);

					if (insertedText) {

						const operations =
							crdtRef.current?.insertText(
								insertedText
							);

						console.log(
							"Insert operations:",
							operations
						);
					}
				} else {
					const operation =
						crdtRef.current?.deleteLastChar();

					console.log(
						"Delete operation:",
						operation
					);
				}
			});

			console.log(
				"CRDT state:",
				crdtRef.current?.doc.chars
			);

			console.log(
				"CRDT text:",
				crdtRef.current?.doc.toText()
			);
		};


		editor.on(
			"transaction",
			handler
		);


		return () => {

			editor.off(
				"transaction",
				handler
			);

		};

	}, [editor]);



	if (!editor) {
		return null;
	}


	return (
		<main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

			{/* Header */}
			<header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80">
				<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

					<input
						defaultValue="Untitled Document"
						className="bg-transparent text-2xl font-semibold text-zinc-900 outline-none dark:text-white"
					/>

					<div className="flex items-center gap-3">
						<ThemeToggle />

						<button className="rounded-xl border border-zinc-300 px-4 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
							Share
						</button>

						<button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30">
							Save
						</button>
					</div>

				</div>
			</header>

			{/* Toolbar */}
			<div className="sticky top-16 z-40 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
				<div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-3">

					<ToolbarButton
						active={editor.isActive("bold")}
						onClick={() => editor.chain().focus().toggleBold().run()}
					>
						B
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive("italic")}
						onClick={() => editor.chain().focus().toggleItalic().run()}
					>
						I
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive("heading", { level: 2 })}
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
						}
					>
						H2
					</ToolbarButton>

					<ToolbarButton
						active={editor.isActive("bulletList")}
						onClick={() =>
							editor.chain().focus().toggleBulletList().run()
						}
					>
						• List
					</ToolbarButton>

				</div>
			</div>

			{/* Document */}
			<div className="mx-auto max-w-5xl px-6 py-10">

				<div className="rounded-2xl border border-zinc-200 bg-white p-10 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

					<EditorContent editor={editor} />

				</div>

			</div>

		</main>
	);
}

function ToolbarButton({
	children,
	active,
	onClick,
}: {
	children: React.ReactNode;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${active
				? "border-blue-600 bg-blue-600 text-white"
				: "border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
				}`}
		>
			{children}
		</button>
	);
}
