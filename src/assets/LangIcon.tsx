import type React from "react"

function LangIcon({src, alt, onClick, background}:
    {src:string, alt:string, onClick?:React.MouseEventHandler<HTMLImageElement>, background?:string}
) {
  return (
    <button className={`size-12 cursor-pointer ${background}`}>
      <img src={src} alt={alt} onClick={onClick} />
    </button>
  )
}

export default LangIcon