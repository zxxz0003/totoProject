import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper(){

    //因為有n個todo 所以用陣列存取
    //因為陣列需要key屬性 所以要改成陣列物件 加上id
   // const[todos,setTodos]=useState(['List1','List2']);

  /* const[todos,setTodos]=useState([
    {content:'List1',id:Math.random()},
    {content:'List2',id:Math.random()},
   ]);*/
   //因為要判定todo是否被典籍 所以要增加一個鰾季屬性=>isCompleted
   //新增陣列屬性isedit=>判別是否編輯中

const[todos,setTodos]=useState([
    {content:'List1',id:Math.random(), isCompleted:false,isEdit:false},
    {content:'List2',id:Math.random(), isCompleted:false,isEdit:false},
   ]);

//建議新的todo內容
//1. 使用...其餘預算子來保留原陣列內容
//2. 再加入新的物件內容
const addTodo=(content)=>{
     setTodos([...todos, { content:content,id:Math.random(), isCompleted:false,isEdit:false}])
}

//刪除todo函式 傳給todo元件使用
//filter方法 去除被刪除ˇ呃todo
const deleteTodo=(id)=>{
  setTodos(todos.filter((todo)=>{
    //檢查目前id是否為被刪除的id  如果不適則保留

   return todo.id !==id
  }))
}

//建立雙向(toggle)切換完成與取消的函式
const toggleCompleted=(id)=>{
  setTodos(todos.map((todo)=>{
    //檢查被典籍的id是否跟陣列前的ud依樣
    //tes=>1取出todo 將iscomplete
    return todo.id===id
    ?{...todo, isCompleted:!todo.isCompleted}
        :todo
    
  }))
}

//建立是否修改的函式(雙向)
const toggleIsEdit=(id)=>{
   setTodos(todos.map((todo)=>{
    //逐筆檢查目前的todo.id是否等於被修改的id
    //yes=>1.取出todo資料2.修改isEdit屬性值為反向
    //no=>todo不變
    //三元運算子寫法
     return todo.id ===id
     ?{...todo,isEdit:!todo.isEdit}
     :todo

     //if else寫法
  /*   if(todo.id===id){
      return{...todo,isEdit: !todo.isEdit}
     }else{
      return todo
     }*/
   }))
}

//建立完成修改的函式(按下完成的動作)
//1.異動content為新的內容
//2.isEdit改為 false
const editTodo=(id,newContent)=>{
   setTodos(todos.map((todo)=>{
    return todo.id===id
    ?{...todo,content:newContent, isEdit:false}
    :todo
   }))
}


    return(
<div className="wrapper">
    <h1>代辦事項</h1>
    <CreateForm addTodo={addTodo}/>
    {
        todos.map((todo)=>{
           return <Todo todo={todo} key={todo.id}
           deleteTodo={deleteTodo}
           toggleCompleted={toggleCompleted}
           toggleIsEdit={toggleIsEdit}
           editTodo={editTodo}
           />
        })
    }
    
    
</div>

    )
}
export default TodoWrapper