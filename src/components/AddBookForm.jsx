import { useState } from "react";
import { HiCheckBadge } from "react-icons/hi2";

const AddBookForm = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const [formData, setFormData] = useState({
        title:"",
        author:"",
        publishedYear:"",
        genre:"",
        language:"",
        country:"",
        rating:"",
        summary:"",
        coverImageUrl:""
    })

    const handlerOfChange = (event) =>{
           const {name,value} = event.target;
           
           setFormData((prevState)=>({...prevState,
            [name]: name === "publishedYear" || name === "rating" ? parseFloat(value) : value
           }))
    }

    const formHandler = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch("https://backend-book-api.vercel.app/books", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(formData),
            });

            if(!response.ok){
                throw "Failed to fetch the data"
            }else{
                const data = await response.json()

                if(data){
                    setSuccessMessage("Movie added successfully.")
                    window.location.reload()
                    // console.log(data);
                }
                
            }
        }catch(error){
            console.log(error)
        }
    }
    
    return(
        <div className="py-3">
        <h1 className="py-2 display-4" style={{fontFamily:"-moz-initial"}}>Add New Book</h1>
        <form onSubmit={formHandler} className="py-2">
            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Title: </label><br/>
            <input type="text" className="form-control" name="title" value={formData.title} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Author: </label><br/>
            <input type="text" className="form-control" name="author" value={formData.author} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Published Year: </label><br/>
            <input type="number" className="form-control" name="publishedYear" value={formData.publishedYear} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Genre: </label><br/>
            <input type="text" className="form-control" placeholder="Fiction, Self-help, Business, Autobiography, Mystery, Thriller, Non-Fiction, Romance" name="genre" value={formData.genre} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Language: </label><br/>
            <input type="text" className="form-control" name="language" value={formData.language} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Country: </label><br/>
            <input type="text" className="form-control" name="country" value={formData.country} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>rating: </label><br/>
            <input type="number" className="form-control" placeholder="Write between 1 to 10" name="rating" value={formData.rating} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Summary: </label><br/>
            <input type="text" className="form-control" name="summary" value={formData.summary} onChange={handlerOfChange}/>
            <br />

            <label className="fs-4" style={{fontFamily:"-moz-initial"}}>coverImageUrl: </label><br/>
            <input type="text" className="form-control" name="coverImageUrl" value={formData.coverImageUrl} onChange={handlerOfChange}/>
            <br />

            <button className="btn btn-outline-primary fw-bold fs-4 mt-3">Submit <HiCheckBadge /></button>
        </form>

        <p className="mt-3 fw-bold fs-3">{successMessage}</p>
        </div>
    )
}

export default AddBookForm;
