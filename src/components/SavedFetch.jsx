import React, { useEffect, useState } from "react";
import { BiSave, BiRightArrow } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SavedFetch({match,location}) {
    console.log(match)
    console.log(location);
    const history = useHistory()
    var [loading, setloading] = useState(true)
    const [Code, setCode] = useState('')

    useEffect(() => {
    setloading(true)
    axios.post('https://codebin951.herokuapp.com/getCode',{id:match.params.id}) 
    .then(res => setCode(res.data.code))
    setloading(false)

    }, [])


  const New = () => {
    history.push('/')
  };
  if(loading){
      return (
          <h1>Loading....</h1>
      )
  }
  return (
    <>
      <div className="mainbody">
        <div className="navbar">
          <div className="logo">
            <p>copyPasteShare.com</p>
          </div>
          
          <div className="option">
          <div className="link" onClick={() => {navigator.clipboard.writeText(`http://localhost:3000/#/${match.params.id}`);alert('copied to clipboard!!!')}}>
              <em><MdContentCopy /></em>
              <p>/copylink</p>
          </div>
            <div className="new">
              <button onClick={New}>
                <IoMdAdd />
              </button>
            </div>
          </div>
        </div>
        <div className="body">
          <p>
            <BiRightArrow />
          </p>
          
          <textarea
            name="code"
            id="code"
            value={Code}
            className="lined"
            placeholder="copy,paste,share your </> with others!! "
            spellCheck="false"
            readOnly
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default SavedFetch;
