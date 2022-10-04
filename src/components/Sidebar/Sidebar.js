import React from 'react'
import{
    SidebarContainer, 
    CloseIcon,
    Icon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute, 
    SideBtnWrap
} from './sidebarElement'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>
            Pizzas 
        </SidebarLink>
        <SidebarLink to='/Desserts'>
            Desserts
        </SidebarLink>
        <SidebarLink to='/'>
            Full Menu 
        </SidebarLink>  
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>
            Order Now
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
