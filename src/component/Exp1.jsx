import {useState,useEffect} from 'react'
import { getPostPage } from '../api/axios'
import Post from './Post'


const Exp1 = () => {

    const [page,setPage] = useState(1)
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        getPostPage(page).then(json => setPosts(json))
    },[page])


    const  content = posts.map(post => <Post key={post.id} post={post} />)


    const nextPage =()=>setPage(prev=> prev + 1)
    const prevPage =()=>setPage(prev=> prev - 1)



  return (
    <>
    <nav>
        <button onClick={prevPage} disabled={page===1} >Prev Page</button>
        <button onClick={nextPage} disabled={!posts.length} >Next Page</button>
    </nav>
    {content}
    </>
  )
}

export default Exp1
