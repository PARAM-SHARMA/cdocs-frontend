"use client";

import Link from "next/link";
import { useState } from "react";
import { useLogin } from "../hooks/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const loginMutation = useLogin();
	const router = useRouter();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		loginMutation.mutate(form, {
			onSuccess: () => {
				router.push("/dashboard");
			}
		});
	};

	return (
		<main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 via-white to-zinc-100 px-6 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
			<div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">

				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
						Welcome back
					</h1>

					<p className="mt-2 text-zinc-600 dark:text-zinc-400">
						Sign in to continue to CDocs
					</p>
				</div>

				<form className="space-y-5" onSubmit={handleSubmit}>

					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Email
						</label>

						<input
							type="email"
							placeholder="you@example.com"
							value={form.email}
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
							className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
						/>
					</div>

					<div>
						<label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Password
						</label>

						<input
							type="password"
							placeholder="••••••••"
							value={form.password}
							onChange={(e) =>
								setForm({ ...form, password: e.target.value })
							}
							className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
						/>
					</div>

					<button
						type="submit"
						disabled={loginMutation.isPending}
						className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
					>
						{loginMutation.isPending ? "Logging in..." : "Login"}
					</button>
					{loginMutation.isError && (
						<p>Login failed</p>
					)}

				</form>

				<div className="mt-6 border-t border-zinc-200 pt-6 text-center dark:border-zinc-800">
					<p className="text-sm text-zinc-600 dark:text-zinc-400">
						Don't have an account?
						<Link
							href="/register"
							className="ml-1 font-medium text-blue-600 hover:text-blue-500 hover:underline"
						>
							Register
						</Link>
					</p>
				</div>

			</div>
		</main>
	);
}
