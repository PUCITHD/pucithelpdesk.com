import React  from 'react';

export default function Header() {
    return (
        <>
            <header className="flex bg-slate-100 dark:text-white dark:bg-slate-800 mt-20 min-h-[60vh]">
                <div className='m-auto text-center'>
                    <h1 className='text-3xl lg:text-6xl mb-3 font-bold'>Welcome to Rice Directory</h1>
                    <h3 className='text-xl lg:text-3xl'>Join Hundreds of Rice Businesses today</h3>
                </div>
            </header>
        </>
    );
}