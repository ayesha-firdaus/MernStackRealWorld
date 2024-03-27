import React, { useState } from 'react'
import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';


export default function AddCabin() {
   
  return (
    <Modal  >
        <Modal.close />
        <Modal.open />
{/*     
    <Button onClick={()=>setisOpenModal(prev=>!prev)}>Add new Cabin</Button>
    {isOpenModal&&<Modal onClose={setisOpenModal} ><CreateCabinForm onClose={setisOpenModal} /></Modal>} */}
   </Modal>
  )
}
