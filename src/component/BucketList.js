import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function BucketList(){
  const [buckets, setBuckets] = useState([])

  async function getBuckets(){
    try {
      const url = await fetch('http://localhost:8080/blist')
      const json = await url.json()
      setBuckets(json)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getBuckets()
  }, [buckets.length])

  return (
    <>
      <table>
        <thead>
            <tr>
              <th>name</th>
              <th>where</th>
              <th>what</th>
              <th>amigos</th>
              <th>$$</th>
            </tr>
        </thead>
        <tbody>{buckets && buckets.map(bucket => (
          <tr key={bucket._id}>
            <td>{bucket.name}</td>
            <td>{bucket.location}</td>
            <td>{bucket.activity}</td>
            <td>{bucket.friends}</td>
            <td>{bucket.costs}</td>
            <td><Link to={`/blist/${bucket._id}`}>View Bucket</Link></td>
          </tr>
        ))}
        </tbody>
      </table>
      <Link to={'/blist/new'}>Create New Bucket</Link>
    </>
  )
}
