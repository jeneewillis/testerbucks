import React from 'react'
import classes from './StepBar.module.css'
import tick from '../../media/image/tick.png'

const stepArray = [1, 2, 3, 4, 5, 6, 7, 8]

const StepBar = ({curStep}) => {
    return (
        <div className={classes.wrapper}>
            <hr className={classes.hLine} />
            {
                stepArray.map((item, index) => (
                    <div key={index} className={`${classes.stepItem} ${index === curStep && classes.active} ${index < curStep && classes.passed}`} ><div className={classes.stepIcon}>{index > curStep ? '' : (index === curStep ? '0' + item : <img src={tick} alt="tick" />)}</div></div>
                ))
            }
        </div>
    )
}

export default StepBar
