import { clientId, nextSequence } from "./client";
import { InsertOperation } from "./type";

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
