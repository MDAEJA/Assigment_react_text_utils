import React, { useReducer, useState } from 'react'

function TextPage() {

    const[textconvert,setTextConvert] = useState('');

    const reduce = (state,action)=>{
        switch(action.type){
            case 'UPPER_CASE' :
                return {...state,inputText:action.payload}
             case 'NUMBER_OF_CHARACTER' :
                return {...state,number_of_character:action.payload}  
               case 'NUMBER_OF_WORD' :
                return {...state,number_of_word:action.payload}
                case 'READING_TIME' :
                    return{...state,reading_time:action.payload}
                 case 'REMOVE_EXTRA_SPACES' :
                    return{...state,removeExtraSpace:action.payload}   
                default :
           return state;
        }
        
    }

    const[state,dispatch] = useReducer(reduce,{inputText : '',number_of_character:0,number_of_word:0,reading_time:0})

   const inputHandler = (event)=>{
    dispatch({type:'UPPER_CASE',payload:event.target.value})
    let count_char = state.inputText;
    dispatch({type:'NUMBER_OF_CHARACTER',payload:count_char.length})
    let count_word = state.inputText
    count_word = count_word.trim().split(' ');
    let count = 0;
    for(let ele of count_word){
        if(ele != []) count ++;
    }
    dispatch({type:'NUMBER_OF_WORD',payload:count})
    let wordsread = (count / 200);
    dispatch({type:'READING_TIME',payload:wordsread})

   }

   const upperCase = ()=>{
    // if(state.inputText == '') return alert("first enter the text")
    let textdata = state.inputText;
    textdata = textdata.toUpperCase();
    setTextConvert(textdata)
    console.log(textconvert);
    dispatch({type:'UPPER_CASE',payload:"Please wait converting to uppercase..."})
    
    setTimeout(()=>{
        dispatch({type:'UPPER_CASE',payload:textconvert})
    },2000);
    
   }

   const lowerCase = ()=>{
    // if(state.inputText == '') return alert("first enter the text")
    let textdata = state.inputText;
    textdata = textdata.toLowerCase();
    setTextConvert(textdata)
    console.log(textconvert);
    dispatch({type:'UPPER_CASE',payload:"Please wait converting to lowercase..."})
    
    setTimeout(()=>{
        dispatch({type:'UPPER_CASE',payload:textconvert})
    },2000);
   }

   const clearText = ()=>{
    if(state.inputText == '') return alert("first enter the text")
    dispatch({type:'UPPER_CASE',payload:"Please wait data will erase soon..."})
    setTimeout(()=>{
        dispatch({type:'UPPER_CASE',payload:''})
    },2000);
    
   }

   const handleCopyToClipboard = ()=>{
    navigator.clipboard.writeText(state.inputText)
    .then(()=>{
      console.log("text copied : ",state.inputText)
      alert("text copied : ",state.inputText)
    })
    .catch((error)=>{
        console.log("getting an error while copied the text");
        alert(error);
    })
   }

   const removeExtraSpace = ()=>{
    if(state.inputText == '') return alert("first enter the text")
    let string = state.inputText;
    dispatch({type:'UPPER_CASE',payload:string.trim().replace(/\s+/g,' ')})
    console.log(string.trim().replace(/\s+/g,' '))
   }



  return (
    <>
    <div style={{padding:'5% 10%'}}>
        <h1 style={{fontStyle:'italic',textDecoration:'underline',backgroundColor:"silver",color:'',textAlign:'center',padding:'3px 5px',margin:'5px 5px'}}>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <h2 style={{fontStyle:"oblique"}}>Enter Your Text Here:</h2>
       <textarea type='text' onChange={inputHandler} value={state.inputText}  rows={10} cols={30}  style={{width:'100%',padding:'10px 20px',fontStyle:"italic",fontSize:'20px',fontWeight:"bold",border:'2px solid blue',boxShadow:"2px 2px blue "}} ></textarea>
       
    <div style={{display:"flex",gap:"20px",padding:'20px 10px'}}>
        <button style={{padding:"10px 20px",borderRadius:'10px',textAlign:'center',fontStyle:'italic',fontWeight:'bold',backgroundColor:'orangered',color:'white'}} onClick={upperCase}>Convert Uppercase</button>
        <button style={{padding:"10px 20px",borderRadius:'10px',textAlign:'center',fontStyle:'italic',fontWeight:'bold',backgroundColor:'orangered',color:'white'}}  onClick={lowerCase}>Convert Lowercase</button>
        <button style={{padding:"10px 20px",borderRadius:'10px',textAlign:'center',fontStyle:'italic',fontWeight:'bold',backgroundColor:'orangered',color:'white'}}  onClick={clearText}>Clear Text</button>
        <button style={{padding:"10px 20px",borderRadius:'10px',textAlign:'center',fontStyle:'italic',fontWeight:'bold',backgroundColor:'orangered',color:'white'}}  onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        <button style={{padding:"10px 20px",borderRadius:'10px',textAlign:'center',fontStyle:'italic',fontWeight:'bold',backgroundColor:'orangered',color:'white'}}  onClick={removeExtraSpace}>Remove Extra Spaces</button>
    </div>
    <h3 style={{textAlign:'center',fontStyle:'italic',fontSize:'30px',backgroundColor:'silver',textDecoration:'underline',padding:'5px 5px',margin:'10px 10px'}}>
        Summer of Your Text
    </h3>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',
    gap:'10px',
    justifyContent:'center'}}>

       <div style={{display:"flex",gap:'40px',fontStyle:'oblique',fontSize:'20px',fontWeight:'bold'}}>
        <p>Number of Words : </p>
        <p>{state.number_of_word}</p>
       </div>

       <div style={{display:"flex",gap:'20px',
    fontStyle:'oblique',fontSize:'20px',fontWeight:'bold'}} >
        <p>Number of character : </p>
        <p>{state.number_of_character}</p>
       </div>

       <div style={{display:"flex",gap:'70px',
    fontStyle:'oblique',fontSize:'20px',fontWeight:'bold'}}>
        <p>Reading Time : </p>
        <p>{state.reading_time}</p>
       </div>

    </div>
    <h3 style={{textAlign:"center",fontSize:'25px',textDecoration:'underline',padding:'10px 10px',backgroundColor:"silver",margin:'10px 10px'}}>
        preview of text
    </h3>
    <textarea type="text" value={state.inputText} rows={10} cols={20} style={{width:'100%',padding:'10px 20px',fontStyle:"italic",fontSize:'20px',fontWeight:"bold",border:'2px solid brown',boxShadow:"2px 2px oranged "}}>{state.inputText} </textarea>
    </div>
    </>
  )
}

export default TextPage
