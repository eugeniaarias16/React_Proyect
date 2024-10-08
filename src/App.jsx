import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsList/ItemList';

const App=()=> {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos"/>
    </ChakraProvider>
  )
}

export default App;
