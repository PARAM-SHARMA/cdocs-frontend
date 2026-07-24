export type ClientMessage =
	| {
		type: "join";
		documentId: string;
	}
	| {
		type: "operations";
		documentId: string;
		operations: unknown[];
	};

export type ServerMessage =
	| {
		type: "document_state";
		document: unknown;
	}
	| {
		type: "init";
		document: unknown;
	}
	| {
		type: "operations";
		operations: unknown[];
	};
