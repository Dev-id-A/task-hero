import { useState, useRef } from "react";
import type { newTaskInterface } from "./Types&Interfaces";

    export function taskState(){
        const [allTaskState, setAllTaskState] = useState<newTaskInterface[]>(()=>{
        const savedTask = localStorage.getItem("savedTask");

        return savedTask ? JSON.parse(savedTask):[];
        });
        
        const [dailyTaskState, setDailyTaskState] = useState<newTaskInterface[]>(()=>{
        const savedDailyTask = localStorage.getItem("savedDailyTask");

        return savedDailyTask ? JSON.parse(savedDailyTask):[];
        });

        const [weeklyTaskState, setWeeklyTaskState] = useState<newTaskInterface[]>(()=>{
        const savedWeeklyTask = localStorage.getItem("savedWeeklyTask");

        return savedWeeklyTask ? JSON.parse(savedWeeklyTask):[];
        });

        const recurrent = useRef<boolean>(true);
        

        const [addTask, setAddTask] = useState<boolean>(false);
        return{
            allTaskState, setAllTaskState,
            dailyTaskState, setDailyTaskState,
            addTask, setAddTask,
            weeklyTaskState, setWeeklyTaskState,
            recurrent
        }
    }

        export function taskEraseState(){
        const [eraseTaskState, setEraseTaskState] = useState<boolean>(false);
        const taskToErase = useRef<number | null>(null);

        return{
            eraseTaskState, setEraseTaskState, taskToErase
        }
    }

    export function levelStates(){
        //Leveling states
    const [percentage, setPercentage] = useState<number>(0);
    const [eraseXPBar, setEraseXPBar] = useState<boolean>(false);
        //Saved states
        const [level, setLevel] = useState<number>(()=>{
        const actualLevel = localStorage.getItem("level");

        return actualLevel ? Number(actualLevel):1;
        });
        const [actualXP, setActualXP] = useState<number>(()=>{
        const userActualXP = localStorage.getItem("actualXP");

        return userActualXP ? Number(userActualXP):0;
        });
        const [maxXP, setMaxXP] = useState<number>(()=>{
        const userActualXP = localStorage.getItem("maxXP");

        return userActualXP ? Number(userActualXP):100;
        });

        return{
            percentage, setPercentage,
            eraseXPBar, setEraseXPBar,
            level, setLevel,
            actualXP, setActualXP,
            maxXP, setMaxXP
        }
    }

    export function windowsState(){
        const [eraseWindow, setEraseWindow] = useState<boolean>(false);   
        const [levelUpWindow, setLevelUpWindow] = useState<boolean>(false);   

        return {
            eraseWindow, setEraseWindow,
            levelUpWindow, setLevelUpWindow
        }
    }
