import { clientId, nextSequence } from "./client";
import { InsertOperation, DeleteOperation } from "./type";

export function createInsert(
	left: string,
	value: string
): InsertOperation {
	const seq = nextSequence();

	return {
		type: "insert",
		opId: crypto.randomUUID(),
		charId: `${clientId}:${seq}`,
		left,
		value,
		clientId,
		seq,
	};
}

export function createDelete(
	charId: string
): DeleteOperation {

	const seq = nextSequence();

	return {
		type: "delete",
		opId: crypto.randomUUID(),
		clientId,
		seq,
		charId,
	};
}
