import './App.css'
import Books from './components/Books'
import BookByTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByAuthor'
import AddBookForm from './components/AddBookForm'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App (){
    return (
        <main className='container-fuild px-2 px-md-3 py-3'>
        <div className='row'>
            <div className='col-12 col-md-10 col-lg-8 mx-auto'>
        <AddBookForm/><hr />

        <Books/><hr/>

        <BookByTitle title = "Shoe Dog" /><hr/>

        <h1 className="py-2 display-4" style={{fontFamily:"-moz-initial"}}>Books by F. Scott Fitzgerald</h1>

        <BookByAuthor author = "F. Scott Fitzgerald" />
         </div>
        </div>
        </main>
    )
}