import React, { useState } from 'react'
import classes from './Page4.module.css'
import FormNav from '../../formNav/FormNav'

const Page4 = ({ handleModel, data, handleForward, handleBack, models }) => {
    const [model, setModel] = useState(data)
    const handleChange = (event) => {
        setModel(event.target.value)
        handleModel(event.target.value)
    }
    let options = models;
    options.sort((a, b) => (a.model > b.model) ? 1 : -1);
    const handleClick = (value) => {
        handleModel(value)
    }
    const handleCheck = () => {
        if (model === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}><span>Vehicle Model:</span></p>
            <div className={classes.optionWrapper}>
                {
                    options.map((item, index) => {
                        return <div key={index} onClick={() => handleClick(item.model)} className={`${classes.optionItem} ${model === item.model && classes.active}`}>{item.model}</div>
                        // (index < 12) ? (
                        // ) : (
                        //         <div key={index} onClick={() => handleClick(item.model)} className={`${classes.optionItem} ${model === item.model && classes.active} ${classes.dtHide}`}>{item.model}</div>
                        //     )
                    })
                }
            </div>
            <div className={classes.flexWrapper}>
                <select className={`${classes.select} ${classes.mbHide}`} id="model_select" value={model} onChange={handleChange}>
                    <option default>Model</option>
                    {
                        options.map((item, index) => (
                            <option value={item.model} key={index}>
                                {item.model}
                            </option>
                        ))
                    }
                </select>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={3} />
            </div>
        </div>
    )
}

export default Page4
