import React from 'react';

const FormSignup = () => {
    return (
       <div className="form-content-right">
           <form className="form">
               <h1>Get started with us today! Create your account by filling out the information below.</h1>
               <div className="form inputs">
                  <label htmlFor="username"
                         className="form-label">
                      <input type="text"
                             name="username"
                             className="form-input"/>
                  </label>
               </div>
           </form>
       </div>
    );

}

export default FormSignup;