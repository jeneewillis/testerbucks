import React, {useState} from 'react'
import classes from './Page11.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page11 = ({ handleMarried, data, handleForward, handleBack }) => {
    const [married, setMarried] = useState(data)
    const handleClick = (value) => {
        setMarried(value)
        handleMarried(value)
    }
    const handleCheck = () => {
        if (married === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Are You Currently Married?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={() => handleClick(true)} variant="secondary" className={`${classes.button} ${married === true && classes.active}`}>YES</Button>
                <Button onClick={() => handleClick(false)} variant="secondary" className={`${classes.button} ${married === false && classes.active}`}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page11
