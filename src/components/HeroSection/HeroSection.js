import React,{useState} from 'react'

import Navbar from '../Navbar'
import {
    HeroContainer, 
    HeroContent,
    HeroItems,
    HeroBtn,
    HeroH1,
    HeroP
 } from './HeroElement'

 import Sidebar from '../Sidebar/Sidebar'

function HeroSection() {
const [isOpen, setIsOpen] = useState(false)
const toggle = ()=>{
    setIsOpen(!isOpen)
}
  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>
                    Greatest pizza ever 
                </HeroH1>
                <HeroP>
                    Ready in 60 seconds
                </HeroP>
                <HeroBtn>
                   Place order 
                </HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
