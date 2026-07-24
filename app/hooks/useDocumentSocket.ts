import { useEffect, useRef, useState } from "react";
import { SocketClient } from "../websocket/client";
import { ServerMessage } from "../websocket/protocol";

export function useDocumentSocket(documentId: string) {
	const socketRef = useRef<SocketClient>();

	const [message, setMessage] =
		useState<ServerMessage | null>(null);

	if (!socketRef.current) {
		socketRef.current = new SocketClient();
	}

	useEffect(() => {
		const socket = socketRef.current!;

		socket.connect(
			"ws://localhost:4000/ws",

			() => {
				socket.send({
					type: "join",
					documentId,
				});
			},

			(msg) => {
				setMessage(msg);
			}
		);

		return () => socket.close();
	}, [documentId]);

	return {
		socket: socketRef.current,
		message,
	};
}
