
import './App.css';
import {BrowserRouter , Routes,Route } from "react-router-dom";
// import {Switch} from "react"
import Header from './Containers/Header';
// import ProductComponent from './Containers/ProductComponent';
import ProductListing from './Containers/ProductListing';
import ProductDetal from './Containers/ProductDetal';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header/>
<Routes>
    
  {/* <Switch> */}
 

  <Route path='/' exact element={<ProductListing/>}/>
  <Route path='/product/:productId'exact element={<ProductDetal/>}/>
  <Route path='*'>404 NOt Found</Route>
  {/* </Switch> */}
</Routes>

  </BrowserRouter>

    </div>
  );
}

export default App;
