import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function About() {
    return (
        <>
            <Navbar selected="about"/>
            <div className=''>
                <section className="bg-slate-100 dark:text-white dark:bg-slate-800 min-h-[100vh]">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Powered by Students</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Everyone from Applicants to Alumni is involved in PUCIT Help Desk.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        </div>                
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}