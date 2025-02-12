import {Link } from "react-router-dom";

function HomePage() {

  const categoriesList = [
    { href: "/jeans", imageUrl: '/jeans.jpg', name:"Jeans"  },
    { href: "/t-shirt", imageUrl: '/t-shirt.jpg', name:"T-Shirt"  },
    { href: "/phone-case", imageUrl: '/phone-case.jpg', name:"Phone Case"  },
    { href: "/shoes", imageUrl: '/shoes.jpg', name:"Shoes"  },
    { href: "/shirt", imageUrl: '/shirt.jpg', name:"T-Shirt"  },
]

    return (
      <>
      <div className="text-center mt-28">
        <h1 className='text-[#2CAC5B] font-bold text-4xl'>Explore Our Categories</h1>
        <p className="text-zinc-300">Discover the latest trends in eco-friendly fashion</p>
        <div className="text-center">
          {categoriesList.map((item, index)=>(
           <>
           <img src={item.imageUrl} alt="" width={250}  className="rounded-2xl "/>
          <h2>{item.name}</h2>
          <p>Explore {item.name}</p>
           </>
          ))}
          
        </div>
        </div>
        
      </>
    )
  }
  
  export default HomePage;
  