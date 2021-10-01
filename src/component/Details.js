import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Details(props){
  const currentId = props.params.currentId
  const [bucket, setBucket] = useState({})
  const [loading, setLoading]= useState(true)
  console.log(bucket);

  const getBucket = async (id) => {
    try {
      const foundBucket = await fetch(`http://localhost:8080/blist/${id}`)
      const parsedBucket = await foundBucket.json()
      setBucket(parsedBucket)
    } catch (error) {
      console.log(error);
    }
    setLoading(!loading)
  }

  useEffect(()=>{
    getBucket(currentId)
  })

  return (
    <>
      { loading ? <h3>loading...</h3> : (
        <div>
          <h1>Details for: {currentId}</h1>
          <p>{bucket.name}</p>
          <p>{bucket.location}</p>
        </div>
      ) }
      <Link to="/blist">Go Back</Link>
    </>
  )
}