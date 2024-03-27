import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCabin } from "../../services/apiCabins";

export function useDeleteCabin(){
    const queryClient=useQueryClient();
const {mutate:DeleteCabin,isLoading:isDeleting} = useMutation({
    mutationFn: (id) => apiCabin(`/api/cabin/deletecabin/${id}`, "DELETE"),
    // tell the query what do we want to as soon as we get success so we will try to invaidate the existing cache resuting to a refetch
    onSuccess:()=>{
    toast.success("Cabin deleted sucessfully")
      queryClient.invalidateQueries({
        queryKey:['cabins'],
      })
    },
    onError:err=>toast.error(err.message)
    
  });
  return {DeleteCabin,isDeleting};
}