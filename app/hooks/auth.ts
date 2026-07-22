import { useMutation } from "@tanstack/react-query";
import { login, register } from "../lib/api";

export const useLogin = () => {
	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			localStorage.setItem("token", data.token);
		},
	});
};

export const useRegister = () => {
	return useMutation({
		mutationFn: register,
	});
};
