import { useMutation } from "@tanstack/react-query";
import { createDocument } from "../lib/api";


export const useCreateDocument = () => {

	return useMutation({
		mutationFn: createDocument,
	});

};
