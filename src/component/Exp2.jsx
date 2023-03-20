import {useState} from 'react'
import { useQuery } from "react-query";
import { getUserPage } from '../api/axios';
import PageButton from './PageButton'
import User from './User';



const Exp2 = () => {

    const [page,setPage] = useState(1)

    const {
        isLoading,
        isError,
        error,
        data:users,
        isFetching,
        isPreviousData,

    } = useQuery(['/users',page],()=>getUserPage(page),{
        keepPreviousData:true
    })

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error :{error} </p>
    const content = users.data.map(user=><User key={user.id} user={user} />)

    // const nextPage = ()=>setPage(prev=>prev + 1)
    // const prevPage = ()=>setPage(prev=>prev - 1)
    const lastPage = ()=>setPage(users.total_pages)
    const firstPage = ()=>setPage(1)

    const pagesArray = Array(users.total_pages).fill().map((_,index)=>index + 1)


    const nav =(
        <nav>
            <button onClick={firstPage} disabled={isPreviousData || page ===1}>&lt;&lt;</button>
            {pagesArray.map(pg => <PageButton key={pg} pg={pg} setPage={setPage} isPreviousData={isPreviousData} />)}
            <button onClick={lastPage} disabled={isPreviousData || page ===users.total_pages}>&gt;&gt;</button>
        </nav>
    )


  return (
    <>
      {nav}
      {isFetching && <span className='loading'>Loading</span>}
      {content}
    </>
  )
}

export default Exp2
