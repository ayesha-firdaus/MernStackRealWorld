import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCabin } from "../../services/apiCabins";

export function useCreateCabin(){
    const queryClient=useQueryClient();
    const {mutate:createCabin,isLoading:isCreating}=useMutation({
        mutationFn:(data)=>apiCabin("/api/cabin/createcabin","POST",data),
        onSuccess:()=>{
            toast.success("New Cabin sucessfully created");
          queryClient.invalidateQueries({queryKey:['cabins']});
         
        },
        onError:(err)=>{
            toast.err(err.message);
        }
    })
  return {createCabin,isCreating};
}