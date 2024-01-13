import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {RiDeleteBin6Line} from "react-icons/ri";

function EditNotes({notes, setNotes}) {
    const {id} = useParams();
    const note = notes.find((item) => item.id === id);
    const [title, setTitle] = useState(note.title);
    const [detail, setDetail] = useState(note.detail);
    const navigate = useNavigate()
    const handleForm = (e) => {
      e.preventDefault();

      if (title && detail){
          const newNote = {...notes, title, detail}

          const newNotes = notes.map((item) => {
              if (item.id === id){
                  item = newNote;
              }
              return item;
          })
          setNotes(newNotes)
      }
      navigate('/')
    }

    const handleDelete = () => {
        if (window.confirm("are you want to delete")){
            const newNotes = notes.filter(item => item.id !== id);

            setNotes(newNotes);
            navigate('/')
        }

    }
    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack/></Link>
                <button className="btn lg primary" onClick={handleForm}>Save</button>
                <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line/></button>
            </header>
            <form className="create-note__form" onSubmit={handleForm}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    autoFocus/>
                <textarea
                    rows="28"
                    value={detail}
                    onChange={(e)=> setDetail(e.target.value)}
                    placeholder="note details..."></textarea>
            </form>
        </section>
    );
}

export default EditNotes;