import React from "react";
import ReactDOM from "react-dom";

// const numbers = ["one", "two", 3, 4, 5];
// // const listItems = numbers.map(number => <li>{number}</li>);

// const NumberList = props => {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// };

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );

const ListComponent = props => {
  const listItems = myList.map(item => <li key={item.id}>{item.value}</li>);
  return <ul>{listItems}</ul>;
};

const myList = [
  { id: "a", value: "Aquaman" },
  { id: "b", value: "Batman" },
  { id: "c", value: "Catwoman" },
  { id: "d", value: "Dardevil" },
  { id: "e", value: "Elastic Man" },
  { id: "f", value: "Flash" }
];

ReactDOM.render(
  <ListComponent myList={myList} />,
  document.getElementById("root")
);
