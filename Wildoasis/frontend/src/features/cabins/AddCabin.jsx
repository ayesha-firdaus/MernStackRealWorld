<<<<<<< HEAD
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import  { CreateCabinForm } from "../cabins/CreateCabinForm";
import React from 'react'
=======

import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
>>>>>>> e3d0c6d0d6c99bcce3df5f6159c9266f949ed21d

export default function AddCabin() {
  return (
    <div>
      <Modal>
<<<<<<< HEAD
        <Modal.Open opens="cabin-form"><Button>Add new Cabin</Button></Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
=======
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      
      </Modal>
    </div>
  );
>>>>>>> e3d0c6d0d6c99bcce3df5f6159c9266f949ed21d
}
