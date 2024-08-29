
import {useParams} from 'react-router-dom'
import React from 'react'

function BlogPost() {
    const {userId} = useParams()
    return (
        <h3>User ID: {userId}</h3>
    )
}

export default BlogPost