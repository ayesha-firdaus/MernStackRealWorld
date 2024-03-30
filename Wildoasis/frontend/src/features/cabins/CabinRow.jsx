import styled from "styled-components";
import { formatCurrency } from "../../utils/Helper";
import Table from "../../ui/Table";
import React from "react";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Menus from "../../ui/Menus";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  &:not(:last-child) {
    border: 1px solid var(--color-grey-100);
  }
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {

  const { DeleteCabin, isDeleting } = useDeleteCabin();
  const {
    _id: id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  const { isCreating, createCabin } = useCreateCabin();

  // mutate is call back functiom

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (

      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
      
          <Modal>
          <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List id={id}>
                <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>Duplicate</Menus.Button>
                <Modal.Open opens="edit-form">
       
       <Menus.Button icon={ <HiPencil />}>Edit</Menus.Button>
     </Modal.Open>
     <Modal.Open opens="delete-cabin">
     <Menus.Button icon={ <HiTrash />}>Delete</Menus.Button>
         </Modal.Open>
                
              </Menus.List>
            
       
          <Modal.Window name="edit-form">
          <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        
          <Modal.Window name="delete-cabin">
            <ConfirmDelete resourceName={name} onConfirm={()=>DeleteCabin(id)} disabled={isDeleting}/>
          </Modal.Window>
          </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>

 
  );
}

export default CabinRow;
