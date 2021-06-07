import React, {useState} from 'react';
import {firebaseAppAuth, providers} from '../firebase';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FAKEAPIURL, AUTH_TYPE} from '../common/constants';
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
        axios.post(`${FAKEAPIURL}auth/login`, {
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
        <div className="w-3/4 h-1/2 flex flex-col font-limelight bg-white rounded shadowed-2xl md:w-1/4">
            <div className="w-full h-1/4 flex flex-col justify-center items-center">
                <p className="text-4xl text-primary text-black text-bold">Login here</p>
                <p className={errMsg? "text-red-500 pt-2 opacity-100": "opacity-0"}>{errMsg}</p>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    formik => (
                        <Form className="w-full h-2/3 flex flex-col justify-center items-center">
                            <div className="w-full my-2 flex justify-center items-center">
                                <label htmlFor='username'><FontAwesomeIcon icon={faUser} color={"black"} /></label>
                                <Field type="text" autoComplete="off" className="ml-2 w-3/4 h-10 rounded bg-primary text-white text-center" name="username" placeholder='Enter username' required />   
                            </div>
                            <div className="w-full my-2 flex justify-center items-center">
                                <label htmlFor='password'><FontAwesomeIcon icon={faUnlock} color={"black"} /></label>
                                <Field type="password" className="ml-2 w-3/4 h-10 rounded bg-primary text-white text-center" name="password" placeholder='Enter password' required />
                            </div>
                            <button className="hover-effect bg-primaryButton mt-2 rounded w-1/4 h-10">Login</button>
                        </Form>
                    )
                }
            </Formik>
            <div className="flex justify-center">
                <hr className="border-black w-3/4" />
            </div>
            <div className="flex justify-center items-center">
                <button onClick={() => handleSignIn(AUTH_TYPE.google)} className="text-black m-3"><FontAwesomeIcon icon={faGoogle} size="lg" /></button>
                <button onClick={() => handleSignIn(AUTH_TYPE.facebook)} className="text-black m-3"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /></button>
            </div>
        </div>
    )
}

export default LoginForm;
