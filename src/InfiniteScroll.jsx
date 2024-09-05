import React, { useEffect, useState } from 'react'
import Post from './Post'

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getdata();
    }, [page])

    async function getdata(){
        let data = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
        let json = await data.json();
        setData((prev) => [...prev, ...json]);
    }
  return (
    <div>
        <Post data = {data} setPage={setPage}/>
    </div>
  )
}

export default InfiniteScroll