import React from 'react'

const Button = ({text, locate}) => {
    return (
        <>
            <button src={locate} className="bg-blue-600 text-white px-4 py-2 rounded-md w-fit h-auto hover:cursor-pointer">
                {text}
            </button>
        </>
    )
}

export default Button
