import React from 'react';

const SignIn=()=>
{
  return(
    <>
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Keep me sign in</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  );
}


const SignUp=()=>
{
  return(
    <>
    <form>
      <div className="row g-2 mb-3">
        <div className='col-6'>
          <label for="InputFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="InputFirstName"/>
        </div>
        <div className='col-6 '>
        <label for="InputLastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="InputFirstName"/>
        </div>
      </div>

        <div className="mb-3 col-12">
          <label for="InputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3 col-12">
          <label for="InputPhone" className="form-label">Phone Number</label>
          <input type="email" className="form-control" id="InputPhone" aria-describedby="emailHelp"/>
        </div>

        <div className="row g-2 mb-3">
          <div className='col-6'>
          <label for="InputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="InputPassword1"/>
          </div>
          <div className='col-6'>
          <label for="InputPassword2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="InputPassword2"/>
          </div>
        </div>


        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Terms & Conditions</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary mx-5">Clear</button>
     </form>
    </>
  );
}



export {SignIn,SignUp};