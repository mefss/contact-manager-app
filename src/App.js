import { useState } from "react";

import { AddContact, EditContact, ViewContact, Contact, Contacts, Navbar } from "./components";


import './App.css';
import { useSyncExternalStore } from "react";

const App = () => {

  const [getContacts, setContacts] = useState([]);

  return (
    <div className="App">
      <Navbar />

      <Contacts contacts={getContacts} />
    </div>
  );
}

export default App;
