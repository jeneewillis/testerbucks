import React, {useState} from 'react'
import classes from './Page7.module.css'
import Button from 'react-bootstrap/Button'
import footageImg from '../../../media/image/insurance.png'
import FormNav from '../../formNav/FormNav'

const Page7 = ({ handleInsurance, data, handleForward, handleBack }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [insurance, setInsurance] = useState(data)
    const handleClick = (value) => {
        setInsurance(value)
        setIsLoading(value)
        handleInsurance(value)
    }
    const handleCheck = () => {
        if (insurance === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Have You Had Auto Insurance In The Past 30 Days?</p>
            <div className={classes.buttonWrapper}>
                <Button onClick={() => handleClick(true)} disabled={isLoading} variant="secondary" className={classes.button}>YES</Button>
                <Button onClick={() => handleClick(false)} variant="secondary" className={classes.button}>NO</Button>
            </div>
            <div className={classes.flexWrapper}>
                <img src={footageImg} alt="Footage" />
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page7
