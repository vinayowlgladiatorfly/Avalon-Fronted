import SignIn from "./components/Signin";
import React from "react";
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        {/* Add additional routes if needed */}
      </Switch>
    </BrowserRouter>
  )
}

export default App