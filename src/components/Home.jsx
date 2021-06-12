import React, { useState } from 'react'
import {BiSave,BiRightArrow} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

function Home() {
  const [Code, setCode] = useState('')
  const history = useHistory()
  const Save =()=>{
    const element = document.querySelector('#code')
    if(Code.trim()){
      element.readOnly = 'true';
      axios
        .post('https://codebin951.herokuapp.com/addCode',{code:Code})
        .then(res => history.push(`/${res.data}`))
    }
  }
  const New =()=>{
    const element = document.querySelector('#code')
    element.readOnly = 'false';
    setCode('')

  }
    return (
        <>
      <div className="mainbody">
        <div className="navbar">
          <div className="logo">
            <p>copyPasteShare.com</p>
          </div>
          <div className="option">
            <div className="save">
              <button onClick={Save}><BiSave /></button>
            </div>
            <div className="new">
              <button onClick={New}><IoMdAdd /></button>
            </div>
          </div>
        </div>
        <div className="body">
          <p><BiRightArrow /></p>
          <textarea name="code" id="code" className="lined" placeholder="copy,paste,share your </> with others!! " spellCheck='false' value={Code} autoFocus onChange={(e)=>{setCode(e.target.value)}}></textarea>
        </div>
      </div>
    </>
    )
}

export default Home
