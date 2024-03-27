import { useQuery } from "@tanstack/react-query";
import { apiCabin } from "../../services/apiCabins";

export default function useCabins(){
const {isLoading,data:cabins,error}=useQuery({
    queryKey:['cabins'],
    queryFn: ()=>apiCabin(`/api/cabin/getcabins`, "GET"),
  
  })
  return {isLoading,cabins};
}

