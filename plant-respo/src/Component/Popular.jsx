import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'





function Popular(){
    return(
      <>
      <section className=' bg-green-600 pt-5 '>
    

        <h1 className='text-center text-3xl text-orange-700 italic'>Your Choice Plant</h1>
        <p className='text-center mt-3 text-white '>Follow intruction for more</p>   

        <div className='flex justify-around  flex-wrap sm:flex-row  mt-24  space-y-28 '>
              <div className='bg-green-800 h-60 w-60  rounded-md relative  '>
            <img src="cart-1.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>

              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-2.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>

              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-3.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>

              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-4.png" alt="" className=' h-48 w-48 absolute -top-28 left-5 '/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>




            </div>  
            {/* second */}

         <div className='flex justify-around  flex-wrap sm:flex-row md:flex-row  space-y-28  sm:pt-0 pt-28 md:pt-20'>
              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-1.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>

              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-2.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>

              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-3.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>

              <div className='bg-green-800 h-60 w-60 rounded-md relative  '>
            <img src="cart-4.png" alt="" className=' h-48 w-48 absolute -top-28 left-5'/>

            <div className='pt-20 px-4 text-white'>
            <p className=' text-white italic'>Nephrolepis exatata</p>
            <h1 className=' text-white font-bold'>Boston Fern</h1>
            <img src="graph.png" alt="" className='h-16  ' />
            <div className='flex justify-between text-white'>
                <h1>$5</h1>
                <FontAwesomeIcon icon={faCartShopping} className='bg-yellow-400 text-white p-2  rounded'/>
            </div>
            </div>

        </div>




            </div>    
      
        
            

    
      </section>

    </>


    )
}
export default Popular

