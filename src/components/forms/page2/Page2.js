import React, {useState} from 'react'
import classes from './Page2.module.css'
import FormNav from '../../formNav/FormNav'

const Page2 = ({ handleYear, data, handleForward, handleBack, isFirst }) => {
    const [year, setYear] = useState(data)
    const handleChange = (event) => {
        if ((event.target.value).length) {
            setYear(event.target.value)
            handleYear(event.target.value)
        }
    }
    const options = [
        2021,
        2020,
        2019,
        2018,
        2017,
        2016,
        2015,
        2014,
        2013,
        2012,
        2011,
        2010,
        2009,
        2008,
        2007,
        2006,
        2005,
        2004,
        2003,
        2002,
        2001,
        2000,
        1999,
        1998,
        1997,
        1996,
        1995,
        1994,
        1993,
        1992,
        1991,
        1990,
        1989,
        1988,
        1987,
        1986,
        1985,
        1984,
        1983,
    ]
    const handleClick = (value) => {
        handleYear(value)
    }
    const handleCheck = () => {
        if (year === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}><span>Vehicle Year:</span></p>
            <div className={classes.optionWrapper}>
            {
                options.map((item, index) => {
                    return (index < 20) ? (
                        <div key={index} onClick={() => handleClick(item)} className={`${classes.optionItem} ${year === item && classes.active}`}>{item}</div>
                    ) : ("")
                })
            }
            </div>
            <div className={classes.flexWrapper}>
            <select className={classes.select} id="year_select" value={year} onChange={handleChange}>
                <option default>Select Previous Years</option>
                {
                    options.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))
                }
            </select>
            <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={isFirst} isLast={false} stepNo={1} />
            </div>
        </div>
    )
}

export default Page2
