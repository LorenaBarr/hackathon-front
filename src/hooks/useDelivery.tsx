import { useMutation } from "@tanstack/react-query";
import { postDelivery } from "../services/api";

export const useDelivery = () => {
  const mutation = useMutation({
    mutationFn: postDelivery,
  });

  return mutation;
};
