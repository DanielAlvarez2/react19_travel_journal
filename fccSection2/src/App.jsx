import './App.css'
import Entry from './components/Entry.jsx'
import Header from './components/Header.jsx'
import data from './data.js'


function App() {
  console.log(data)
  const entryElements = data.map((entry)=>{
    return(
      <Entry  key={entry.id}
              img={{
                src: entry.img.src,
                alt: entry.img.alt
              }}
              title={entry.title}
              city={entry.city}
              googleMapsLink={entry.googleMapsLink}
              dates={entry.dates}
              text={entry.text}
      />
    )
  })
  return (
    <div className='main-content'>
      <Header/>
      {entryElements}
    </div>
  )
}

export default App
