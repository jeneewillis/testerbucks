import React from 'react'
import classes from './FormNav.module.css'

const FormNav = ({handlePrev, handleNext, isFirst, isLast, stepNo}) => {
    return (
        <div className={classes.wrapper}>
            <div onClick={handlePrev} className={`${classes.navMenu} ${classes.prevMenu} ${isFirst && classes.disabled}`}>PREVIOUS <span>←</span></div>
            <div onClick={handleNext} className={`${classes.navMenu} ${classes.nextMenu} ${isLast && classes.disabled}`}><span>→</span> NEXT</div>
            <div className={classes.stepNo}>{stepNo}</div>
            <div className={classes.divider}></div>
            <div className={classes.totalStep}>8</div>
        </div>
    )
}

export default FormNav
