import './App.css';
import UserForm from './component/UserForm';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import UsersList from './component/UsersList';
import Nav from './component/Nav';
import Edit from './component/Edit';
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  
  return (
 
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>

        <Route component={Nav} />

          <Switch>
              <Route path="/" exact component={UsersList}></Route>
              <Route path="/addUser" exact  component={UserForm}></Route>
              <Route path="/usersList" exact component={UsersList}></Route>
              <Route path="/edit/:id" exact component={Edit}></Route>
          </Switch>
        
      </BrowserRouter>
    </Provider>

  </div>
    
    
  );
}

export default App;
