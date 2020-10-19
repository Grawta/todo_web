import React, { ReactElement } from "react"

export interface boutonProps {
  name : string 
}

/* const ButtonTest: React.FC = () => { */
/*   return <div><h1>Test de composant avec valeur</h1></div>; */
/* } */

/* class BoutonTest extends Component { */

/*   render () { */
/*     return <div><h1>Test de composant avec valeur</h1></div>; */
/*   } */
/* } */

type Props ={
  name : string
}

const AnotherTest : React.FC<Props> = ({name} : Props) =>
    <div><h1>Test de composant avec valeur {name}</h1></div>

export default AnotherTest;
