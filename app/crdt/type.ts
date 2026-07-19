export type InsertOperation = {
	type: "insert";

	opId: string;

	clientId: string;

	seq: number;

	charId: string;

	left: string;

	value: string;
};

export type DeleteOperation = {
	type: "delete";

	opId: string;

	clientId: string;

	seq: number;

	charId: string;
};

export type Operation =
	| InsertOperation
	| DeleteOperation;

export interface CharNode {
	id: string;
	value: string;

	left: string;

	deleted: boolean;

	createdBy: string;
	seq: number;
}
