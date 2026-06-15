import React, {  useLayoutEffect, useRef } from 'react'
import { useTransition } from '../../context/TransitionContext'


const PageWrapper = ({children}) => {
    const {registerPageWrapper} = useTransition()
    const wrapperRef = useRef(null)

    useLayoutEffect(()=>{
        registerPageWrapper(wrapperRef.current)
        return()=>registerPageWrapper(null)
    },[registerPageWrapper])

  return (
    <div
    ref={wrapperRef}
    style={{willChange:"transform", minHeight:"100vh", width:"100%"}}
    >
        {children}
    </div>
  )
}

export default PageWrapper