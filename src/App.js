
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/Header';
import {Routes,Route} from "react-router-dom"
import CardDetails from './Componets/CardDetails';
import Cards from './Componets/Cards';
function App() {
  return (
   <>
   <Header/>


   <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/details/:id' element={<CardDetails/>}/>
   </Routes>
   </>
  );
}

export default App;
