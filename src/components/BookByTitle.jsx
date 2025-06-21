import useFetch from "../useFetch";

const BookByTitle = ({title}) =>{
    const {data,loading,error} = useFetch(`https://backend-book-api.vercel.app/books/title/${title}`)
    // const {data,loading,error} = useFetch(`http://localhost:3000/books/title/${title}`);
    
    // console.log(data);

    return (
        <div className="py-4">
            {loading ? (
                <p className="mt-3 fw-bold fs-3">Loading...</p>
            ) : (
                <div className="card text-black py-2" style={{backgroundColor:"pink"}}> 
                <div className="card-body">
                    {data ? (
                    <div className="fs-5">
                        <h1 className="display-4" style={{fontFamily:"-moz-initial"}}>{data.title}</h1><hr />
                        <p><strong>Author: </strong>{data.author}</p>
                        <p><strong>Release Year: </strong>{data.publishedYear}</p>
                        <p><strong>Genre: </strong>{data.genre.join(", ")}</p>
                    </div>
                    ) : (
                     <p className="mt-3 fw-bold fs-3">An error occurred while fetching the data. {error}</p>
                    )}
                </div>   
                </div>
            )}
        </div>
    )
}

export default BookByTitle;