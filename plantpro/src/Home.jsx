const Home = () => {
    return (
        <section className="flex justify-evenly items-center bg-green-800 p-20">
            <div>
                <h1 className="text-4xl font-bold "><span className="text-orange-400 ">Plants</span> make a <br />positive <span className="text-orange-400">impact</span> on <br />your environment</h1>
                <p style={{ fontFamily: "Bad Script",marginTop:"20px",fontSize:"20px",fontWeight:"bold",color:"skyblue" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat <br />
                    eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!
                </p>
                <div className="flex gap-8 mt-5">
                    <button className="bg-yellow-500 text-white px-10 py-2 rounded ">Shop Now</button>
                    <button className="bg-transparent  border border-yellow-500 text-white px-10 py-2 rounded">Know More 🌿</button>
                </div>
                <p className="mt-4 text-white">Yes, you will get a 30-day free trial</p>
                <div className="flex space-x-4 mt-8">
                    <i class="fa-brands fa-facebook-f" style={{color:"white"}}></i>
                    <i class="fa-brands fa-twitter" style={{color:"white"}}></i>
                    <i class="fa-brands fa-instagram" style={{color:"white"}}></i>
                    <i class="fa-brands fa-linkedin" style={{color:"white"}}></i>
                </div>
            </div>

            <div>
                <img src="home.png" alt="plant cart" className=" h-150 w-150" />
            </div>
            
        </section>
        
    );
}

export default Home