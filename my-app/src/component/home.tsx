import React from "react";
import Todo from '../models/Todo';
import TodoItem from "./todos";
import  { useContext } from 'react';
import { GlobalContext } from "../store/store";
import { Link } from 'react-router-dom';
const Home: React.FC = () => {

  const ctx = useContext(GlobalContext);
  const data = ctx.items;
  console.log(data)
  const usersList =data.map(item =>  <tr key={item.id}>
    <th scope="row" >{item.id}</th>
    <td>{item.text}</td>
    <td><Link className="btn btn-primary btn-sm" to={`/update/${item.id}`}>Edit</Link> <button className="btn btn-danger btn-sm" onClick={() => ctx.removeTodo(item.id)}>Delete</button></td>
  </tr>);
return(
    <div className="container mt-5 border">
      {usersList.length === 0 ? (<p>
       No Data Found
      </p>) :(<table className="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Text</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
    {usersList}
    </tbody>
  </table>)}
    
  </div>
)
}

export default Home;
