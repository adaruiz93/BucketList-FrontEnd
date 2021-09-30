import {useState} from 'react'
import './App.css';

function App() {
  const [bucketList, setBucketList] = useState("")
  return (
    <div className="App">
      <h1>Bucket List</h1>
    </div>
  );
}

export default App;
