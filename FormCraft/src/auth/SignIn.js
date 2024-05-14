import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import google from '../images/google.png';
import { SignInWithGoogle } from '../firebase-config/firebase-config';
import logo from "../images/logo.png"

const SignIn = ({ open, setOpen }) => {

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">

                                                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                                        <img
                                                            className="mx-auto h-10 w-auto"
                                                            src={logo}
                                                            alt="FormCraft"
                                                        />
                                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                                            Sign in to your account
                                                        </h2>
                                                    </div>

                                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); return false; }}>
                                                            <div>
                                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Email address
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        required
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="flex items-center justify-between">
                                                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Password
                                                                    </label>
                                                                    <div className="text-sm">
                                                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                                            Forgot password?
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <input
                                                                        id="password"
                                                                        name="password"
                                                                        type="password"
                                                                        autoComplete="current-password"
                                                                        required
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <button
                                                                    type='submit'
                                                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                >
                                                                    Sign in
                                                                </button>

                                                                <div className='text-center text-sm text-gray-500'>
                                                                    <p>Or</p>
                                                                </div>

                                                                <button
                                                                    type='submit'
                                                                    onClick={SignInWithGoogle}
                                                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-gray-100 text-black hover:bg-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                >
                                                                    <img
                                                                        className="h-6 w-auto mr-2"
                                                                        src={google}
                                                                        alt="Your Company"
                                                                    />
                                                                    Sign in with Google
                                                                </button>
                                                            </div>
                                                        </form>

                                                        <p className="mt-10 text-center text-sm text-gray-500">
                                                            Not a member?{' '}
                                                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                                                SignUp here
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>


        </>
    );
}

export default SignIn;