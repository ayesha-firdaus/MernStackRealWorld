import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import  { CreateCabinForm } from "../cabins/CreateCabinForm";
import React from 'react'

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form"><Button>Add new Cabin</Button></Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}
