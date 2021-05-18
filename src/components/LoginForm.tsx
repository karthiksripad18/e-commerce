import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {FAKEAPIURL} from '../common/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setActiveUser} from '../redux/userSlice';
import {Redirect, useLocation} from 'react-router-dom';

const LoginForm = () => {
    const {state: {from: fromLocation} } : any = useLocation();
    const [redirectToreferrer, setRedirectToreferrer] = useState<boolean>(false);
    const dispatch = useDispatch();
    const initialValues = {
        username: '',
        password: '',
    };
    const validationSchema = Yup.object().shape(
        {
            username: Yup.string().required(),
            password: Yup.string().required()
        }
    );
    const onSubmit = (values: any, props: any) => {
        axios.post(`${FAKEAPIURL}auth/login`, {
            username: values.username,
            password: values.password
        }).then(
            ({data : {token}}) => {
                dispatch(setActiveUser({
                    username: values.username,
                    token: token
                }))
                setRedirectToreferrer(true);
            }
        )
        .catch(
            (err) => console.log(err)
        )
    }

    if (redirectToreferrer) return <Redirect to={fromLocation} />

    return (
        <div className="w-3/4 h-1/2 flex flex-col font-serif bg-white rounded shadowed-2xl md:w-1/4">
            <div className="w-full h-1/4 flex justify-center items-center">
                <p className="text-4xl text-primary text-black font-rochester text-bold">Login here</p>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    formik => (
                        <Form className="w-full h-3/4 flex flex-col justify-center items-center">
                            <div className="w-full my-2 flex justify-center items-center">
                                <label htmlFor='username'><FontAwesomeIcon icon={faUser} color={"black"} /></label>
                                <Field type="text" className="ml-2 w-3/4 h-10 rounded bg-primary text-white text-center" name="username" placeholder='Enter username' required />   
                            </div>
                            <div className="w-full my-2 flex justify-center items-center">
                                <label htmlFor='password'><FontAwesomeIcon icon={faUnlock} color={"black"} /></label>
                                <Field type="password" className="ml-2 w-3/4 h-10 rounded bg-primary text-white text-center" name="password" placeholder='Enter password' required />
                            </div>
                            <button className="bg-primaryButton mt-2 rounded w-1/4 h-10">Login</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default LoginForm;
