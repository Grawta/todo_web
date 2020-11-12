import React from 'react';
import './App.css';
import AppHeader, { AppHeaderProps  } from "./component/Header";
import AppBody from "./component/AppBody"
import AppBarNathan from './component/AppBar';

// build an instance of our AppHeaderProps to pass to the AppHeader component
const headerProps: AppHeaderProps = {
  title: "My Dive Log",
  description: "Log, Track, Review your dive logs and relive the experience",
  links: [
    {
      label: "Logs",
      route: "/logs/list"

    },
    {
      label: "New Entry",
      route: "/logs/create"

    }

  ]

}; 


function App() {
  return (
    <main className="App">
      <AppBarNathan/>
      <AppHeader
        title={headerProps.title}
        description={headerProps.description}
        links={headerProps.links}
      />
      <AppBody />
    </main>
  );
}

export default App;
