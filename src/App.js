import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import AppRoutes from './routes/AppRoutes';  // Import the AppRoutes component\\\

import './App.scss'

const App = () => {
  return (
    <Router>  {/* Wrap your routes with Router */}
      <AppRoutes />  {/* Render the AppRoutes component */}
    </Router>
  );
};

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateLayout from './layouts/PrivateLayout';
// import Dashboard from './pages/Dashboard'; 
// import Login from './pages/Login';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/login" component={Login} />
//         <PrivateRoute path="/dashboard" component={Dashboard} />
//         {/* Add other routes here */}
//       </Switch>
//     </Router>
//   );
// };

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <PrivateLayout>
//             <Component {...props} />
//           </PrivateLayout>
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default App;
