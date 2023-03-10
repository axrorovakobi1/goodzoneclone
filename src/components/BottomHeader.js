import React from 'react'
import "./BottomHeader.css"
import UIDropdown from 'react-multilevel-dropdown'
const data = [
    {
        id:1,
        name:"Chegirmalar",
        subminu:[]
    },
    {
        id:2,
        name:"Smartfon va gadjetlar",
        subminu:[
            {
                id:1,
                name:"telefon"
            },
            {
                id:2,
                name:"Smartfonlar"
            }
        ]
    },
    {
        id:3,
        name:"Televizor va audio",
        subminu:[
            {
                id:1,
                name:"Televizor",
                minu:[]
                
            },
            {
                id:2,
                name:"DVD player",
                minu:[]
            }
        ]
    },
    {
        id:4,
        name:"Oshxona jihozlari",
        subminu:[
            {
                id:1,
                name:"Kichik jihozlar",
                minu:[
                    {
                        id:1,
                        name:"Mekro tulqinli pech"
                    }
                ]
                
            },
            {
                id:2,
                name:"Katta ",
                minu:[
                    {
                        id:1,
                        name:"Mekro tulqinli pech"
                    }
                ]
            }
        ]
    },
    {
        id:5,
        name:"Go'zallik va Salomatlik",
        subminu:[
            {
                id:1,
                name:"Soch quritgich",
                minu:[]
                
            },
            {
                id:2,
                name:"Soch dazmoli",
                minu:[]
            },
            {
                id: 3,
                name: 'Elektro britva',
                minu:[]
            },
            {
                id: 4,
                name: 'Soch olish moslamasi',
                minu: []
            },
        ]
    },
    {
        id:6,
        name:"Televizor va audio",
        subminu:[
            {
                id:1,
                name:"Televizor",
                minu:[]
                
            },
            {
                id:2,
                name:"DVD player",
                minu:[]
            }
        ]
    },
    {
        id:7,
        name:"Kompyuter qurilmasi",
        subminu:[
            {
                id:1,
                name:"Monoblok",
                minu:[]
                
            },
            {
                id:2,
                name: 'Noutbuk',
                minu:[]
            },
            {
                id: 3,
                name: 'Kompyuter sichqonchasi',
                minu: []
            }
        ]
    },
    {
        id:8,
        name:"Televizor",
        subminu:[
            {
                id:1,
                name:"Televizor",
                minu:[]
                
            },
            {
                id:2,
                name:"DVD player",
                minu:[]
            }
        ]
    },
]
export default function BottomHeader() {
  return (
    <div className='bottom-header-nav'>
        <button className='btn1'>Aksiyalar</button>
        <div>
            {data.map(item=>{
                return (
                   <>
                   {item.subminu.length==0?<UIDropdown className="btn"  title={<span>{item.name}</span>} buttonVariant='tertiary'></UIDropdown>
                   : <UIDropdown  className="btn" title={<span>{item.name}</span>} buttonVariant='tertiary' openOnHover={true}  >
                    {item.subminu.map(it=>{
                        return <UIDropdown.Item className='btn-items'>
                            {it.name}
                            {it.minu?.map(i=>{
                                return (
                                    <UIDropdown.Submenu position='right' style={{marginLeft:5}}>
                                    <UIDropdown.Item >
                                      {i.name}
                                    </UIDropdown.Item>
                                </UIDropdown.Submenu>
                                )
                            })}
                            
                           
                        </UIDropdown.Item>
                    })}
                    </UIDropdown>}
                    
                  
                   </>
                    
                )
            })}
          
        </div>
    </div>
  )
}
