const redux = require("redux");
const createStore = redux.createStore;

// copy the state and then modify it

const initialState = {
  counter: 0,
  counters: []
};

// Reducer Part
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,

        counter: state.counter + action.payload,
        counters: [state.counter + action.payload]
      };

    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload,
        counters: [...state.counters, state.counter + action.payload]
      };

    case "SUBTRACT_COUNTER":
      return {
        counter: state.counter - action.payload,
        counters: [...state.counters, state.counter - action.payload]
      };

    case "MULTIPLY_COUNTER":
      return {
        counter: state.counter * action.payload,
        counters: [...state.counters, state.counter * action.payload]
      };

    default:
      state;
  }
};

// Store Part
const store = createStore(rootReducer);

// Subscription part
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action Part
store.dispatch({ type: "INC_COUNTER", payload: 1 });
store.dispatch({ type: "ADD_COUNTER", payload: 7 });
store.dispatch({ type: "SUBTRACT_COUNTER", payload: 3 });
store.dispatch({ type: "MULTIPLY_COUNTER", payload: 2 });

//store.dispatch({ type: "THAT_NOT_WORKING!_COUNTER" });
console.log(store.getState());
