let sequence = 0;

export const clientId = crypto.randomUUID();

export function nextSequence() {
	sequence++;
	return sequence;
}
