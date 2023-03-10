import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

function Navbar() {
    const page = useLocation()
    useEffect(()=>{
        console.log(page.pathname)
    },[page])
    return (
        <div className="fixed inset-x-0 grid grid-cols-3 bottom-0 py-[16px] px-4 bg-dark-blue lg:hidden text-[12px] font-roboto border-t border-b-dark-blue border-b border-light-blue">
            <Link to={"/"} className="flex place-items-center flex-col">
                <svg className="w-[22px]" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={page.pathname === "/" ? "stroke-light-blue" : "stroke-gray"} d="M15.5246 21H13.7818H6.34876H4.60596C2.86861 21 1.46021 19.4607 1.46021 17.5618V8.84736C1.4669 8.09967 1.78834 7.39702 2.3316 6.94256L8.26584 1.6853C9.31003 0.771566 10.7944 0.771566 11.8386 1.6853L17.799 6.93303C18.3402 7.38935 18.6611 8.09083 18.6704 8.83784V17.5618C18.6704 19.4607 17.2619 21 15.5246 21Z" stroke="#0296E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 className={"pt-[10px] " + (page.pathname === "/" ? "text-light-blue " : " text-gray")}>Home</h2>
            </Link>

            <Link to="/search" className="flex place-items-center flex-col">

                <svg className="w-[22px]" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse className={page.pathname === "/search" ? "stroke-light-blue" : "stroke-gray"} cx="9.78854" cy="10.7666" rx="8.14181" ry="8.98856" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path className={page.pathname === "/search" ? "stroke-light-blue" : "stroke-gray"} d="M15.4513 17.4851L18.6433 21" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h2 className={"pt-[10px] " + (page.pathname === "/search" ? "text-light-blue " : " text-gray")}>Search</h2>
            </Link>

            <div className="flex place-items-center flex-col">
                <svg className="w-[22px]" width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.69634 17.6316L2.32374 20.881C1.89478 21.1271 1.36632 20.9529 1.12983 20.4874V20.4874C1.06142 20.3432 1.0245 20.1834 1.02205 20.0206V5.62244C1.02205 2.87644 2.72171 1.77805 5.16757 1.77805H10.9133C13.2845 1.77805 15.0588 2.80322 15.0588 5.43937V20.0206C15.0588 20.2804 14.9653 20.5295 14.799 20.7132C14.6326 20.8968 14.4069 21 14.1717 21C14.0216 20.9974 13.8741 20.9567 13.7405 20.881L8.33475 17.6316C8.13556 17.5128 7.89554 17.5128 7.69634 17.6316Z" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h2 className="text-gray pt-[10px]">Watch list</h2>
            </div>
        </div>
    );
}

export default Navbar;