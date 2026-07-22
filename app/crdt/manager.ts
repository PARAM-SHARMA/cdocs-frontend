import { CRDTDocument } from "./document";
import { createInsert, createDelete } from "./operations";

export class CRDTManager {
	doc: CRDTDocument;

	lastCharId = "ROOT";

	charOrder: string[] = [];

	constructor() {
		this.doc = new CRDTDocument();
	}


	insertText(text: string) {
		const operations = [];

		for (const char of text) {
			const op = createInsert(
				this.lastCharId,
				char
			);

			this.doc.applyInsert(op);

			this.lastCharId = op.charId;

			this.charOrder.push(op.charId);

			operations.push(op);
		}

		return operations;
	}


	deleteLastChar() {
		const charId = this.charOrder.pop();

		if (!charId) {
			return null;
		}

		const op = createDelete(charId);

		this.doc.applyDelete(op);

		// Move cursor back
		const previousChar =
			this.charOrder[this.charOrder.length - 1];

		this.lastCharId = previousChar ?? "ROOT";

		return op;
	}
}
