import React from 'react';
function SignUp() {
  return (
    <form action='/' class='form' method='post'>
      <div className='form'>
        <div class='form_name'>SIGN UP FOR DAILY INSIDER</div>
        <div>
          <input
            type='text'
            name='email'
            class='form_input'
            placeholder='Enter your Email'
            aria-label='Enter your Email'
          />
        </div>
        <button class='botton_text' name='Subscribe' type='submit'>
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default SignUp;
