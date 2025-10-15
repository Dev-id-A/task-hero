import type { ReactNode } from "react";

export interface taskDiv{
    title: string;
    divClass: string;
    children: ReactNode
}

function TaskDiv({title, divClass, children}: taskDiv) {
  return (
    <div className={`${divClass}`}>
            <h3>{title}</h3>
            {children}
    </div>
  )
}

export default TaskDiv