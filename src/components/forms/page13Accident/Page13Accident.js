import React, {useState} from 'react'
import classes from './Page13Accident.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page13Accident = ({ handleAccident, data, handleForward, handleBack }) => {
    const [accident, setAccident] = useState(data)
    const handleClick = (value) => {
        setAccident(value)
        handleAccident(value)
    }
    const handleCheck = () => {
        if (accident === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Have you had any at-fault Accidents in the Past 3 years?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={() => handleClick(true)} variant="secondary" className={`${classes.button} ${accident === true && classes.active}`}>YES</Button>
                <Button onClick={() => handleClick(false)} variant="secondary" className={`${classes.button} ${accident === false && classes.active}`}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page13Accident
