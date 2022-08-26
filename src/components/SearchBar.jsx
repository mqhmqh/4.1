import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <div className='form'>
      <div className='form_name'>DEV@Deakin</div>
      <div className='form_search'>
        <button className='form_search_icon'>
          <AiOutlineSearch color='black' size={40} />
        </button>
        <input className='form_input' type='text' placeholder='Search for something'></input>
      </div>
      <button className='botton_text'>Post</button>
      <button className='botton_text'>Login</button>
    </div>
  );
}
export default SearchBar;
