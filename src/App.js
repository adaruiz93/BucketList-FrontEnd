import {useState, useEffect} from 'react'
import './App.css';
import NewForm from './component/NewForm';
import CreateList from './component/NewForm';

function App() {
  const [bucketList, setBucketList] = useState([])

  const getBucketList = async () => {
    try {
      const getList = await fetch("http://localhost:8080/blist")
      const jsonList = await getList.json()
      setBucketList(jsonList)
      console.log(bucketList, jsonList)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBucketList()
  })

  return (
    <div className="App">
      <NewForm />
      <h1>Bucket List</h1>
      <thead>
        <tr>
          <th>name</th>
          <th>where</th>
          <th>what</th>
          <th>amigos</th>
          <th>$$</th>
        </tr>
      </thead>
      <table>
        <tbody>{bucketList && bucketList.map(bucket => (
          <tr>
            <td>{bucket.name}</td>
            <td>{bucket.location}</td>
            <td>{bucket.activity}</td>
            <td>{bucket.friends}</td>
            <td>{bucket.costs}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

/*
remote = github
pull from remote main into local main after merge on remote
checkout feature branch, merge local main code into feature branch


*/
