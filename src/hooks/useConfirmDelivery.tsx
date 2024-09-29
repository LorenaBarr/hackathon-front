import { useMutation } from "@tanstack/react-query";
import { confirmDelivery } from "../services/api";

export const useConfirmDelivery = () => {
  return useMutation({
    mutationFn: confirmDelivery,
  });
};
