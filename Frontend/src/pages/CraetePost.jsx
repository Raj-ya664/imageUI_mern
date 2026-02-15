import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CraetePost() {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        axios.post('http://localhost:3000/create-post',formData)
        .then((res)=>{
            navigate("/feed")
        })
        .catch((err)=>{
            console.log(err)
            alert("Error creating post")
        })
    }
  return (
    <section className='create-post-section'> 
        <h1> Create post </h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image"  accept="image/*"/>
             <input type="text" name="image"  accept="image/*"/>
             <button type="submit">Sumit</button>
        </form>
    </section>
  )
}

export default CraetePost
