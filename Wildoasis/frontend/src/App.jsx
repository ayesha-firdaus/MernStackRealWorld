import React from 'react'
import styled  from "styled-components"
import GlobalStyles from './styles/GlobalStyles'
import Heading from "./ui/Heading";
export default function App() {
  return (
    <>
    <GlobalStyles />
    <div>
    <Heading as="h1">hello</Heading>
   </div>
    </>
  )
}
