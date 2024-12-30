import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

//解構props的屬性名 用大括號{}
function Todo({todo, deleteTodo,toggleCompleted,toggleIsEdit, editTodo}){
   
    return(
   
//jsx retrun內部用if else for

        todo.isEdit
        //isEdit:true
        //呼叫修改元件 並傳入todo資料
        ?<EditForm todo={todo} editTodo={editTodo}/>

        //新增一 個completed類別規則
        //使用反引號+三元運算子檢查isCompleted
        //如果為真=>套用complete類別規則
        //如果為否=>套用complete類別規則 =>''
        //isEdit:false
        //顯示todo資料

       : <div className={`todo ${todo.isCompleted?'completed':''}`}>
           {/* <p>設課中</p>*/}
          {/* <p>{todo}</p>*/}
          <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
          <div>  
           
          <MdEdit 
          onClick={()=>{toggleIsEdit(todo.id)}}
          style={{cursor:'pointer'}}/>
          <MdDelete
          onClick={()=>{deleteTodo(todo.id)}}
          style= {{cursor:'pointer',marginLeft:'5px'}}/>
          </div>
        
        </div>
    )
}

export default Todo