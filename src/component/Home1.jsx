import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home1({ dark }) {
  const [text, setText] = useState('');

  const UpperCase = () => {
    if(!text){
      toast.error('Text is empty!');
      return;
    }
    const checkUpper = (text === text.toUpperCase());
    if (checkUpper) {
      toast.info('Text is already in UpperCase!');
      return;
    }
    setText(text.toUpperCase());
    toast.success('Changed to UpperCase!', {
      position: "top-center"
    });
  };
  const LoverCase = () => {
    if(!text){
      toast.error('Text is empty!');
      return;
    }
    const checkLower = (text === text.toLowerCase());
    if (checkLower) {
      toast.info('Text is already in LowerCase!');
      return;
    }
    setText(text.toLowerCase())
    toast.success('Changed to LowerCase!', {
      position: 'top-center'
    })
  }

  const Capitalies = () => {
    if (!text) {
      toast.error('Text is empty!', { position: 'top-center' });
      return;
    }
    const isCapitalized = text
      .split(' ')
      .every((word) => word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  
    if (isCapitalized) {
      toast.info('This is already capitalized!', { position: 'top-center' });
      return;
    }
    const capitalizedText = text
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  
    setText(capitalizedText);
  
    toast.success('Changed to Capitalized!', { position: 'top-center' });
  };
  
  const sentenceCare = () => {
    if (!text) {
      toast.error("Text is empty!", { position: "top-center" });
      return;
    }
    const words = text.trim().split(" ");
    const isSentenceCare = text.trim().charAt(0) === text.trim().charAt(0).toUpperCase() &&
      text.trim().slice(1) === text.trim().slice(1).toLowerCase() &&
      text.trim().endsWith(".");

    if (isSentenceCare) {
      toast.info("Text is already in SentenceCare format!", { position: "top-center" });
      return;
    }
    const wordCare = words
      .map((word, index) => {
        if (index === 0) {
          // Keep the first word's first character capitalized
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        // Convert other words to lowercase
        return word.toLowerCase();
      })
      .join(" ");
    const result = wordCare.endsWith(".") ? wordCare : `${wordCare}.`;
    setText(result);
    toast.success("Changed to SentenceCare!", { position: "top-center" });
  };

  const RemoveExtrSpc = () => {
    if(!text){
      toast.error('Text is empty!');
      return;
    }
    const extraSpcRemov = (text.replace(/\s+/g, '').trim());
    setText(extraSpcRemov);
    toast.success('Removed the Extra Spacess!', { position: 'top-center' });
  }
  const copyText = () =>
  {
    navigator.clipboard.writeText(text);
    toast.success('Copyed text!')
  }
  const ClearText = () =>{
    setText('');
    toast.success('ClearText!')
  }
  const word =text.trim() ? text.trim().split(/\s+/).length : 0;
  const char = text.length;
  return (
    <>
      <div className={`w-full h-screen px-4 md:px-20 py-10 mx-auto ${dark ? ' bg-black text-white' : ' bg-yellow-50 '}`}>
        <h1 className='text-xl md:text-3xl font-bold py-14'>Enter your Text to Analyze</h1>
        <textarea className={`w-full border-2 h-40 outline-none p-2 ${dark ? 'bg-black text-white' : ''}`} name="" id="" onChange={(e) => setText(e.target.value)} value={text}></textarea>
        <div className='space-x-4 space-y-4 text-xs md:text-sm lg:text-sm'>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={UpperCase}>UpperCase</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={LoverCase}>LowerCase</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={Capitalies}>Capitalies</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={sentenceCare}>Sentence Care</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={RemoveExtrSpc}>Reamove extra space</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={copyText}>Copy Text</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md text-white font-semibold cursor-pointer' onClick={ClearText}>Clear Text</button>
        </div>
        <div>
          <ToastContainer />
          <h1 className='text-sm md:text-2xl font-bold py-2'>Your Text Summery</h1>
          <span className='font-semibold'>Word Count{word } Charrecter Count {char }</span>
        </div>
        <div className='py-4'>
          <h1 className='text-sm md:text-2xl font-bold'>Preview</h1>
          <span className='font-semibold'>{text.length > 0 ? text : 'Nothing to preview'}</span>
        </div>
      </div>
    </>
  )
}

export default Home1
