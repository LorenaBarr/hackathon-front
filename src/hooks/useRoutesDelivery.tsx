import { useQuery } from "@tanstack/react-query";
import { routes } from "../services/api";

export const useRotesDelivery = () => {
  const fooResponse = useQuery({
    queryKey: ["routes"],
    queryFn: () => routes.getRoutes(),
  });

  console.log(fooResponse.error);

  return fooResponse;
};
