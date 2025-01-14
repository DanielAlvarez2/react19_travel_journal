import './App.css'
import Entry from './components/Entry.jsx'
import Header from './components/Header.jsx'
import data from './data.js'


function App() {
  console.log(data)
  const entryElements = data.map((entry)=>{
    return(
      <Entry  key={entry.id}
              entry={entry}
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
