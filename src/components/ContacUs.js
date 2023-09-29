import React from 'react'
import {forwardRef} from 'react';
function ContacUs({text},ref) {
  return (
    <div> 
        <h2 ref={ref}>{text}</h2>
    </div>
  )
}

export default forwardRef(ContacUs);