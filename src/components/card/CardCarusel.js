import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import './CardCarusel.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let data = [
    {
        id:1,
        name:"Planshet",
        price:"2000 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
    {
        id:2,
        name:"Televizor",
        price:"34540 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
    {
        id:3,
        name:"Iphone 14",
        price:"65657 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
    {
        id:4,
        name:"Samsung galaxy 22",
        price:"5678 som",
        img:"https://cdn.goodzone.uz/goodzone/8f3890e9-a0de-4ff0-878d-ac9b978d46cd"
    },
]
const data2 = [
  {
  id:1,
   img:"https://cdn.goodzone.uz/goodzone/f249f0aa-1c3a-4cb0-acb6-304a3af9eb83"
  },
  {
    id:2,
    img:"https://cdn.goodzone.uz/goodzone/6473a94b-88ea-46b6-80ce-d6ed06fc5195"
  },
  {
    id:3,
    img:"https://cdn.goodzone.uz/goodzone/6a323497-906e-497f-8617-7cc5a50b82f5"
  },
  {
    id:4,
    img:"https://cdn.goodzone.uz/goodzone/06dc3dc6-b991-4456-885e-b3a22372d47e"
  },
  {
    id:5,
    img:"https://cdn.goodzone.uz/goodzone/1198572e-6ddb-40b8-9c31-8a7dca6ae2a3"
  },

]
function CardImage({img}){
  
  return( 
    <>
      <img src={img} width={240} height={90} style={{margin:20, borderRadius:10}} alt="" />
    </>
  )
}


function CardCarusel(){
    return(
      <>
        <div className="card-carusel-goodzone">
    <Carousel responsive={responsive}>
        {data.map(item=>{
            return (
                <Card name={item.name} img={item.img} price={item.price}/>
            )
        })}
            
            
        </Carousel>;
        </div>
        <div>
          {data2.map(item=>{
            return <CardImage img={item.img}/>

          }
          )
          }
       


        </div>
        </>
    )
}

export default CardCarusel