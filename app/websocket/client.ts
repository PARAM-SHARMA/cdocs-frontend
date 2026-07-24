import {
	ClientMessage,
	ServerMessage,
} from "./protocol";

export class SocketClient {
	private socket: WebSocket | null = null;

	connect(
		url: string,
		onOpen: () => void,
		onMessage: (message: ServerMessage) => void
	) {
		this.socket = new WebSocket(url);

		this.socket.onopen = () => {
			console.log("Connected");
			onOpen();
		};

		this.socket.onmessage = (event) => {
			onMessage(JSON.parse(event.data));
		};

		this.socket.onclose = () => {
			console.log("Disconnected");
		};

		this.socket.onerror = (err) => {
			console.error(err);
		};
	}

	send(message: ClientMessage) {
		if (this.socket?.readyState === WebSocket.OPEN) {
			this.socket.send(JSON.stringify(message));
		}
	}

	close() {
		this.socket?.close();
	}
}
