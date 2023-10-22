import { useContext, useRef } from "react";
import { GlobalContext } from "../store/store";
import {useNavigate} from 'react-router-dom';

const NewTodo:React.FC =(props)=> {
  const refValue = useRef<HTMLInputElement>(null);
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const id = ctx.items.length > 0 ? ctx.items.length  +1 :1;
//   const textId = parseInt(id);
 
  
    const submitHandler =(event:React.FormEvent)=>{
        event.preventDefault();
        if (refValue.current) {
        if (refValue.current.value !== ''){
        const enterdValue = refValue.current!.value;
        ctx.addTodo(enterdValue,id)
        refValue.current.value = '';
        navigate('/home');
        }else{
            alert('Invalid Input');
        }
     
        
        }
    }

    return(
        <div className="container border mt-5">
       <form onSubmit={submitHandler}>
        <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Text</label>
            <input type="text" ref={refValue} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter text"/>
        </div>
        <button type="submit" className="btn btn-primary m-3">Submit</button>
    </form>
    </div>

    )
    
}


export default NewTodo;