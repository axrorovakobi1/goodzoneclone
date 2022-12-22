import React from 'react'

import {BiConversation}from 'react-icons/bi'
import {AiTwotonePhone} from  'react-icons/ai'
import {FiFacebook}from 'react-icons/fi'
import {FiInstagram}from 'react-icons/fi'
import {FaTelegramPlane}from 'react-icons/fa'
import {FaYoutube}from 'react-icons/fa'
import './Footer.css'

export default function Footer(){
    return(
       <div className='2'>
          <div className='container'>
         <div className='card1'>
           <h4>Savollaringiz bo'lsa! Qo'ng'iroq qiling</h4>
            <br/>
             <h5><AiTwotonePhone/>+99893320376</h5>
              <br/>
             <h5 className='border'><BiConversation/>Info@goodzone.uz</h5>
           <span className='icon'><FiFacebook/><FiInstagram/><FaTelegramPlane/><FaYoutube/></span>
           </div>
   <div className='icon1'>  
            <h4>Kompaniya<br/>Kompaniya haqida<br/></h4>
            <br/>
            <h4>Do'kon haqida</h4>
            <h4>Vakaansiyalar</h4>

      </div>
      <div className='card2'>
        <h4>Xaridorga yordam</h4>
        <br/>
        <h4>savol va javob </h4>
        <h4>Saytda qandaybuyurtma brish kerak</h4>
          <h4>Tovarlar almashtirish qaytarish va tariflash</h4>

      </div>
       
       <div className='pastki'>
          <img src="https://goodzone.uz/icons/payme.png"alt=""/>     
          <img src="https://goodzone.uz/icons/click.png"alt=""/>   
          <img src="https://goodzone.uz/icons/uzcard.png"alt=""/>   
          <img src="https://goodzone.uz/icons/apelsin.png"alt=""/>   
          <img src="https://goodzone.uz/icons/paybox.svg"alt=""/>   
          <img src="https://goodzone.uz/icons/visa.svg"alt=""/>   
          <img src="https://goodzone.uz/icons/visa.svg"alt=""/>   
          <img src="https://goodzone.uz/icons/mastercard.svg"alt=""/>   
          <img src="https://goodzone.uz/icons/payze.svg"alt=""/>         
         <span className='left'>
          <img src="https://goodzone.uz/icons/VIDJET.svg"alt=""/>   
          <img src="https://goodzone.uz/icons/alif-nasiya-logo-b.svg"alt=""/>   
          <img src="https://goodzone.uz/images/payment_logo/zoodpay.png"alt=""/>   
         </span>
        </div>
        </div>
       </div>
    )
}