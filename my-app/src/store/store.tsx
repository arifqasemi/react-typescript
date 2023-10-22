import { type } from "os";
import { createContext,useState,ReactNode } from "react";
import Todo from "../models/Todo";



type TodoTypes ={
    items:Todo[],
    addTodo:(text:string,id:number)=>void,
    removeTodo:(id:number)=>void,
    updateTodo:(id:number,text:string)=>void,
}


export const GlobalContext =createContext<TodoTypes>({
    items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
  updateTodo: (id: number, newText: string) => {},
})




export const GlobalProvider:React.FC<{children: ReactNode }> =(props)=>{
    const [todos,setTodo] = useState<Todo[]>([]);


    const addTodoHandler =(text:string,id:number)=>{
        // console.log(text);
        const NewTodo = new Todo(text,id)
        setTodo((prevTodo) =>[...prevTodo,NewTodo])
        // console.log(todos)
    
    }
    const removeHandler =(id:number)=>{
        setTodo((prevTodo)=> prevTodo.filter((item)=> item.id !== id));
    }
    const updateHandler = (id:number,Newtext:string)=>{
        setTodo((prevTodo) =>  prevTodo.map((todo) =>
        todo.id == id ? { ...todo, text: Newtext } : todo))
    }
 
    const contextValue:TodoTypes = {
        items:todos,
        addTodo:addTodoHandler,
        removeTodo:removeHandler,
        updateTodo:updateHandler
    }
    return (
        <GlobalContext.Provider value={contextValue}>
         {props.children}
        </GlobalContext.Provider>
    )
}