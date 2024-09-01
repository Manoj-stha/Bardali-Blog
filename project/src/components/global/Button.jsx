import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button class="bg-[#5E5DF0] rounded-full shadow-lg shadow-[#5E5DF0]/50 box-border text-white cursor-pointer font-bold text-[16px] leading-[24px] p-2.5 px-4 w-fit border-none outline-none select-none touch-manipulation">{props.title}</button>
    </div>
  )
}

export default Button
