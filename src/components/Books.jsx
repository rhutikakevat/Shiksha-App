import { useState } from "react";
import useFetch from "../useFetch";
import { HiArchiveBoxXMark } from "react-icons/hi2";

const Books = () =>{
    const [successMessage, setSuccessMessage] = useState("");

    const {data,loading,error} = useFetch("https://backend-book-api.vercel.app/books")
    // const {data,loading,error} = useFetch("http://localHost:3000/books")

    // console.log(data);

    const handleOfDelete = async (bookId) =>{
        try{
            const response = await fetch(`https://backend-book-api.vercel.app/books/${bookId}`,{
                method: "DELETE"
            })

            if(!response.ok){
                throw "Failed to delete books data"
            }else{
                const data = await response.json()

                if(data){
                    setSuccessMessage("Book deleted successfully")
                    window.location.reload()
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="py-3">
            <h1 className="py-2 display-4" style={{fontFamily:"-moz-initial"}}>All Books</h1> 
            {!loading ? (
                <div>
                    {data && data.length > 0 ? (
                       <div>
                         <ul className="list-group">
                            {data.map((book)=>(
                                <li key={book._id} className="list-group-item fw-semibold bg-warning fs-5">
                                    <span>{book.title}
                                        <button className="float-end rounded btn btn-dark" onClick={()=>handleOfDelete(book._id)}>
                                            <HiArchiveBoxXMark/>
                                        </button>
                                    </span>
                                </li>))}
                        </ul>

                        <p className="mt-3 fw-bold fs-3">{successMessage}</p>
                       </div>
                    ):(
                     <p className="mt-3 fw-bold fs-3">An error occurred while fetching the books data.  {error}</p>
                    )}
                </div>
            ) : (
               <p className="mt-3 fw-bold fs-3">Loading...</p>
            ) }

        
        </div>                  
    )
}

export default Books;