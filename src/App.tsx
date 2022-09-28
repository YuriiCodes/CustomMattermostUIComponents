import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTicketForm from "./components/create_ticket_form";
import Create_ticket_form from "./components/create_ticket_form";
import ApiKeyEnterForm from "./components/api_key_enter_form";
import MessageAfterSubmit from "./components/emssage_after_submit";

function App() {
  return (
    <div className="App">
        <ApiKeyEnterForm/>
        <Create_ticket_form/>
        <MessageAfterSubmit message={"submitted succesfully"}/>
    </div>
  );
}

export default App;
