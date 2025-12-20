import { faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Home(){
    return(
        <>
        <section className="sm:flex justify-around sm:items-center bg-green-700 lg:h-screen sm:h-auto md:h-auto  pt-3 sm:pt-0  ">
         <div>
        <h1 className="text-white text-4xl  ml-3 sm:ml-0 md:ml-3 "><span className="text-orange-500">Plants</span> make a <br />positive <span className="text-orange-500">impact </span>on <br />your environment</h1>
            <p className="text-white mt-3 text-lg ml-3 sm:ml-0 md:ml-3  ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Officiis, vel. Nesciunt illum</p>  
             <p className="text-white text-lg ml-3  sm:ml-0 md:ml-3 ">aspernatur amet maiores. Nemo animi nobis reprehenderit illo dignissimos ab,   </p>
             <p className="text-white text-lg ml-3 sm:ml-0 md:ml-3 ">cupiditate distinctio temporibus quae porro cum repellendus eaque.</p>
        <div className="space-x-20 mt-3 sm:ml-0 ml-3 md:ml-3 ">   
            <button className=" px-2 bg-amber-400 text-white font-bold rounded-sm hover:bg-red-500">Shop Now</button>
            <button className="border-2 border-orange-600 px-2 text-white rounded-sm hover:bg-red-500">know More</button>
        </div>
            <p className="text-white mt-3 ml-3 sm:ml-0 md:ml-3 ">yes will get days free trial</p>

         <div className="flex  items-center space-x-5 mt-5 ml-3 sm:ml-0 md:ml-3  ">
        
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl " />
            <FontAwesomeIcon icon={faInstagram}className="text-white text-2xl " />
            <FontAwesomeIcon icon={faGoogle} className="text-white text-2xl "/>
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl "/>
        </div>

        </div>
       
        

        <div className="flex justify-center items-center sm:mt-0 mt-5 ">
            <img src="home.png" alt="" className="h-80 w-80 sm:h-96 sm:w-96 object-contain "/>
        </div>
        </section>



       
        
        
        </>
    )
}
export default Home