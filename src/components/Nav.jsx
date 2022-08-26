import React from 'react';
import '../css/Nav.css';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from 'react-icons/ai';

function Nav() {
  return (
    <div>
      <div className='nav_form_1'>
        <div className='nav_form_item'>
          <h1>Explore</h1>
          <h2>Home</h2>
          <h2>Questions</h2>
          <h2>Articles</h2>
          <h2>Tutorials</h2>
        </div>
        <div className='nav_form_item'>
          <h1>Support</h1>
          <h2>FAQs</h2>
          <h2>Help</h2>
          <h2>Contact Us</h2>
        </div>
        <div className='nav_form_item'>
          <h1>Stay connected</h1>
          <div className='form_icon'>
            <AiFillFacebook size={100} />
            <AiFillTwitterSquare size={100} />
            <AiFillInstagram size={100} />
          </div>
        </div>
      </div>
      <div className='nav_form_2'>
        <h1 className='nav_form_2_text'>DEV@Deakin 2022</h1>
      </div>
      <div className='nav_form_3'>
          <h2 className='nav_form_item'>Privacy Policy</h2>
          <h2 className='nav_form_item'>Terms</h2>
          <h2 className='nav_form_item'>Code of Concuct</h2>
        </div>
    </div>
  );
}
export default Nav;
