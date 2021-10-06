import React, {useState, useEffect} from 'react'

const EditForm = (props) => {
  const [editInput, setEditInput] = useState()
  const [loading, setLoading] = useState(true)
  console.log(props);

    const handleChange = (event) => {
      setEditInput({
        ...editInput,
        [event.target.name]: event.target.value
      })
    }

    const updateBucket = async (id, data) => {

      const config = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const update = await fetch(`http:localhost:8080/blist/${id}`, config)
      const parsedData = await update.json()
      props.history.push("/blist/"+id)
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      const { name, location, activity, friends, costs } = editInput
      const bucketData = { name, location, activity, friends, costs }
      updateBucket(editInput._id, bucketData)
    }

    const getBucket = async () => {
      try {
        const id = props.match.params.id
        const update = await fetch(`http:localhost:8080/blist/${id}`)
        const parsed = await update.json()
        setEditInput(parsed)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getBucket()
    }, [])

  return (
    <div>
      <h1>Edit Bucket List</h1>
      { loading ? <h3>Loading...</h3> :
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
           <input type="text" value={editInput.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Location</label>
           <input type="text" value={editInput.location} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Cost</label>
           <input type="text" value={editInput.costs} onChange={handleChange} />
        </div>
      </form>
      }
    </div>
  )
}



export default EditForm
