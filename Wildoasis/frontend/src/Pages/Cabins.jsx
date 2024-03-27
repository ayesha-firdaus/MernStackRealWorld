import React, { useState } from 'react'
import Row from '../ui/Row'
import CabinTable from '../features/cabins/CabinTable';
import Heading from "../ui/Heading"
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';
function Cabins() {
  const [isShowForm,setSetForm]=useState(false);
  return (
    <>
 <Row type="horizontal">
  <Heading as="h1">All cabins</Heading>
  <p>Filter/sort</p>
 </Row>
 <Row >
  <CabinTable />
  <Button onClick={()=>setSetForm(prev=>!prev)}>Add new Cabin</Button>
  {isShowForm&&<CreateCabinForm />}
 </Row>
 </>
  )
}

export default Cabins