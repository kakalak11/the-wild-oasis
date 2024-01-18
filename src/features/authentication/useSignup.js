import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
    const navigate = useNavigate();

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: ({ email, password, fullName }) => signupApi({ email, password, fullName }),
        onSuccess: () => {
            toast.success('You have successfully signed up');
            navigate('/dashboard');
        },
        onError: () => {
            toast.error('Sign up was not success');
        }
    });

    return { signup, isLoading };
}