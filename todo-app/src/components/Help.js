import React, { useEffect } from "react";
import Header from "./Header";

// class Help extends React.Component {
//   componentDidMount() {
//     document.title = "Help | What to do?";
//   }
//   render() {
//     return (
//       <div className="container">
//         <Header tagline="Your question will be answered here." />
//         <p>Where is the data stored?</p>
//         <p>We store all information in your browser's LocalStorage</p>
//       </div>
//     );
//   }
// }

// export default Help;

export default function Help() {
  useEffect(() => {
    document.title = "Help | What to do";
  }, []); //if we want to filter the store updated in the array, useEffect will get fired if certain state data gets updated
  return (
    <div className="container">
      <Header tagline="Your questions will be answered here"></Header>
      <dt>Where is the data stored?</dt>
      <dd>We store all the information in our browsers storage</dd>
    </div>
  );
}
