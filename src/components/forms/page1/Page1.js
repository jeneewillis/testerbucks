import React, { useState } from 'react'
import classes from './Page1.module.css'
import loader from '../../../media/image/three-dots.svg'
import zipImg from '../../../media/image/zip.png'
import getAddress from '../../../actions/getAddress'
import Button from 'react-bootstrap/Button'

const Page1 = ({ handleZip }) => {
    const [zipCode, setZipCode] = useState("")
    const [errorZip, setErrorZip] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const doVal = (event) => {
        const { value } = event.target;
        let isnum = /^\d+$/.test(value);
        if (value.length > 5) return;
        if (!value.length) {
            setErrorZip(true)
            setErrorText("Zip Code is required!")
        } else if (!isnum) {
            setErrorZip(true)
            setErrorText("Zip Code is invalid!")
        } else {
            setErrorZip(false)
            setErrorText("")
        }
        setZipCode(event.target.value)
    }
    const handleClick = async () => {
        if (errorZip) { return }
        else if (!zipCode.length) {
            setErrorZip(true)
            setErrorText("Zip Code is required!")
            return
        } else if (zipCode.length < 5) {
            setErrorZip(true)
            setErrorText("Should be 5 digits")
            return
        } else {
            setIsLoading(true)
            const addressData = await getAddress(zipCode)
            if (addressData.status === true) {
                handleZip(zipCode, addressData.data.city, addressData.data.state)
            } else {
                setIsLoading(false)
                setErrorZip(true)
                setErrorText("Invalid Zip Code!")
                return
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }
    return (
        <div>
            <p className={classes.headerText}><span>Qualify To Save</span></p>
            <div className={classes.subHeader}>
                <hr />
                <div className={`${classes.blueDot} ${classes.leftSide}`} />
                <div className={`${classes.blueDot} ${classes.rightSide}`} />
                <span className={classes.subHeaderText}>on auto insurance</span>
            </div>
            <p className={classes.contentText}>Find out how much you qualify to save.</p>
            <input className={classes.zipInput} type="tel" placeholder="Zip Code" name="zipcode" id="zipcode" value={zipCode} onChange={doVal} onKeyDown={handleKeyDown} />
            {
                errorZip && <p className={classes.errText}>{errorText}</p>
            }
            <div className={classes.btnWrapper}>
                <Button disabled={isLoading} className={classes.button} onClick={() => handleClick()}>{isLoading ? <img src={loader} alt="loading..." /> : "GET QUOTE "}<span>→</span></Button>
            </div>
            <div className={classes.zipImgWrapper}>
            <img className={classes.zipImg} src={zipImg} alt="img" />
            </div>
        </div>
    )
}

export default Page1
