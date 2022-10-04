import React from 'react'
import { ProductsHeading, ProductsWrapper } from '../Products/ProductsElement'
import 
{
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductsCard,
    ProductsImg,
    ProductsInfo,
    ProductsTitle,
    ProductsDesc,
    ProductsPrice,
    ProductsButton
}
from './ProductElements2'



function products({heading, data}){
    return (
        <ProductsContainer>
            <ProductsHeading>
         {heading}
      </ProductsHeading>
            <ProductsWrapper>
                {data.map((index, Products) =>{
                    return(
                        <ProductsCard key={index}>
                           <ProductsImg>
                               src={Products.img}
                               alt={Products.alt}
                           </ProductsImg>

                           <ProductsInfo>
                               <ProductsTitle>
                                   {Products.name}
                               </ProductsTitle>
                               <ProductsDesc>
                                   {Products.desc}
                               </ProductsDesc>
                               <ProductsPrice>
                                   {Products.price}
                               </ProductsPrice>
                               <ProductsButton>
                                   {Products.button}
                               </ProductsButton>
                           </ProductsInfo>
                        </ProductsCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}