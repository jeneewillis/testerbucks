import React, { useState } from 'react'
import classes from './Page14.module.css'
import Button from 'react-bootstrap/Button'
import footageImg from '../../../media/image/birth.png'
import FormNav from '../../formNav/FormNav'

import DatePicker from 'react-date-picker'

const Page14 = ({ handleBirthDate, data, handleForward, handleBack }) => {
    const [birthDate, setBirthDate] = useState(data ? data : null)
    const handleChange = (e) => {
        setBirthDate(e)
    }
    const handleClick = () => {
        if (birthDate === null) return;
        handleBirthDate(birthDate)
    }
    const handleCheck = () => {
        if (birthDate === null) return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>What Is Your Date Of Birth?</p>
            <div className={classes.inputBox}>
                <DatePicker onChange={handleChange} className={classes.pickerInput} clearIcon={null} dayPlaceholder="DD" monthPlaceholder="MM" yearPlaceholder="YYYY" format="MM-dd-y" value={birthDate} />
            </div>
            <div className={classes.btnWrapper}>
                <Button className={classes.button} onClick={() => handleClick()}>SAVE & CONTINUE<span>→</span></Button>
            </div>
            <div className={classes.flexWrapper}>
                <img src={footageImg} alt="Footage" />
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={7} />
            </div>
        </div>
    )
}

export default Page14
