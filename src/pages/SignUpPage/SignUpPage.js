import SignUpDetailsCard from '../../features/SignUpForm/SignUpDetailsCard';
import SignupForm from '../../features/SignUpForm/SignUpForm'
import './SignUpPage.scss';

function SignUpPage(){
  return (
<div className="Form-container">
<div className='signUp-page'>
       <div className="left-section "><p className="signUpTitle">Welcome to<span className="head-black block">DataLake 3.0</span></p></div>
       <div className="right-section  mt-32">
        <SignupForm/>
        {/* <SignUpDetailsCard/> */}
       </div>
    </div>
</div>
)}

export default SignUpPage;