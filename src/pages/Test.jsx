import React from 'react'
import Sidebar from '../components/common/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import TestProduct from '../components/products/TestProduct'
import Navbar from '../components/common/Navbar'
import PageHeader from '../components/common/PageHeader'
import Brochure from '../components/common/Brochure'
import CommonProducts from '../components/common/CommonProducts'
import Footer from '../components/common/Footer'

function Test() {
  return (
    <>
    <Box>
        <Navbar/>
        <PageHeader title={'BLADE LIFTERS & BLADE LIFTING SERVICES FOR WINDMILL'} />
         <Flex px={[4,8,24]} py={10}>
            <TestProduct/>
            <Sidebar/>
         </Flex>
         <Brochure/>
         <CommonProducts/>
         <Footer/>
    </Box>
    </>
  )
}

export default Test