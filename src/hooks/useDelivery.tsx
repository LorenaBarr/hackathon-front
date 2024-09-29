import { useMutation } from "@tanstack/react-query";
import { postDelivery } from "../services/api";

export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: postDelivery,
  });

  return mutation;
};
