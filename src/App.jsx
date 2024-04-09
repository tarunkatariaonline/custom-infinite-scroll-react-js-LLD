import { useEffect, useState } from "react"
import Card from "./Components/Card"
import Shimmer from "./Components/Shimmer";

function App() {
 const [memes,setMemes] = useState([]);
 const [showLoading,setShowLoading] = useState (true);

   const fetchMemes = async()=>{
    const res = await  fetch('https://meme-api.com/gimme/20');
    const  json = await res.json();
    // console.log(json.memes)
    setMemes((memes)=>[...memes,...json.memes]);
    setShowLoading(false )
   }
   const scrollEventHandler = async()=>{
   

    //  console.log(window.scrollY)
    //  console.log(window.innerHeight)
    //  console.log(document.body.scrollHeight)
    if((window.scrollY+window.innerHeight)>=document.body.scrollHeight-1){
       console.log("I am called")
       setShowLoading(true)
    fetchMemes()
    }
   
   }

   useEffect(()=>{
    console.log("hello ")
    window.addEventListener("scroll",scrollEventHandler)
   },[])
  useEffect(()=>{
    fetchMemes()
  },[])

  return (
    <>
    <div className=" flex w-full flex-wrap p-10 justify-center">

      {memes.map((meme,index)=>{
        return   <Card key={index} memeData ={meme}/>
      })}
    

    {showLoading&&<Shimmer/>}
    
    </div>
    </>
  )
}

export default App
