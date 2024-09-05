import React, { useEffect } from 'react'

const Post = ({data, setPage}) => {

    useEffect(() => {
        const observer = new IntersectionObserver((param) => {
            if(param[0].isIntersecting){
                observer.unobserve(lastImage)
                setPage((pageNo) => pageNo + 1);
            }
        },{threshold:0.5}
    )

        let lastImage = document.querySelector(".imagePost:last-child")

        if(!lastImage){
            return
        }
        observer.observe(lastImage);
        
        return () => {
            if(lastImage){
                observer.unobserve(lastImage);
            }
            observer.disconnect();
        }
    }, [data])

  return (
    <div className='container'>
        {
            data.map((item, index) => {
                return <img className='imagePost' key={index} src={item.download_url} alt="" />
            })
        }
    </div>
  )
}

export default Post