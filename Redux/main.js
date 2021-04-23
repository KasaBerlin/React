// Insurance Company

// Create Policy
// Create Clain
// Delete Policy

// ACTION CREATOR

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amountToCollect
    }
  };
};

// REDUCERS
// A reducer is a simple function that takes two values and reduces them to one value
// action is the list of all action Objects, that have been created

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
    //push filtered claimlist payload data into empty oldListofClaims
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

// combine
const { createStore, combineReducers } = Redux;
//console.log(createStore)
//console.log(combineReducers)
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// Create store creates a Redux store that holds the complete state of your app
// There should only be one store in your app

const store = createStore(ourDepartments);

// dispatch() is the method usd to dispatch actions and trigger state changes to the store​- have to use dipatch to anything in the store

store.dispatch(createPolicy("Simon", 200));
store.dispatch(createPolicy("Dagmar", 100));
store.dispatch(createPolicy("Greta", 50));
store.dispatch(createPolicy("Kiyoshi", 300));
store.dispatch(createPolicy("Pedro", 500));

store.dispatch(deletePolicy("Dagmar"));
store.dispatch(deletePolicy("Greta"));

console.log(store.getState());
