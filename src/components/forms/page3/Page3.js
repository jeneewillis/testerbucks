import React, { useState, useEffect } from 'react'
import classes from './Page3.module.css'
import FormNav from '../../formNav/FormNav'
import Select from 'react-select'

var makeList = [];

const Page3 = ({ handleMake, data, handleForward, handleBack, makes }) => {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: 43,
            boxShadow: "inset 2.121px 2.121px 8px 0px rgba(0, 0, 0, 0.1)",
            border: "none",
            paddingLeft: "5%",
            fontSize: 17,
            appearance: "none",
            webkitAppearance: "none",
            backgroundPositionX: "92%",
            color: "#71788a",
            height: "100%"
        })
    }

    const [make, setMake] = useState(data)

    const handleChange = (event) => {
        setMake(event.value)
        handleMake(event.value)
    }
    const handleClick = (val) => {
        handleMake(val)
    }
    const handleCheck = () => {
        if (make === '') return;
        handleForward()
    }
    useEffect(() => {
        if (makes.length && !makeList.length) {
            for (let index = 0; index < makes.length; index++) {
                const item = makes[index].make;
                var tempItem = {
                    value: item,
                    label: <div className={classes.optionLabel}><img src={"https://vl.imgix.net/img/" + (item).toLowerCase().replace(/ /g, "-") + "-logo.png"} alt="make" />{item}</div>
                }
                makeList.push(tempItem)
            }
        }
    }, [makes])
    let options = [...makes];
    const prioBrands = ["CHEVROLET", "FORD", "TOYOTA", "NISSAN", "HONDA", "GMC", "HYUNDAI", "JEEP", "KIA", "RAM"];
    options.sort((x, y) => (prioBrands.includes(x.make) ? -1 : prioBrands.includes(y.make) ? 1 : 0))

    return (
        <div>
            <p className={classes.headerText}><span>Vehicle Make</span></p>
            <div className={classes.optionWrapper}>
                {
                    options.map((item, index) => {
                        return (index < 10) ? (
                            <div key={index} onClick={() => handleClick(item.make)} className={`${classes.optionItem} ${classes.mbHide} ${make === item.make && classes.active}`}><img src={"https://vl.imgix.net/img/" + (item.make).toLowerCase().replace(/ /g, "-") + "-logo.png"} alt="make" /><div className={`${classes.itemLabel} ${classes.dtHide}`}>{item.make}</div></div>
                        ) : ("")
                    })
                }
                {
                    makes.map((item, index) => {
                        return <div key={index} onClick={() => handleClick(item.make)} className={`${classes.optionItem} ${make === item.make && classes.active} ${classes.dtHide}`}><img src={"https://vl.imgix.net/img/" + (item.make).toLowerCase().replace(/ /g, "-") + "-logo.png"} alt="make" /><div className={classes.itemLabel}>{item.make}</div></div>
                    })
                }
            </div>
            <div className={classes.flexWrapper}>
                <Select
                    id="make_select"
                    className={`${classes.select} ${classes.mbHide}`}
                    options={makeList}
                    styles={customStyles}
                    value={make ? { value: make, label: <div className={classes.optionLabel}><img src={"https://vl.imgix.net/img/" + (make).toLowerCase().replace(/ /g, "-") + "-logo.png"} alt="make" />{make}</div> } : make}
                    onChange={handleChange}
                    placeholder="Make"
                />
                <FormNav handleNext={handleCheck} handlePrev={handleBack} isFirst={false} isLast={false} stepNo={2} />
            </div>
        </div>
    )
}

export default Page3
