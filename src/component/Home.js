import React, { useState } from 'react'

function Home(props) {

  const [text, setTxt] = useState('');
  const [message, setMessage] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);


  const eventhandeler = (e) => {
    setTxt(e.target.value);
 
  }
  const capitalLater = (e) => {
    setTxt(text.toUpperCase());
    showMessage('Change to Upper case')
  }
  const smalLater = (e) => {
    setTxt(text.toLowerCase());
    showMessage('change to lower case')
  }
  const caps = (e) => {
    const capitailege = (text.trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '));
    setTxt(capitailege);
    showMessage('Capitalise');
  }
  const sentenceCare = (e) => {
    const wordCare = text.trim().split(' ').map((word) => word.charAt(0).toUpperCase() + word + '.').join(' ');
    setTxt(wordCare);
    showMessage('Change to sentence');
  }
  const removeSpace = (e) => {
    const extraSpaceReamove = (text.replace(/\s+/g, ' ').trim());
    setTxt(extraSpaceReamove);
    showMessage('extra space Remove')
  }
  const copyText = (e) => {
    navigator.clipboard.writeText(text);
    showMessage('Text copy') 
  }
  const textClear = (e) => {
    setTxt('');
    showMessage('Text clear')
  }
  const showMessage = (msg) => {
    setMessage(msg);
    if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
    const id = setTimeout(() => setMessage(''), 1000); // Clear message after 1 seconds
    setTimeoutId(id);
  }
  const word = text.trim() ? text.trim().split(/\s+/).length : 0;
  const character = text.length;
  return (
    <div className={`${props.dar ? "bg-black text-white" : "bg-white text-black w-full"} w-full mx-auto mt-8`}>

       {message && <div className="text-black-500 font-bold bg-green-200 h-12">
        {message}
      </div>}
      
      <div className="w-[75%] mx-auto ml-3 ">
        <h3 className="text-4xl font-bold  text-start">
          Enter Your Text to Analyze
        </h3>
        
          <textarea className={`px-2 ${props.dar ? "bg-black text-white" : " text-black"} w-full mt-3 border border-blue-700 
          rounded focus:outline-none`}
            rows="10"
            cols="20"
            onChange={eventhandeler}
            value={text}
          ></textarea>
        
      </div>
      <div className="m-4 flex justify-start ">
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded hover:before:`} onClick={capitalLater}>UperCase</button>
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded`} onClick={smalLater}>LowerCase</button>
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded`} onClick={caps}>Capitalise</button>
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded`} onClick={sentenceCare}>Sentence Care</button>
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded`} onClick={removeSpace}>Reamove Extra Space</button>
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded`} onClick={copyText}>Copy Text</button>
        <button disabled={text.length > 0 ? false : true} className={`${props.dar ? "bg-blue-800 text-white" : "bg-blue-500 text-white"} m-2 p-2 rounded`} onClick={textClear}>Clear Text</button>
      </div>
      <h3 className="text-4xl pt-12 text-start">
        Your Text Summery
      </h3>
      <p className='text-start'>Word count {word} Character count {character}</p>
      <h3 class="text-4xl pt-12 text-start">
        Preview
      </h3>
      <p className='text-start'> {text.length > 0 ? text : "Nothing to Preview"}</p>

    </div>
  )
}

export default Home
