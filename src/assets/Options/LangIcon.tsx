import type React from "react"

function LangIcon({src, alt, onClick, btnStyle, nightMode}:
    {src:string, alt:string, onClick?:React.MouseEventHandler<HTMLImageElement>, btnStyle?:string, nightMode:boolean}
) {
  return (
    <button className={`size-12 xl:size-16 cursor-pointer rounded-full ${btnStyle}
    ${nightMode ? "border-3 border-[#36648B]":"border-1 border-black"}`}>
      <img src={src} alt={alt} onClick={onClick} />
    </button>
  )
}

export default LangIcon