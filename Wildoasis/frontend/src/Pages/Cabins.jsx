import React, { useState } from 'react'
import Row from '../ui/Row'
import CabinTable from '../features/cabins/CabinTable';
import Heading from "../ui/Heading"
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';
import AddCabin from '../features/cabins/AddCabin';
function Cabins() {

  return (
    <>
 <Row type="horizontal">
  <Heading as="h1">All cabins</Heading>
  <p>Filter/sort</p>
 </Row>
 <Row >
  <CabinTable />
 <AddCabin /> 
 </Row>
 </>
  )
}

export default Cabins