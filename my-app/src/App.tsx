import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Todo from './models/Todo';
import NewTodo from './component/newTodo';
import {useState} from 'react';
import { GlobalContext, GlobalProvider } from './store/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Nav from './component/nav';
import Update from './component/update';


const router = createBrowserRouter([
  {path:'/',element:<Nav/>,children:[
     {path:'home',element:<Home/>},
     {path:'/create',element:<NewTodo/>},
     {path:'/update/:id',element:<Update/>},


  ]}
 
])

function App() {
 
   
  return (
     <GlobalProvider>
         <RouterProvider router={router}/>
    </GlobalProvider>
 
   
  );
}

export default App;
