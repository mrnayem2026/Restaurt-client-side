import './App.css'



function App() {

  return (
    <div className="App">
      I am from Empty react app 
      {
        console.log("From .env.local" , import.meta.env.VITE_APIKEY)
      }
    </div>
  )
}




export default App
