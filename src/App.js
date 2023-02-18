import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerForm from '../src/Components/Customer/CustomerForm/CustomerForm'
import CustomerList from '../src/Components/Customer/CustomerList/CustomerList'
import Navbar from './Components/Customer/Navbar/Navbar';
// import SignUp from './Components/Customer/SignUp/SignUp';
import SignIn from './Components/Customer/SignIn/SignIn';
import SecureRoutes from './Components/Customer/SecureRoutes/SecureRoutes';
import User from './Components/Customer/User/User';
import UserForm from './Components/UserForm/UserForm';
import Tickets from './Components/Customer/Tickets/Tickets';
import TicketForm from './Components/Customer/Tickets/TicketForm';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<SecureRoutes><CustomerList /></SecureRoutes>}></Route>
    <Route path='/users/userform' element={<SecureRoutes><UserForm/></SecureRoutes>}></Route>
    <Route path='/users' element={<SecureRoutes><User/></SecureRoutes>}></Route>
    <Route path='/tickets' element={<SecureRoutes><Tickets/></SecureRoutes>}></Route>
    <Route path='/newTicket' element={<SecureRoutes><TicketForm/></SecureRoutes>}></Route>
    <Route path='/newTicket/:desc' element={<SecureRoutes><TicketForm/></SecureRoutes>}></Route>
    <Route path='/form' element={<SecureRoutes><CustomerForm /></SecureRoutes>}></Route>
    {/* <Route path='/signup' element={<SignUp />}></Route> */}
    <Route path='/signin' element={<SignIn />}></Route>
    <Route path='/form/:customerName' element={<SecureRoutes><CustomerForm /></SecureRoutes>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
