import { useMutation } from "@tanstack/react-query";
import { cancelDelivery } from "../services/api";

export const useCancelDelivery = () => {
  return useMutation({
    mutationFn: cancelDelivery,
  });
};
