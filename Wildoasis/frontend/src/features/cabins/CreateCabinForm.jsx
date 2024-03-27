import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import {useForm} from "react-hook-form"

import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";


export function CreateCabinForm({cabinToEdit={},onClose}) {

  const {_id:editId,...editValue}=cabinToEdit;
  const isEditSession=Boolean(editId)
 
    const {register,handleSubmit,reset,getValues,formState}=useForm({
  defaultValues:isEditSession?editValue:{},
    });
    const {errors}=formState

    const {createCabin,isCreating}=useCreateCabin()
    const {editCabin,isEditing}=useEditCabin()
    function onSubmit(data) {
      const imageFile = data.image && data.image[0]; // Accessing the first image file, if it exists
  
      if (imageFile && imageFile instanceof Blob) {
          // If it's a new image file
          const reader = new FileReader();
          reader.onload = function(event) {
              const imageUrl = event.target.result;
  
              const img = new Image();
              img.onload = function() {
                  // Create a canvas element
                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');
  
                  // Set canvas dimensions to desired size
                  const maxWidth = 800; // Max width for the compressed image
                  const maxHeight = 600; // Max height for the compressed image
                  let width = img.width;
                  let height = img.height;
  
                  // Calculate new dimensions while maintaining aspect ratio
                  if (width > height) {
                      if (width > maxWidth) {
                          height *= maxWidth / width;
                          width = maxWidth;
                      }
                  } else {
                      if (height > maxHeight) {
                          width *= maxHeight / height;
                          height = maxHeight;
                      }
                  }
  
                  // Set canvas dimensions
                  canvas.width = width;
                  canvas.height = height;
  
                  // Draw the image onto the canvas
                  ctx.drawImage(img, 0, 0, width, height);
  
                  // Convert the canvas content to a data URL
                  const compressedImageUrl = canvas.toDataURL('image/jpeg', 0.5); // Adjust compression quality here
  
                  // Include the compressed image URL in the form data
                  const newData = { ...data, image: compressedImageUrl };
          
                  // Submit the form data with the compressed image
                  if(isEditSession) {
                      editCabin({ newData, id: editId },{onSuccess:(data)=>{reset()}});
                  } else {
                      createCabin(newData,{onSuccess:(data)=>{
                        onClose((prev)=>!prev),
                        reset()}});
                  }
              };
  
              img.src = imageUrl;
          };
  
          // Read the image file as a data URL
          reader.readAsDataURL(imageFile);
      } else {
          let newData=data
          
          // If there's no new image file or the imageFile is not a Blob, submit the form data directly
          if(isEditSession) {
              editCabin({ newData, id: editId },{onSuccess:(data)=>{
             onClose?.((prev)=>!prev),
                reset()}}); // Submit without changing the existing image for edit session
          } else {
              createCabin(data,{onSuccess:(data)=>{reset()}}); // Submit without an image for create session
          }
      }
      
  }
  
  
  
  
  // EditForm

  
function onError(errors)
{
   console.log(errors)
}
  return (

    <Form onSubmit={handleSubmit(onSubmit,onError)} type={onClose? 'modal':'regular'}> 
      <FormRow label="Cabin Name" error={errors?.name?.message} >
   
        <Input disabled={isEditSession?isEditing:isCreating} type="text" id="name" {...register('name',{
            required:"Cabin Name is required",
    
        })}  />
     
      </FormRow>

      <FormRow label={"Maximun Capacity"}  error={errors?.maxCapacity?.message} >
        
        <Input disabled={isEditSession?isEditing:isCreating}  type="number" id="maxCapacity" {...register('maxCapacity',{
            required:"Maximun Capacity is required",
            min:{
                value:1,
                message:"capacity should be atleat 1"
            }
    
        })} />
      </FormRow>

      <FormRow label={"Regular Price"}  error={errors?.regularPrice?.message}> 
       
        <Input disabled={isEditSession?isEditing:isCreating}  type="number" id="regularPrice" {...register('regularPrice',{
            required:"Regular Price is required",
            min:{
                value:1,
                message:"regular price should be positive"
            },
            
    
        })}   />
      </FormRow>

      <FormRow label={"Discount"} error={errors?.discount?.message}>
        
        <Input disabled={isEditSession?isEditing:isCreating} type="number" id="discount" defaultValue={0} {
          ...register("discount",{
            required:"Discount is required",
            validate:(value)=>(+value)<(+getValues().regularPrice)||
            "Discount should be lesser than Price"
          })
        }  />
      </FormRow>


      <FormRow label={"Description for website"}  error={errors?.description?.message}>
       
        <Textarea disabled={isEditSession?isEditing:isCreating}  type="number" id="description" {...register('description',{
            required:"Description is required",
    
        })} 

        />
      </FormRow>

      <FormRow label={"Cabin photo"}  >

        <FileInput id="image" accept="image/*" type="file" {...register("image",{
          required:isEditSession? false:"Image is required"
        })}
        />
      </FormRow>
      <FormRow>
      <div>
        {/* type is an HTML attribute! */}
        <Button  variation="secondary" type="reset" onClick={()=>onClose?.((prev)=>!prev)}>
          Cancel
        </Button>
        <Button   disabled={isCreating} >{isEditSession?"Edit Cabin":"Create New cabin"}</Button>
        </div>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
