import React from 'react';

const Loading = () => {
    return (


        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="my-auto">
                    <img src='https://media.tenor.com/JUs5RkLsaPoAAAAj/fa4u-falala.gif' className=""></img>
                </div>
                
                <progress className="progress w-56"></progress>
            </div>
        </div>
      
    );
};

export default Loading;