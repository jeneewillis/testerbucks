import React, { useState } from 'react'
import classes from './Page5.module.css'
import FormNav from '../../formNav/FormNav'

const Page5 = ({ handleTrim, data, handleForward, handleBack, trims }) => {
    const [trim, setTrim] = useState(data)
    const handleChange = (event) => {
        setTrim(event.target.value)
        handleTrim(event.target.value)
    }
    const options = trims.trims;
    options.sort((a, b) => (a.trimType > b.trimType) ? 1 : -1);
    const handleClick = (value) => {
        handleTrim(value)
    }
    const handleCheck = () => {
        if (trim === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}><span>Vehicle Trim:</span></p>
            <div className={classes.optionWrapper}>
                {
                    options.map((item, index) => {
                        return (index < 12) ? (
                            <div key={index} onClick={() => handleClick(item.trimType)} className={`${classes.optionItem} ${trim === item.trimType && classes.active}`}>{item.trimType}</div>
                        ) : (
                                <div key={index} onClick={() => handleClick(item.trimType)} className={`${classes.optionItem} ${trim === item.trimType && classes.active} ${classes.dtHide}`}>{item.trimType}</div>
                            )
                    })
                }
            </div>
            <div className={classes.flexWrapper}>
                <select className={`${classes.select} ${classes.mbHide}`} id="trim_select" value={trim} onChange={handleChange}>
                    <option default>Trim</option>
                    {
                        options.map((item, index) => (
                            <option value={item.trimType} key={index}>
                                {item.trimType}
                            </option>
                        ))
                    }
                </select>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={4} />
            </div>
        </div>
    )
}

export default Page5
