import type React from "react"

function LangIcon({src, alt, onClick, btnStyle}:
    {src:string, alt:string, onClick?:React.MouseEventHandler<HTMLImageElement>, btnStyle?:string}
) {
  return (
    <button className={`size-12 cursor-pointer ${btnStyle}`}>
      <img src={src} alt={alt} onClick={onClick} />
    </button>
  )
}

export default LangIcon