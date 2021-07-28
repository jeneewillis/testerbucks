import React, {useState} from 'react'
import classes from './Page13Dui.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page13Dui = ({ handleDui, data, handleForward, handleBack }) => {
    const [dui, setDui] = useState(data)
    const handleClick = (value) => {
        setDui(value)
        handleDui(value)
    }
    const handleCheck = () => {
        if (dui === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Have you been convicted of a DUI in the past three years?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={() => handleClick(true)} variant="secondary" className={`${classes.button} ${dui === true && classes.active}`}>YES</Button>
                <Button onClick={() => handleClick(false)} variant="secondary" className={`${classes.button} ${dui === false && classes.active}`}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page13Dui
