import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/common/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Sidebar from '../../components/common/Sidebar'
import Brochure from '../../components/common/Brochure'
import CommonProducts from '../../components/common/CommonProducts'
import Footer from '../../components/common/Footer'
import ElectricVacuumLifter from '../../components/products/ElectricVacuumLifter'
import { useParams } from 'react-router-dom'


const productItems = [
    { name: 'Vacuum Lifters', href: 'vacuum-lifters' },
    { name: 'Glass Vacuum Lifter', href: 'glass-vacuum-lifter' },
    { name: 'Industrial Vacuum Lifter', href: 'industrial-vacuum-lifter' },
    { name: 'Electric Vacuum Lifter', href: 'electric-vacuum-lifter' },
    { name: 'Mechanical Vacuum Lifter', href: 'mechanical-vacuum-lifter' },
    { name: 'Load Vacuum Lifter', href: 'load-vacuum-lifter' },
    { name: 'Slab Vacuum Lifter', href: 'slab-vacuum-lifter' },
    { name: 'Stone Vacuum Lifter', href: 'stone-vacuum-lifter' },
    { name: 'Electric Vacuum Glass Lifter', href: 'electric-vacuum-glass-lifter' },
    { name: 'Plate Vacuum Lifter', href: 'plate-vacuum-lifter' },
    { name: 'Pneumatic Vacuum Lifter', href: 'pneumatic-vacuum-lifter' },
    { name: 'Slab Lifter', href: 'slab-lifter' },
    { name: 'Billet Lifter', href: 'billet-lifter' },
    { name: 'Block Lifter', href: 'block-lifter' },
    { name: 'Drum Lifters', href: 'drum-lifters' },
    { name: 'Glass Lifter', href: 'glass-lifter' },
    { name: 'Metal Sheet Lifters', href: 'metal-sheet-lifters' },
    { name: 'Vacuum Block Lifter', href: 'vacuum-block-lifter' },
    { name: 'Server Lifter', href: 'server-lifter' },
    { name: 'Vacuum Clamp', href: 'vacuum-clamp' },
    { name: 'Scissor Clamp Lifter', href: 'scissor-clamp-lifter' },
    { name: 'Pipe / Bar Handling Clamp', href: 'pipe-bar-handling-clamp' },
    { name: 'Drum Handling Clamp', href: 'drum-handling-clamp' },
    { name: 'Fork Mounted Vacuum Lifting', href: 'fork-mounted-vacuum-lifting' },
    { name: 'Horizontal Lifting', href: 'horizontal-lifting' },
    { name: 'Pipe Lifting Equipment', href: 'pipe-lifting-equipment' },
    { name: 'Lifting Equipment', href: 'lifting-equipment' },
    { name: 'Fork Mounted Vacuum Lifting Attachment', href: 'fork-mounted-vacuum-lifting-attachment' },
    { name: 'Vacuum Table', href: 'vacuum-table' },
    { name: 'Metal Sheet / Wooden Board Storage Tower', href: 'metal-sheet-wooden-board-storage-tower' },
    { name: 'DE Palletizer', href: 'de-palletizer' },
    { name: 'Air Vacuum Generator', href: 'air-vacuum-generator' },
    { name: 'Marble Vacuum Lifter', href: 'marble-vacuum-lifter' },
    { name: 'Graphite Vacuum Lifter', href: 'graphite-vacuum-lifter' },
    { name: 'Wind Turbine Blade Vacuum Lifter', href: 'wind-turbine-blade-vacuum-lifter' },
    { name: 'Blade Lifters For Windmill', href: 'blade-lifters-for-windmill' },
    { name: 'Vacuum Lifting Solution', href: 'vacuum-lifting-solution' },
    { name: 'Vacuum Lifting Technologies for Wind Energy Industry', href: 'vacuum-lifting-technologies-for-wind-energy-industry' },
    { name: 'Vacuum Forklift Attachment', href: 'vacuum-forklift-attachment' },
    { name: 'Portable Vacuum Lifter Equipment', href: 'portable-vacuum-lifter-equipment' }
  ]; 


function ProductDetailsPage() {
    const { productSlug } = useParams();
    console.log(productSlug)

   const productItem = productItems.find(item => item.href === productSlug)
   console.log(productItem)

   if(!productItem) {
    return <Box>No Product Found</Box>
   }
   
  return (
    <>
        <Box>
            <Navbar/>
            <PageHeader title={productItem.name.toUpperCase()} />
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

export default ProductDetailsPage
