
  import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCabin } from "../../services/apiCabins";

export function useEditCabin(){
    const queryClient=useQueryClient();
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: (data) => {
          // Destructure newData and id from the data parameter
          const { newData, id } = data;
         
          return apiCabin(`/api/cabin/updatecabin/${id}`, "PATCH", newData);
        },
        onSuccess: () => {
          toast.success("Cabin successfully edited");
          queryClient.invalidateQueries({ queryKey: ['cabins'] });
         
        },
        onError: (err) => {
          toast.err(err.message);
        },
      });
      return {editCabin,isEditing}
}