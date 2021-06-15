import Home from './views/Home'
import Products from './views/Products/Products'
import Product from './views/Product/Product'
import {Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/products' component={Products}/>
      <Route path='/product' component={Product}/>
    </Switch>
    </>
  );
}

export default App;