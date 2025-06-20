import useFetch from "../useFetch";

const BookByAuthor = ({author}) => {
    const {data,loading,error} = useFetch(`https://backend-book-api.vercel.app/books/author/${author}`)
    
    // const {data,loading,error} = useFetch(`http://localHost:3000/books/author/${author}`)
    
    // console.log(data);

    return (
        <div className="rounded"> 
            {loading ? (
                <p className="mt-3 fw-bold fs-3">Loading...</p>
            ) : (
                <div className="mt-3 mb-5">
                    {data && data.length > 0 ? (
                        <ul className="list-group">
                            {data.map((book)=><li  style={{backgroundColor:"lightblue"}} className="list-group-item fw-semibold" key={book._id}><span className="fs-5">{book.title}</span></li>)}
                        </ul>
                    ) : (
                        <p className="mt-3 fw-bold fs-3">An error occured while fetching the data.  {error}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default BookByAuthor;