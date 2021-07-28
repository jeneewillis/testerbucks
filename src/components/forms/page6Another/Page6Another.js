import React from 'react'
import classes from './Page6Another.module.css'
import Button from 'react-bootstrap/Button'
import footageImg from '../../../media/image/another.png'
import FormNav from '../../formNav/FormNav'

const Page6Another = ({ handleAdd, handleNext, handleBack }) => {
    return (
        <div>
            <p className={classes.headerText}>Would You Like To Add Another Vehicle?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={handleAdd} variant="secondary" className={classes.button}>YES</Button>
                <Button onClick={handleNext} variant="secondary" className={classes.button}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <img src={footageImg} alt="Footage" />
                <FormNav handleNext={handleNext} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={5} />
            </div>
        </div>
    )
}

export default Page6Another
