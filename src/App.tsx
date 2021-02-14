import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './components/containers/pages/register';
import { ChangePassword } from './components/containers/pages/changePassword';
import AccountsPage from './components/containers/pages/accounts-page';
import DropDownList from './components/ui-component/dropDown';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountsPage />
        <DropDownList />
        
      </header>
    </div>
  );
}

export default App;
