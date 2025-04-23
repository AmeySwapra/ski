import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/common/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Sidebar from '../../components/common/Sidebar'
import Brochure from '../../components/common/Brochure'
import CommonProducts from '../../components/common/CommonProducts'
import Footer from '../../components/common/Footer'
import ElectricVacuumLifter from '../../components/products/ElectricVacuumLifter'



function ElectricVacuumLifterPage() {
  return (
    <>
        <Box>
            <Navbar/>
            <PageHeader title={'ELECTRIC VACUUM LIFTER'} />
             <Flex px={[4,8,24]} py={10}>
                <ElectricVacuumLifter/>
                <Sidebar/>
             </Flex>
             <Brochure/>
             <CommonProducts/>
             <Footer/>
        </Box>
        </>
  )
}

export default ElectricVacuumLifterPage
