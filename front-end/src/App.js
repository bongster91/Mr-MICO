import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Four0Four from './Pages/Misc/Four0Four';
import Home from './Pages/General/Home';
import PortfolioPage from './Pages/User/Portfolio';
import Login from './Pages/General/Login';
import UserHome from './Pages/User/UserHome';
import Profile from './Pages/User/Profile';
import Assets from './Pages/Assets/Assets';
import Debts from './Pages/Debts/Debts';
import BankAccounts from './Pages/Assets/BankAccounts';
import Investments from './Pages/Assets/Investments';
import Properties from './Pages/Assets/Properties';
import Bills from './Pages/Debts/Bills';
import Loans from './Pages/Debts/Loans';
import Credit from './Pages/Debts/Credit';
import PersonalExpenses from './Pages/Debts/PersonalExpenses';
import EditPage from './Pages/General/EditPage';

// Components
import NavBar from './Components/General/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users/:user_id' element={<UserHome />} />
          <Route path='/users/:user_id/profile' element={<Profile />} />
          <Route path='/users/:user_id/portfolio' element={<PortfolioPage />}/>
          <Route path='/users/:user_id/portfolio/:category/:category_type/:id/edit' element={<EditPage/>}/>

          <Route path='/users/:user_id/portfolio/assets' element={<Assets />} />
            <Route path='/users/:user_id/portfolio/assets/bank_accounts' element={<BankAccounts />} />
            <Route path='/users/:user_id/portfolio/assets/investments' element={<Investments />} />
            <Route path='/users/:user_id/portfolio/assets/properties' element={<Properties />} />

          <Route path='/users/:user_id/portfolio/debts' element={<Debts />} />
            <Route path='/users/:user_id/portfolio/debts/bills' element={<Bills />} />
            <Route path='/users/:user_id/portfolio/debts/loans' element={<Loans />} />
            <Route path='/users/:user_id/portfolio/debts/credit' element={<Credit />} />
            <Route path='/users/:user_id/portfolio/debts/expenses' element={<PersonalExpenses />} />

          <Route path='*' element={<Four0Four />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
