import CircularGallery from "./CircularGallery"


function Complete() {
  return (
  <>

  <div style={{ height: '450px', position: 'relative',backgroundColor:'lightblue' }}>
  <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02}/>
  </div>
    
        
    </>
    )
}
export default Complete