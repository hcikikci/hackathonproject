import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";

function Search() {

    const searchList = useAppSelector(state => state.itemReducer.searchResult)

    const dispatch = useAppDispatch()
    return (
        <div className="px-[24px]">
            <div className="grid  grid-cols-3 flex justify-between py-4 text-white font-montserrat font-[600]">
                <Link to={"/"}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.6809 17.5C12.515 17.5 12.3492 17.4394 12.2182 17.3097L6.52723 11.6687C5.60201 10.7516 5.60201 9.24621 6.52723 8.32913L12.2182 2.68818C12.4714 2.43727 12.8903 2.43727 13.1435 2.68818C13.3966 2.93908 13.3966 3.35436 13.1435 3.60526L7.45246 9.24622C7.03349 9.6615 7.03349 10.3363 7.45246 10.7516L13.1435 16.3926C13.3966 16.6435 13.3966 17.0588 13.1435 17.3097C13.0125 17.4308 12.8467 17.5 12.6809 17.5Z"
                            fill="white"/>
                    </svg>
                </Link>
                <span className="text-center">Search</span>
                <svg className="justify-self-end" width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 9.99999C1.04169 5.05832 5.05835 1.04166 10 1.04166C14.9417 1.04166 18.9584 5.05832 18.9584 9.99999C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29166C5.75002 2.29166 2.29169 5.74999 2.29169 9.99999C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 9.99999C17.7084 5.74999 14.25 2.29166 10 2.29166Z"
                        fill="white"/>
                    <path
                        d="M10 11.4583C9.65833 11.4583 9.375 11.175 9.375 10.8333V6.66666C9.375 6.32499 9.65833 6.04166 10 6.04166C10.3417 6.04166 10.625 6.32499 10.625 6.66666V10.8333C10.625 11.175 10.3417 11.4583 10 11.4583Z"
                        fill="white"/>
                    <path
                        d="M10 14.1667C9.89169 14.1667 9.78335 14.1417 9.68335 14.1C9.58335 14.0583 9.49169 14 9.40835 13.925C9.33335 13.8417 9.27502 13.7583 9.23335 13.65C9.19169 13.55 9.16669 13.4417 9.16669 13.3333C9.16669 13.225 9.19169 13.1167 9.23335 13.0167C9.27502 12.9167 9.33335 12.825 9.40835 12.7417C9.49169 12.6667 9.58335 12.6083 9.68335 12.5667C9.88335 12.4833 10.1167 12.4833 10.3167 12.5667C10.4167 12.6083 10.5084 12.6667 10.5917 12.7417C10.6667 12.825 10.725 12.9167 10.7667 13.0167C10.8084 13.1167 10.8334 13.225 10.8334 13.3333C10.8334 13.4417 10.8084 13.55 10.7667 13.65C10.725 13.7583 10.6667 13.8417 10.5917 13.925C10.5084 14 10.4167 14.0583 10.3167 14.1C10.2167 14.1417 10.1084 14.1667 10 14.1667Z"
                        fill="white"/>
                </svg>

            </div>
            <div className="relative w-full py-[16px]">
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse rx="7.57177" ry="7.4819" transform="matrix(-1 0 0 1 9.60621 8.4819)" stroke="#67686D"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.33978 14.0743L1.37122 17" stroke="#67686D" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>


                <input type="text" className="outline-0 block bg-dark-gray w-full rounded-[16px] pl-[24px] py-[10px] font-normal text-[14px] text-gray
                                          placeholder:font-normal placeholder:text-[14px] placeholder:text-gray"
                       placeholder="Search"/>
            </div>
            <div className="grid grid-cols-1 gap-y-8 pt-6">
                {searchList?.map((movie : any) => (
                    <Link to={"/details/" + movie?.id} className="grid grid-cols-3 text-white font-poppins font-[400]">
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path} className="object-contain rounded-[16px] h-36" alt=""/>
                        <div className="col-span-2 gap-x-2 flex flex-col grow">

                            <h2 className="">{movie?.title}</h2>
                            <div className="h-full"></div>
                            <div className="grid grid-cols-1 gap-y-2.5 ">
                                <div className="inline-flex text-[#FF8700] place-items-center space-x-2 text-xs">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03931 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52185 8.18577C3.60063 8.25218 3.65906 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.1933 10.8683 7.27569 10.9208V10.9208Z"
                                            stroke="#FF8700" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>{movie?.vote_average}</span>
                                </div>
                                <div className="inline-flex place-items-center space-x-2 text-xs">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3.5V12.5" stroke="#EEEEEE" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path
                                            d="M1.5 10.4494C1.49998 10.3342 1.53979 10.2225 1.61268 10.1334C1.68557 10.0442 1.78706 9.98292 1.89995 9.96C2.35166 9.86772 2.75763 9.62224 3.04919 9.26509C3.34075 8.90794 3.5 8.46104 3.5 8C3.5 7.53896 3.34075 7.09206 3.04919 6.73491C2.75763 6.37776 2.35166 6.13228 1.89995 6.04C1.78706 6.01708 1.68557 5.95584 1.61268 5.86664C1.53979 5.77745 1.49998 5.6658 1.5 5.55061V4C1.5 3.86739 1.55268 3.74021 1.64645 3.64645C1.74021 3.55268 1.86739 3.5 2 3.5H14C14.1326 3.5 14.2598 3.55268 14.3536 3.64645C14.4473 3.74021 14.5 3.86739 14.5 4V5.55061C14.5 5.6658 14.4602 5.77745 14.3873 5.86665C14.3144 5.95584 14.2129 6.01708 14.1001 6.04C13.6483 6.13229 13.2424 6.37777 12.9508 6.73492C12.6592 7.09207 12.5 7.53896 12.5 8C12.5 8.46105 12.6592 8.90794 12.9508 9.26509C13.2424 9.62224 13.6483 9.86772 14.1001 9.96001C14.2129 9.98292 14.3144 10.0442 14.3873 10.1334C14.4602 10.2225 14.5 10.3342 14.5 10.4494V12C14.5 12.1326 14.4473 12.2598 14.3536 12.3536C14.2598 12.4473 14.1326 12.5 14 12.5H2C1.86739 12.5 1.74021 12.4473 1.64645 12.3536C1.55268 12.2598 1.5 12.1326 1.5 12V10.4494Z"
                                            stroke="#EEEEEE" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span>{movie?.original_title}</span>
                                </div>
                                <div className="inline-flex place-items-center space-x-2 text-xs">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
                                            stroke="#EEEEEE" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11 1.5V3.5" stroke="#EEEEEE" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path d="M5 1.5V3.5" stroke="#EEEEEE" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path d="M2.5 5.5H13.5" stroke="#EEEEEE" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>


                                    <span>{new Date(movie?.release_date).getFullYear()}</span>
                                </div>
                                <div className="inline-flex place-items-center space-x-2 text-xs">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                                            stroke="#EEEEEE" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 4.5V8H11.5" stroke="#EEEEEE" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>


                                    <span>139 minutes</span>
                                </div>

                            </div>

                        </div>
                    </Link>

                ))}

            </div>


        </div>
    );
}

export default Search;