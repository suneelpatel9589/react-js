import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'





function About(){
    return(
      <section className=' bg-green-600 p-2'>
    

        <h1 style={{textAlign:"center" ,fontFamily:"Bad Script" ,fontSize:"30px",marginTop:"35px",color:"orange",fontWeight:"bold"}}>Your Choice Plant</h1>
        <p className='text-center mt-3'>Follow intruction for more</p>   

        <div className='flex justify-around items-center bg-green-600 mt-30 p-10 gap-30'>
              <div className='bg-green-800 h-62 w-60 rounded-md'>
            <img src="cart-1.png" alt="" className='relative -translate-y-[105px]  h-48  ml-6'/>
            <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Nephrolepis exatata</p>
            <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
            <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
            </div>

        </div>




          <div className='bg-green-800 h-62 w-60 rounded-md'>
            <img src="cart-2.png" alt="" className='relative -translate-y-[100px]  h-45  ml-6'/>
            <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Ficus elastica</p>
            <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Rubber Plant</h1>
            <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
            <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
            </div>

        </div>

          <div className='bg-green-800 h-62 w-60 rounded-md'>
            <img src="cart-3.png" alt="" className='relative -translate-y-[100px]  h-45  ml-6'/>
            <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Spathiphyllum wallisii</p>
            <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Peach Lily</h1>
            <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
            <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
            </div>

        </div>

           <div className='bg-green-800 h-62 w-60 rounded-md'>
            <img src="cart-4.png" alt="" className='relative -translate-y-[100px]  h-45  ml-6'/>
            <p className='ml-6 position-relative -translate-y-[90px] text-white italic'>Adenium obesum</p>
            <h1 className='ml-6 position-relative -translate-y-[90px] text-white font-bold'>Desert Rose</h1>
            <img src="graph.png" alt="" className='h-15 ml-6 position-relative -translate-y-[90px] ' />
            <div className='flex gap-30 items-center position-relative -translate-y-[100px] ml-3 text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-[25px] text-white p-2  rounded'/>
            </div>

        </div>
            </div>     
      
        
            

    
      </section>
    )
}
export default About

