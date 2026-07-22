import { api } from "./axios";

export interface LoginData {
	email: string;
	password: string;
}

export interface RegisterData {
	name: string;
	email: string;
	password: string;
}

export interface CreateDocumentData {
	title?: string;
}

export const login = async (data: LoginData) => {
	const response = await api.post("/login", data);
	return response.data;
};

export const register = async (data: RegisterData) => {
	const response = await api.post("/register", data);
	return response.data;
};

export const createDocument = async (
	data: CreateDocumentData
) => {

	const response =
		await api.post(
			"/documents",
			data
		);


	return response.data;
};
