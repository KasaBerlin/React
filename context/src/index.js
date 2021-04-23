import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const App = () => {
//   return <Menu color="green" language="arabic" />;
// };

// function Menu(props) {
//   return <MenuItem color={props.color} language={props.language} />;
// }
// function MenuItem(props) {
//   return (
//     <div>
//       <p>Theme color : {props.color}</p>
//       <p>Location: {props.language}</p>
//     </div>
//   );
// }

// // App => Menu => MenuItem

// -------------------------------------------------------------------

const AppContext = React.createContext();

const App = () => (
  <AppContext.Provider
    value={{ color: "red", langauge: "Esperanto", location: "Berlin" }}
  >
    <Menu />
  </AppContext.Provider>
);

// In order for context value to be addressed at lower levels, it  should be attached to higher level component

function Menu() {
  return <MenuItem />;
}

// note that in here value is not passed as props to Menu component, avoiding props drilling

const MenuItem = () => (
  <AppContext.Consumer>
    {value => (
      <div>
        <p> Theme color : {value.color}</p>
        <p> language : {value.langauge}</p>
        <p> Location : {value.location}</p>
      </div>
    )}
  </AppContext.Consumer>
);

ReactDOM.render(<App />, document.getElementById("root"));
