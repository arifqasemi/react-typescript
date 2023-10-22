import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../store/store";
import Todo from "../models/Todo";

const  Update:React.FC =()=>{
    const navigate = useNavigate();
    const ctx = useContext(GlobalContext);
    const {id} = useParams();
    const [nameinput,setNameinput] = useState("");
    const data = ctx.items.find((item) => item.id === parseInt(id || "")); 
    const textId = parseInt(id || "");
   
    useEffect(() => {
        if (data) {
          setNameinput(data.text);
        }
      }, [data]);
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        if(nameinput === ''){
            alert('Please Fill  Inputs');

        }else{
            ctx.updateTodo(textId,nameinput);
            navigate('/home');
        }
    }


    return (
        <div className='container mt-5 border p-2'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" onChange={e => setNameinput(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={nameinput}/>
        </div>
      
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
    )
}


export default Update;