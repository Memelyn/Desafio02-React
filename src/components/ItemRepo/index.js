import React from 'react'
import {ItemContainer} from './styles'

 function ItemRepo() {
  return (
    <ItemContainer>
      <h3>{reportError.id}</h3>
      <p> dio/pablo</p>
      <a href='#' className='remover'>Remover</a>
      <a href='#' className='remover'>Ver repositório</a>
      <hr/>
    </ItemContainer>
  )
}
export default ItemRepo

{/* <h3>{repo.name}</h3>
      <p> {repo.full_name}</p>
      <a href={repo.html_url} target='_blank'>Ver repositório</a><br/>
      <a href='#' rel="noreferrer" className='remover'>Remover</a>
      <hr/> */}