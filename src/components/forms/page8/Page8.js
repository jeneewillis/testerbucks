import React, { useState } from 'react'
import classes from './Page8.module.css'
import FormNav from '../../formNav/FormNav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Page8 = ({ handleCompany, data, handleForward, handleBack }) => {
    const [company, setCompany] = useState(data)
    const handleChange = (event) => {
        setCompany(event.target.value)
        // setIsLoading(true)
        handleCompany(event.target.value)
    }
    const options = [
        '21st Century',
        'American Family',
        'AAA',
        'Allstate',
        'Auto Club Insurance Company',
        'Geico',
        'Esurance',
        'Farmers',
        'Mercury',
        'Liberty Mutual',
        'Nationwide',
        'Progressive',
        'State Farm',
        'Travelers',
        'The General',
        'USAA',
        'American Protection Insurance',
        'Best Agency USA',
        'CNA',
        'CSE Insurance Group',
        'California State Automobile Association',
        'Chubb',
        'Erie Insurance',
        'Foremost',
        'Hanover Lloyd’s Insurance Company',
        'Peak Property and Casualty Insurance',
        'Standard File Insurance Company',
        'The Hartford',
        'Tri-State Consumer Insurance',
        'Western and Southern Life',
        'Other Insurance'
    ]
    const handleClick = (value) => {
        // setCompany(value)
        handleCompany(value)
    }
    const handleCheck = () => {
        if (company === '') return;
        handleForward()
    }
    return (
        <div>
            <p className={classes.headerText}>Current Auto Insurance:</p>
            <div className={classes.optionWrapper}>
                <Row>
                    {
                        options.map((item, index) => {
                            return (index < 16) ? (
                                <Col key={index} className={classes.optionItemWrapper} sm={6} md={4} lg={3}>
                                    <div onClick={() => handleClick(item)} className={`${classes.optionItem} ${company === item && classes.active}`}>{item}</div>
                                </Col>
                            ) : (
                                    <Col key={index} className={classes.optionItemWrapper} sm={6} md={4} lg={3}>
                                        <div onClick={() => handleClick(item)} className={`${classes.optionItem} ${company === item && classes.active} ${classes.dtHide}`}>{item}</div>
                                    </Col>
                                )
                        })
                    }
                </Row>
            </div>
            <div className={classes.flexWrapper}>
                <select className={`${classes.select} ${classes.mbHide}`} id="company_select" value={company} onChange={handleChange}>
                    <option default>Company list</option>
                    {
                        options.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))
                    }
                </select>
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={6} />
            </div>
        </div>
    )
}

export default Page8
