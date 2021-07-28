import React, {useState} from 'react'
import classes from './Page13Ticket.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page13Ticket = ({ handleTicket, data, handleForward, handleBack }) => {
    const [ticket, setTicket] = useState(data)
    const handleClick = (value) => {
        setTicket(value)
        handleTicket(value)
    }
    const handleCheck = () => {
        if (ticket === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Have you had 2 or more moving-violation tickets in the past three years?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={() => handleClick(true)} variant="secondary" className={`${classes.button} ${ticket === true && classes.active}`}>YES</Button>
                <Button onClick={() => handleClick(false)} variant="secondary" className={`${classes.button} ${ticket === false && classes.active}`}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page13Ticket
