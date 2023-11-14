import styled from './task.module.scss';
import Image from "next/image";
import cross from "@/assets/icons/cross.svg";
import {useState} from "react";

const Task = (props) => {
    const task = props.task;
    const [isCompleted, setIsCompleted] = useState(false);
    const taskStyle = {
        color: isCompleted ? '#161F3E' : '',
        opacity: isCompleted ? '0.3' : 'inherit',
        textDecoration: isCompleted ? 'line-through' : 'inherit'
    }

    function handleTaskState() {
        setIsCompleted(!isCompleted);
    }

    return (
        <div className={styled.Task}
             onClick={handleTaskState}
        >
            <div className={styled.Task__titleWrapper}>
                <h4
                    className={styled.Task__taskTitle}
                    style={taskStyle}>
                    {task.title}
                </h4>
                <button
                    className={styled.Task__deleteButton}>
                    <Image
                        src={cross}
                        alt="Delete task"
                    />
                </button>
            </div>
            <p className={styled.Task__taskText}>{task.text}</p>
        </div>
    )
}

export default Task;
