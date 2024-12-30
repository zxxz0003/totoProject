import { useState } from "react";
import { useEffect } from "react";


function App(){
 const[count,setCount]= useState(0);
  
  //useEffect(()=>{});//每一次渲染後執行
  useEffect(()=>{
    console.log(1);
    let btn2=document.getElementById('btn2'); //按鈕監聽事件

    btn2.addEventListener('click',()=>{
      let p1b=document.getElementById('p1');
  
      p1b.style.color="red";

  })

 
});

useEffect(()=>{
  console.log(2);
},[]);//只執行一次(開啟檔案時)

useEffect(()=>{
  console.log(3);
  
},[count]);//當陣列中的依賴條件改變時 就會執行


  //取得段落 再變色



 function changeColor(){
  let p1c=document.getElementById('p1');
  p1c.style.color="green";
 }


  return (
    <>
    {console.log(0)}
       <h1>useEffect</h1>
      <hr></hr>
      <p id="p1">段落</p>

      {/*綁定事件*/ }
      <button onClick={()=>{
        //取得段落
        let p1=document.getElementById('p1');


        //變色
      p1.style.color="blue";
      }}>變色</button>   



      {/*監聽事件*/ }
      <button id="btn2">變紅</button>



      {/*呼叫函式*/ }
      <button id="btn3" onClick={changeColor}>綠色</button>
    </>
  )
}

export default App