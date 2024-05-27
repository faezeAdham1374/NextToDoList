import * as React from 'react';
import { FaGithub } from "react-icons/fa";
function Header() {
    return (
        <div className='grid-cols-1 flex flex-col ml-10 mr-10'>
            <h1 className='mt-10 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white'>
                MY TO DO LIST
            </h1>
            <div className='flex flex-row justify-between bg-orange-200 p-2 mt-2 rounded-sm'>
                <h2 className=' text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>
                    Follow me along the way ...
                </h2>
                <a className='cursor-pointer' href='https://github.com/faezeAdham1374/NextToDoList' target='_blank' >
                    <FaGithub />
                </a>
            </div>

        </div>
    );

}

export default Header;