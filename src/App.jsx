import './App.css'
import NavBarContainer from './components/NavBar/NavBarContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBarContainer />
      <ItemListContainer greeting="Saludos!" />
    </div> 
  )
}

export default App
