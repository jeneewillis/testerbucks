import React, {useState} from 'react'
import classes from './Page12.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page12 = ({ handleHomeOwner, data, handleForward, handleBack }) => {
    const [homeOwner, setHomeOwner] = useState(data)
    const handleClick = (value) => {
        setHomeOwner(value)
        handleHomeOwner(value)
    }
    const handleCheck = () => {
        if (homeOwner === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Are you a Home Owner?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={() => handleClick(true)} variant="secondary" className={`${classes.button} ${homeOwner === true && classes.active}`}>YES</Button>
                <Button onClick={() => handleClick(false)} variant="secondary" className={`${classes.button} ${homeOwner === false && classes.active}`}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page12
