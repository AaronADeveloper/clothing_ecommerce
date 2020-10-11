import React from 'react'
import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss'
import SignIn from '../sign-in/sign-in'
import SignUp from '../sign-up/sign-up'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}


export default SignInAndSignUpPage;
