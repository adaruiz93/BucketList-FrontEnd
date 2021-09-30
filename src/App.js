import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [bucketList, setBucketList] = useState("")

  const getBucketList = async () => {
    try{
      const getList = await fetch("http://localhost:8080/blist")
      const jsonList = await getList.json()
      setBucketList(jsonList)
      console.log(bucketList, jsonList)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getBucketList()
  }, [])

  return (
    <div className="App">
      <h1>Bucket List</h1>
    </div>
  );
}

export default App;
