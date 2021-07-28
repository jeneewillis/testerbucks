import React, {useState} from 'react'
import classes from './Page10.module.css'
import Button from 'react-bootstrap/Button'
import FormNav from '../../formNav/FormNav'

const Page10 = ({ handleGender, data, handleForward, handleBack }) => {
    const [gender, setGender] = useState(data)
    const options = [
        'Male',
        'Female',
        'Binary'
    ]
    const handleClick = (value) => {
        setGender(value)
        handleGender(value)
    }
    const handleCheck = () => {
        if (gender === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}><span>Select your Gender:</span></p>
            <div className={classes.buttonWrapper}>
                {
                    options.map((item, index) => (
                        <Button key={index} variant="secondary" className={`${classes.button} ${gender === index && classes.active}`} onClick={() => handleClick(index)}>{item}</Button>
                    ))
                }
            </div>
            <div className={classes.flexWrapper}>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page10
