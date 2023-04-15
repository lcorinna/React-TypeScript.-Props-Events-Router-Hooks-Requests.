import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UserPage from "./Component/UserPage";
import TodosPage from "./Component/TodosPage";
import UserItemPage from "./Component/UserItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Пользователи</NavLink>
          <NavLink to='/todos'>Список дел</NavLink>
        </div>
        <Route path={'./users'} exact>
          <UserPage />
        </Route>
        <Route path={'./todos'} exact>
          <TodosPage/>
        </Route>
        <Route path={'./user/:id'}>
          <UserItemPage/>
        </Route>
      </div>
    </BrowserRouter>
  ) 
};

export default App;
