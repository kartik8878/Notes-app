import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import { v4 as uuid} from 'uuid';

function Create({setNotes}) {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();

      if (title && detail){
          const note = {id: uuid(), title,detail}
          setNotes(prevNotes => [note, ...prevNotes])
          navigate('/')

      }
    }
    

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack/></Link>
                <button className="btn lg primary" onClick={handleSubmit}>Save</button>
            </header>
            <form className="create-note__form" onClick={()=> handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}/>
                <textarea
                    rows="28"
                    placeholder="note details..."
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                ></textarea>
            </form>
        </section>
    );
}

export default Create;