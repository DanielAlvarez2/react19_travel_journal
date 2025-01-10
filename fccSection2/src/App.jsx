import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'

function App() {

  return (
    <>
      <div className="main-content">
        <Header />
        <Entry 
                img={{
                  src:"tao.jpg",
                  alt:"Tao Nightclub Las Vegas"
                }}
                location="Las Vegas"
                map="https://www.google.com/maps/place/Las+Vegas,+NV/@36.1251645,-115.3398102,11z/data=!3m1!4b1!4m6!3m5!1s0x80beb782a4f57dd1:0x3accd5e6d5b379a3!8m2!3d36.171563!4d-115.1391009!16zL20vMGN2M3c?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                entry="Tao Nightclub"
                dates="2012-2017"
                description="TAO Nightclub is the epitome of Las Vegas nightlife boasting three bars, one dance floor, private sky boxes, and a 40-foot outside terrace overlooking the Las Vegas Strip"        
        />
      </div>
    </>
  )
}

export default App
