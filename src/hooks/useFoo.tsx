import { useQuery } from "@tanstack/react-query";
import { foo } from "../services/api";

export const useFoo = () => {
  const fooResponse = useQuery({
    queryKey: ["foo"],
    queryFn: () => foo.getFoo(),
  });

  console.log(fooResponse.error);

  return fooResponse;
};

// Debes crear un hook para cada consumo que vayamos a realizar. Este es para hacer get :*
