import './App.css'

import { Routes, Route } from "react-router-dom";

import { Navigation } from "./pages/navigation";

import { Landing } from "./pages/landing";

import { Home } from "./pages/home";

import { Dashboard } from "./pages/dashboard";

import { Analytics } from "./pages/analytics";

import { Admin } from "./pages/admin";

import { PrivateRoute } from "./authentication/protected.route";

import { useState } from "react";

export function App() {
  
  const [ user, setUser ] = useState( null );

  const logIn = () => {

    setUser({
      
      id: "1",
      name: "Amina",
      permissions: ['analyze'],
      roles: ['admin']
      
    });
  };

  const logOut = () => {

    setUser(null);

  };

  return (
    <>
      <h1>React Private Route</h1>

      <Navigation />

      { user ? (
        <button onClick={ logOut }>logOut</button>
        ) : (
          <button onClick = { logIn }>logIn</button>
          )}

      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path="landing" element={<Landing />}></Route>

        <Route element={ <PrivateRoute isAllowed={ user }/> }>

          <Route path="home" element={<Home />} ></Route>
          
          <Route path="dashboard" element={ <Dashboard/> }></Route>

        </Route>

        <Route path="analytics" element={
          <PrivateRoute 
            
            isAllowed={!!user && user.permissions.includes('analyze')}
          >

            <Analytics />

          </PrivateRoute>
        }></Route>

        <Route path="admin" element={
          <PrivateRoute redirectPath='/home' isAllowed={!!user && user.roles.includes('admin')}>

            <Admin />
          </PrivateRoute>
        } />

        <Route path="*" element={ <p>There's nothing here: 404!</p> } />

      </Routes>
    </>
  );
}
