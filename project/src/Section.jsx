
function Section(){
    return(
        <section className="flex justify-between items-center bg-sky-200 p-8 px-20 text-center">
             <div>
                <img src="coffee-img.png" alt=""  class="h-90 w-90" />
                <h1 className="text-2xl mt-3">Coffee</h1>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 mt-2"onClick={demo=>alert("order placed")}>see more</button>
             </div>
             <div >
                <img src="cold-beverages.png" alt=""  class="h-90 w-90" />
                <h1 className="text-2xl mt-3">Cold-Beverages</h1>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 mt-2 "onClick={demo=>alert("order placed")}>see more</button>
             </div>
             <div>
                <img src="refreshment.png" alt=""  class="h-90 w-90"  />
                <h1 className="text-2xl mt-3">Resfreshment</h1>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 mt-2"onClick={demo=>alert("order placed")} >see more</button>
             </div>


        </section>
    )
}
export default Section