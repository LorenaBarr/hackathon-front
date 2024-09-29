import { useQuery } from "@tanstack/react-query";
import { deliveriesByUser } from "../services/api";

export const useDeliveryByUser = (userId = 1) => {
  const deliveriesResponse = useQuery({
    queryKey: ["deliveries", userId],
    queryFn: () => deliveriesByUser.getDeliveryByUser(userId),
  });

  console.log(deliveriesResponse.error);

  return deliveriesResponse;
};
