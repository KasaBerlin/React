import React from "react";
import ReactDOM from "react-dom";

// Day 2 - Intro to props, class-based components, state and conditional rendering

// props

// const Welcome = props => {
//   return (
//     <h1>
//       Hello {props.name} {props.greeting}!
//     </h1>
//   );
// };

// ReactDOM.render(
//     <element name="Lenny" greeting="wie gehts?" />,
//     document.getElementById("root")
//   );

// const element = <Welcome name="Fernando" />;
// ReactDOM.render(element, document.getElementById("root"));

// class Welcome extends React.Component {
//   render() {
//     return <h1>YO, {this.props.name}</h1>;
//   }
// }

// ReactDOM.render(<Welcome name="Snoppy" />, document.getElementById("root"));

// const App = () => {
//   return (
//     <React.Fragment>
//       <Welcome name="Pinocchino" />
//       <Welcome name="Cinderella" />
//       <Welcome name="Frankenstein" />
//     </React.Fragment>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

// const formatDate = date => {
//   return date.toLocaleDateString();
// };

// const Avatar = props => {
//   return <img src={props.user.avatarURL} alt={props.user.name} />;
// };

// const UserInfo = props => {
//   return (
//     <React.Fragment>
//       <Avatar user={props.user} />
//       <div>{props.user.name}</div>
//     </React.Fragment>
//   );
// };

// const Comment = props => {
//   return (
//     <React.Fragment>
//       <UserInfo user={props.author} />
//       <div>{props.text}</div>
//       <div>{formatDate(props.date)}</div>
//     </React.Fragment>
//   );
// };

// const comment = {
//   date: new Date(),
//   text: "Sunny weather is beautiful in Lichtenberg!",
//   author: {
//     name: "Prickly Pete",
//     avatarURL:
//       "https://api.adorable.io/avatars/200/f53e08608e738b74219c0e3304a232ec.png"
//   }
// };

// ReactDOM.render(
//   <Comment author={comment.author} text={comment.text} date={comment.date} />,
//   document.getElementById("root")
// );

// CONDITIONAL RENDERING

const UserGreeting = () => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting = () => {
  return <h1>Please sign up.</h1>;
};

const Greeting = props => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
