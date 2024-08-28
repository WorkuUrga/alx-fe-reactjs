import React from 'react'
import {useQuery} from 'react-query'

const fetchData = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const {data, error, isError, isLoading, refetch} = useQuery('fetchData', fetchData);
    if (isLoading) return <div>Loading...</div>
    if(isError) return <div>Error loading data</div>
    return (
    <div>
        {data.map(item => (
            <div key={item.id}>{item.name}</div>
        ))}
        <button onClick={()=> refetch}>Refetch Data</button>
    </div>
    )
}

export default PostsComponent