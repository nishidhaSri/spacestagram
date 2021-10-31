import React from 'react'
import styled from "styled-components"
import {useLocation,useHistory} from "react-router-dom"

function Details() {
  
  const query = new URLSearchParams(useLocation().search)
  const url = query.get('url')

  return (
    <div>
      <img src={url} alt={url} />
    </div>
  )
}

export default Details
