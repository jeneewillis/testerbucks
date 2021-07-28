import React, { useState } from 'react'
import classes from './Page6.module.css'
import Button from 'react-bootstrap/Button'

import editIcon from '../../../media/image/edit.svg'
import trashIcon from '../../../media/image/trash.svg'

const Page6 = ({ handleEdit, handleAdd, handleDelete, handleNext, data }) => {
    const [carData, setCarData] = useState(data)
    const handleRemove = (index) => {
        let tempData = [...carData];
        tempData.splice(index, 1);
        setCarData(tempData)
        handleDelete(index)
    }
    return (
        <div>
            <p className={classes.headerText}><span>Your Vehicle</span></p>
            <div className={classes.dataWrapper}>
                <div className={classes.dataBox}>
                    {
                        carData.map((item, index) => (
                            <div key={index} className={classes.cardWrapper}>
                                <img src={"https://vl.imgix.net/img/" + (item.make).toLowerCase().replace(/ /g, "-") + "-logo.png"} alt="make" />
                                <div className={classes.carContent}>
                                    <p className={classes.carModel}>{item.model}</p>
                                    <p className={classes.carDes}>{item.year + ' ' + item.trim}</p>
                                </div>
                                <div className={classes.actionWrapper}>
                                    <img onClick={() => handleEdit(index)} src={editIcon} alt="edit" />
                                    {
                                        index > 0 && <img onClick={() => handleRemove(index)} src={trashIcon} alt="trash" />
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <Button onClick={handleAdd} variant="secondary" className={`${classes.button} mt-4`}>ANOTHER VEHICLE</Button>
                    <Button onClick={handleNext} variant="secondary" className={classes.button}>SAVE & CONTINUE</Button>
                </div>
            </div>
        </div>
    )
}

export default Page6
