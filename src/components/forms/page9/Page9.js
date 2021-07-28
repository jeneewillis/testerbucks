import React, {useState} from 'react'
import classes from './Page9.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page9 = ({ handleHowLong, data, handleForward, handleBack }) => {
    const [howLong, setHowLong] = useState(data)
    const options = [
        'Less than a year',
        '1 to 2 years',
        '2 to 3 years',
        '4+ years',
    ]
    const handleClick = (value) => {
        setHowLong(value)
        handleHowLong(value)
    }
    const handleCheck = () => {
        if (howLong === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>How long have you continuously had auto insurance?</p>
            <div className={classes.buttonWrapper}>
                {
                    options.map((item, index) => (
                        <Button key={index} variant="secondary" className={`${classes.button} ${howLong === index && classes.active}`} onClick={() => handleClick(index)}>{item}</Button>
                    ))
                }
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page9
