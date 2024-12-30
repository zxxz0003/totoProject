import { useState } from "react"


function App(){

const[inputUserName,setInputUserName]=useState("文字方塊");
const[selCity,setSelCity]=useState("");
const arrCity=['台北市','新北市','桃園市'];

//閱讀確認
const[check,setCheck]=useState(false);

//複選 多核取方塊
const[chklist, setChklist]=useState([]);
const arrList=['html','css','js'];

//建立函式處理被勾選的項目
const handleChkList=(e)=>{
 //console.log(e.target.value);
 //使用其餘運算子保留被勾選的項目+目前被勾選的項目
 // setChklist([...chklist,e.target.value]);
 //檢查是否被勾選
if(e.target.checked){
  setChklist([...chklist,e.target.value]);
}else{
  //否=>從原本的項目中 拿掉不要(filter)
  setChklist(
  chklist.filter((list)=>{
  return list!==e.target.value
  })
  );

}

}
//選項按鈕
const [isCar,settIsCar]=useState('');

//統計次數
//const[ans1Count,setAns1Count]=useState(0);

return(
<>

<h1>react-表單</h1>
<hr />
{/*input*/ }
<label htmlFor="username">使用者名稱</label>
<input type="text" id="username" 
value={inputUserName}
onChange={(e)=>{
  console.log(`更改前:${inputUserName}`);
  setInputUserName(e.target.value);
  console.log(`更改後:${inputUserName}`);


}}
/>{inputUserName}
<br/>
<label htmlFor="city" >縣市名</label>
<select name="" id="city"
value={selCity}
onChange={(e)=>{
  setSelCity(e.target.value);
}}
>  
{/*逐行寫法*/ }
  <option value="台北市">台北</option>
  <option value="桃園市">桃園</option>

  <option value="新北市">新北</option>
  <option value="台中市">台中</option>
  <option value="台南市">台南</option>
  <option value="高雄市">高雄</option>


{/*讀取陣列寫法*/ }
{/* disabled=>無法使用*/ }

  <option value="" disabled>請選擇</option>
  {arrCity.map((city)=>{
  return <option value={city} key={city}>{city}</option>
  })
}


</select>{selCity}

<br/>



{/*單一核取方塊*/ }
<label htmlFor="isCheck">閱讀確認</label>
<input type="checkbox" id="isCheck" 
value={check}
onChange={(e)=>{
  //處理勾選值的變化
  setCheck(e.target.checked);
}}/>{check.toString()}


<br/>
{/*複選多個核取方塊*/ }
{

  arrList.map((list)=>{
    return<div key={list}>
  <input type="checkbox"  name="like" id={list}
  onChange={handleChkList}
  key={list}
  />
  <label htmlFor={list}>{list}</label>
  </div>
})

  }
  

<br/>
{chklist}

{/*setAns1Count(ans1Count +1);*/}

{/*選項按鈕*/ }
駕照<span id="car">{isCar}</span>
<input type="radio" name="car" value="有" id="yes" onChange={(e)=>{
  settIsCar('y');
}}/>
<label htmlFor="yes">有</label>
<input type="radio"  name="car" value="無" id="no"   onChange={(e)=>{
  settIsCar('n');
}}/>
<label htmlFor="no">無</label>

</>
//將所有次數規0
<button onClick={()=>{
  setAns1Count(0);
  setAns2Count(0);
  setAns3Count(0);

}}>送出統計結果</button>
統計次數:
<p>選項1次數:{ans1Count}</p>

const q1a=document.getElementById('q1-1');
if(q1a.checked){
  setAns1Count(ans1Count+1);
}


)

}




export default App