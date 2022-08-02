import React from 'react';

const Modal = ({children}) => {
    return (
        <div className="fixed w-full px-4 py-24 z-50">
            <div className=' w-[370px] md:w-[450px] py-1 mx-auto bg-black/75 text-white'>
                <div className="max-w-[320px] mx-auto py-16">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;