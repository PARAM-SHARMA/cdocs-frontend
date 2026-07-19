import {
	CharNode,
	InsertOperation,
	DeleteOperation,
} from "./type";

export class CRDTDocument {
	chars = new Map<string, CharNode>();

	constructor() {
		this.chars.set("ROOT", {
			id: "ROOT",
			value: "",
			left: "",
			deleted: false,
			createdBy: "",
			seq: 0,
		});
	}

	applyInsert(op: InsertOperation) {
		this.chars.set(op.charId, {
			id: op.charId,
			value: op.value,
			left: op.left,
			deleted: false,
			createdBy: op.clientId,
			seq: op.seq,
		});
	}

	applyDelete(op: DeleteOperation) {
		const node = this.chars.get(op.charId);

		if (node) {
			node.deleted = true;
		}
	}

	toText(): string {
		let result = "";

		let current = "ROOT";

		while (true) {
			const next = [...this.chars.values()]
				.find(char => char.left === current && !char.deleted);

			if (!next) break;

			result += next.value;
			current = next.id;
		}

		return result;
	}
}
