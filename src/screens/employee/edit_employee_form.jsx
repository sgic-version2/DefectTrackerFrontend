import React from 'react';

const edit_employee_form = () => {
  return (
    <div>
      <div>
        <form className=' '>
          <div>
            <br />

            <label>First Name:</label>
            <input
              type='text'
              id=''
              className=''
              value=''
              placeholder='First Name'
            ></input>
            <br />

            <label>Last Name:</label>
            <input
              type='text'
              id=''
              className=''
              placeholder='Last Name'
            ></input>
            <br />

            <label>Phone Number:</label>
            <input
              type='text'
              id=''
              className=''
              placeholder='Phone Number'
            ></input>
            <br />

            <label>Designation:</label>
            <select id='' className=''>
              <option value='ADMIN'>ADMIN</option>
              <option value='USER'>USER</option>
              <option value='HR'>HR</option>
              <option value='PM'>PM</option>
              <option value='QAL'>QAL</option>
              <option value='TECL'>TECL</option>
              <option value='QA'>QA</option>
              <option value='DEV'>DEV</option>
            </select>
            <br />

            <label>Email:</label>
            <input type='text' id='' className='' placeholder='Email'></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default edit_employee_form;
