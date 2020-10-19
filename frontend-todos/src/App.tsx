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


const bodyQuote = `
  Spicy jalapeno bacon ipsum dolor amet ball tip turducken brisket veniam beef ribs ipsum, ex pig doner strip steak t-bone.
      Bacon swine shankle, pastrami tail chuck strip steak kevin.
        T-bone mollit kevin chicken id sirloin tenderloin irure pork chop ball tip lorem qui.
          Tenderloin et tri-tip, porchetta cillum in occaecat. Cow sint magna pork loin, officia laboris in boudin doner.
            Frankfurter burgdoggen cupim, pariatur consequat salami tempor.

              Bresaola jerky laboris alcatra shoulder filet mignon exercitation proident non. Leberkas hamburger aute labore meatball.
                Shank labore reprehenderit culpa. Buffalo eu shankle chuck sed cillum ut burgdoggen turducken bresaola pariatur landjaeger.
                  Consectetur excepteur burgdoggen filet mignon enim, boudin ad pork chop. Turducken ut sint, cow pork chop dolore chicken reprehenderit jowl.
                    Ad pariatur pig fatback.
                    `;

function App() {
  return (
    <main className="App">
      <AppBarNathan/>
      <AppHeader
        title={headerProps.title}
        description={headerProps.description}
        links={headerProps.links}
      />
      <AppBody header="My Dive Log Dashboard" quote={bodyQuote} Test={(<p>Test</p>)}>
        <p> <blockquote>test block quote</blockquote> Je suis dans les childrens </p>
      </AppBody>
    </main>
  );
}

export default App;
