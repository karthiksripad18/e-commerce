import React, {useState} from 'react';
import {firebaseAppAuth, providers} from '../firebase';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {AUTH_TYPE} from '../common/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setActiveUser} from '../redux/userSlice';
import {setLoading} from '../redux/loadingSlice';
import {Redirect, useLocation} from 'react-router-dom';

interface userState {
    username: string | null;
    password: string | null;
}

const LoginForm: React.FC = () => {
    const [errMsg, setErrMsg] = useState('');
    const { state } : any = useLocation();
    const fromLocation = state? state.from: "/";
    const [redirectToreferrer, setRedirectToreferrer] = useState(false);
    const dispatch = useDispatch();
    const initialValues: userState = {
        username: 'mor_2314',
        password: '83r5^_',
    };
    const validationSchema = Yup.object().shape(
        {
            username: Yup.string().required(),
            password: Yup.string().required()
        }
    );
    
    const handleSignIn = (authType: string) => {
        const auth = authType === AUTH_TYPE.google? providers.googleProvider: providers.facebookProvider;
        firebaseAppAuth.signInWithPopup(auth).then(
            (result) => {
                dispatch(setActiveUser({
                    userName: result.user?.displayName,
                    userEmail: result.user?.email,
                }))
                setRedirectToreferrer(true);
            }
        )
        .catch(
            (error) => setErrMsg(error)
        )
    };

    const onSubmit = (values: any, props: any) => {
        dispatch(setLoading({isLoading: true, loadingMessage: "Logging In"}));
        axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {
            username: values.username,
            password: values.password
        }).then(
            ({data}: {data: any}) => {
                if (data.token !== undefined) {
                    dispatch(setActiveUser({
                        username: values.username,
                        password: values.password,
                        token: data.token
                    }))
                    sessionStorage.setItem('username', values.username);
                    sessionStorage.setItem('token', data.token);
                    setRedirectToreferrer(true);
                } else {
                    let errMsg = data.msg;
                    setErrMsg(errMsg);

                }
                dispatch(setLoading({isLoading: false, loadingMessage: null}));
                
            }
        )
        .catch(
            (err) => console.log(err)
        )
    }

    if (redirectToreferrer) return <Redirect to={fromLocation} />

    return (
        <div className="flex flex-col w-3/4 bg-white rounded h-1/2 font-limelight shadowed-2xl md:w-1/4">
            <div className="flex flex-col items-center justify-center w-full h-1/4">
                <p className="text-4xl text-black text-primary text-bold">Login here</p>
                <p className={errMsg? "text-red-500 pt-2 opacity-100": "opacity-0"}>{errMsg}</p>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    formik => (
                        <Form className="flex flex-col items-center justify-center w-full h-2/3">
                            <div className="flex items-center justify-center w-full my-2">
                                <label htmlFor='username'><FontAwesomeIcon icon={faUser} color={"black"} /></label>
                                <Field type="text" autoComplete="off" className="w-3/4 h-10 ml-2 text-center text-white rounded bg-primary" name="username" placeholder='Enter username' required />   
                            </div>
                            <div className="flex items-center justify-center w-full my-2">
                                <label htmlFor='password'><FontAwesomeIcon icon={faUnlock} color={"black"} /></label>
                                <Field type="password" className="w-3/4 h-10 ml-2 text-center text-white rounded bg-primary" name="password" placeholder='Enter password' required />
                            </div>
                            <button className="w-1/4 h-10 mt-2 rounded hover-effect bg-primaryButton">Login</button>
                        </Form>
                    )
                }
            </Formik>
            <div className="flex justify-center">
                <hr className="w-3/4 border-black" />
            </div>
            <div className="flex items-center justify-center">
                <button onClick={() => handleSignIn(AUTH_TYPE.google)} className="m-3 text-black"><FontAwesomeIcon icon={faGoogle} size="lg" /></button>
                <button onClick={() => handleSignIn(AUTH_TYPE.facebook)} className="m-3 text-black"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /></button>
            </div>
        </div>
    )
}

export default LoginForm;
