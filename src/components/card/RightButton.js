import React from 'react'
import "./RightButton.css"
import {FaShoppingBag} from 'react-icons/fa'
import {AiOutlineCloseSquare}from 'react-icons/ai'
import {useState} from 'react'


function RightShop({right=false ,onChange}){
  return (
    <div className={`right-shop-box ${right && 'right-shop-box-true,'}`}>

           
           <div style={{display:'flex',alignItems:'center',marginBottom:20,justifyContent:'space-between',borderBottom:'1px solid lightgray',padding:'10px'}}>
            <div style={{color:'red',display:'flex',fontWeight:700}}>
          <FaShoppingBag style={{marginRight:10,fontSize:24}}/><span>1 wt</span>
           
           </div>
          <AiOutlineCloseSquare style={{cursor:'pointer',fontWeight:800,fontSize:20,color:'lightgray'}} onClick={onChange}/>
          </div>
    </div>
    
  )
  }
export default function RightButton(){
  const [right,setRight]=useState(false)

  const changeRight=()=>{
    setRight(!right)
  }

  return(<>
    <div className='right-buttom-box'onClick={changeRight}>
      <div style={{display:'flex',alignItems:'center',marginBottom:20}}>
        <FaShoppingBag style={{marginRight:10,fontSize:24}}/>
        <span>1 wt</span>
      </div>
      <button>4000 000 sum</button>
    </div>
    <RightShop right={right}onChange={changeRight}/>
  </>
  )
  }
