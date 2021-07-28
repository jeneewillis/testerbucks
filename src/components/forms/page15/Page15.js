import React, { useState, useRef, useEffect } from 'react'
import classes from './Page15.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Page15 = ({ handleContact, data, handleBack }) => {
    const fNameRef = useRef(null)
    const lNameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const streetRef = useRef(null)
    const agreeRef = useRef(null)
    const cityRef = useRef(null)
    const stateRef = useRef(null)
    const zipRef = useRef(null)

    const [isLoading, setIsLoading] = useState(false)
    const [contact, setContact] = useState(data)
    const [agreeCheck, setAgreeCheck] = useState(true)
    const [leadIdVal, setLeadIdVal] = useState('')
    const [error, setError] = useState({
        fName: false,
        lName: false,
        email: false,
        phone: false,
        street: false,
        agree: false
    })
    const handleChange1 = (event) => {
        setContact({ ...contact, fName: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, fName: true }) } else { setError({ ...error, fName: false }) }
    }
    const handleChange2 = (event) => {
        setContact({ ...contact, lName: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, lName: true }) } else { setError({ ...error, lName: false }) }
    }
    const handleChange3 = (event) => {
        setContact({ ...contact, email: event.target.value })
        if (!(event.target.value).length || !emailVal(event.target.value)) { setError({ ...error, email: true }) } else { setError({ ...error, email: false }) }
    }
    const handleChange4 = (event) => {
        setContact({ ...contact, street: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, street: true }) } else { setError({ ...error, street: false }) }
    }
    const handleChange5 = (event) => {
        if ((event.target.value).length !== 0 && ((event.target.value).length > 11 || ((event.target.value).length > 10 && (event.target.value[0] !== '1')) || !(/^\d+$/.test(event.target.value)) || (event.target.value[0] === '0'))) return
        setContact({ ...contact, phone: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, phone: true }) } else { setError({ ...error, phone: false }) }
    }
    const handleChange6 = (event) => {
        setContact({ ...contact, city: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, city: true }) } else { setError({ ...error, city: false }) }
    }
    const handleChange7 = (event) => {
        setContact({ ...contact, state: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, state: true }) } else { setError({ ...error, state: false }) }
    }
    const handleChange8 = (event) => {
        setContact({ ...contact, zip: event.target.value })
        if (!(event.target.value).length) { setError({ ...error, zip: true }) } else { setError({ ...error, zip: false }) }
    }
    const scrToTop = (targetRef) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const handleClick = (e) => {
        e.preventDefault();
        var leadID = leadIdVal;
        console.log(leadID.substr(0, 3))

        var tempCon = contact;
        tempCon.leadId = leadID;
        if (!(tempCon.fName).length) { setError({ ...error, fName: true }); scrToTop(fNameRef); return; } else if (!(tempCon.lName).length) { setError({ ...error, lName: true }); scrToTop(lNameRef); return; } else if (!(tempCon.email).length || error.email) { setError({ ...error, email: true }); scrToTop(emailRef); return; } else if (((tempCon.phone).length < 10) || ((tempCon.phone).length < 11 && (tempCon.phone).length > 0 && tempCon.phone[0] === '1')) { setError({ ...error, phone: true }); scrToTop(phoneRef); return; } else if (!(tempCon.street).length) { setError({ ...error, street: true }); scrToTop(streetRef); return; } else if (!agreeCheck) { setError({ ...error, agree: true }); scrToTop(agreeRef); return; } else if (!(tempCon.city).length) { setError({ ...error, city: true }); scrToTop(cityRef); return; } else if (!(tempCon.state).length) { setError({ ...error, state: true }); scrToTop(stateRef); return; } else if ((tempCon.zip).length < 5) { setError({ ...error, zip: true }); scrToTop(zipRef); return; }
        handleContact(tempCon)
        setIsLoading(true)
    }

    const emailVal = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleAgreeCheck = (e) => {
        setAgreeCheck(e.target.checked);
        if (e.target.checked) setError({ ...error, agree: false })
    }

    useEffect(() => {
        var leadIdCheck = setInterval(() => {
            var leadField = document.getElementById('leadid_token');
            if (leadField) {
                let leadVal = leadField.value;
                if (leadVal.length) {
                    setLeadIdVal(leadVal);
                    clearInterval(leadIdCheck);
                }
            }
        }, 200);
        return () => {
            clearInterval(leadIdCheck);
        }
    }, [])

    return (
        <div>
            <p className={classes.headerText}><span>Final Step</span></p>
            <Row>
                <Col xs={12} sm={6}>
                    <div ref={fNameRef} className={`${classes.inputBox} ${contact.fName && classes.hasValue} ${error.fName && classes.isError}`}>
                        <div className={classes.inputLabel}>First Name</div>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={contact.fName}
                            onChange={handleChange1}
                            placeholder="First Name"
                        />
                    </div>
                    {
                        error.fName && <span className={classes.errMsg}>First name is required.</span>
                    }
                </Col>
                <Col xs={12} sm={6}>
                    <div ref={lNameRef} className={`${classes.inputBox} ${contact.lName && classes.hasValue} ${error.lName && classes.isError}`}>
                        <div className={classes.inputLabel}>Last Name</div>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={contact.lName}
                            onChange={handleChange2}
                            placeholder="Last Name"
                        />
                    </div>
                    {
                        error.lName && <span className={classes.errMsg}>Last name is required.</span>
                    }
                </Col>
                <Col xs={12} sm={6}>
                    <div ref={emailRef} className={`${classes.inputBox} ${contact.email && classes.hasValue} ${error.email && classes.isError}`}>
                        <div className={classes.inputLabel}>Email</div>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={contact.email}
                            onChange={handleChange3}
                            placeholder="Email"
                        />
                    </div>
                    {
                        error.email && <span className={classes.errMsg}>Valid email is required.</span>
                    }
                </Col>
                <Col xs={12} sm={6}>
                    <div ref={phoneRef} className={`${classes.inputBox} ${contact.phone && classes.hasValue} ${error.phone && classes.isError}`}>
                        <div className={classes.inputLabel}>Phone</div>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={contact.phone}
                            onChange={handleChange5}
                            placeholder="Phone"
                        />
                    </div>
                    {
                        error.phone && <span className={classes.errMsg}>Valid phone number is required.</span>
                    }
                </Col>
                <Col xs={12}>
                    <div ref={streetRef} className={`${classes.inputBox} ${contact.street && classes.hasValue} ${error.street && classes.isError}`}>
                        <div className={classes.inputLabel}>Street Address</div>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={contact.street}
                            onChange={handleChange4}
                            placeholder="Street Address"
                        />
                    </div>
                    {
                        error.street && <span className={classes.errMsg}>Street name is required.</span>
                    }
                </Col>
                <Col lg={6}>
                    <div ref={cityRef} className={`${classes.inputBox} ${contact.city && classes.hasValue}`}>
                        <div className={classes.inputLabel}>City</div>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={contact.city}
                            onChange={handleChange6}
                            placeholder="City"
                        />
                    </div>
                    {
                        error.city && <span className={classes.errMsg}>City is required.</span>
                    }
                </Col>
                <Col md={6} lg={3}>
                    <div ref={stateRef} className={`${classes.inputBox} ${contact.state && classes.hasValue}`}>
                        <div className={classes.inputLabel}>State</div>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={contact.state}
                            onChange={handleChange7}
                            placeholder="State"
                        />
                    </div>
                    {
                        error.state && <span className={classes.errMsg}>State is required.</span>
                    }
                </Col>
                <Col md={6} lg={3}>
                    <div ref={zipRef} className={`${classes.inputBox} ${contact.zip && classes.hasValue}`}>
                        <div className={classes.inputLabel}>Zip Code</div>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            value={contact.zip}
                            onChange={handleChange8}
                            placeholder="Zip Code"
                        />
                    </div>
                    {
                        error.zip && <span className={classes.errMsg}>Zip code is required.</span>
                    }
                </Col>
            </Row>
            <div className={classes.responsiveOrder}>
                <div>
                    <label ref={agreeRef} className={`${classes.lightText}`}><input defaultChecked={true} className={`${classes.agreeCheck}`} onChange={handleAgreeCheck} type="checkbox" id="leadid_tcpa_disclosure" /><p className={`${classes.tcpaP}`}>By clicking "View Rates", I am providing my electronic signature and giving my express written consent to receive marketing and informational communications regarding insurance and related products via Automatic Telephone Dialing System and artificial and pre-recorded calls, SMS/MMS, and emails from this website and/or one or more of its <a href="/partners" target="_blank">marketing partners (listed here)</a> at the phone number and/or email address I provide, including wireless numbers, if applicable, even if the number is on a corporate, state, or national Do Not Call list. Consent is not a condition to purchase services or products, and I may revoke my consent at any time. I request you provide my information to these partners so I may obtain their services. Carrier SMS/MMS and data rates may apply. By clicking "View Rates", and submitting this form, I attest that I am 18+ years of age and agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/terms-of-service" target="_blank">Terms & Conditions</a>.</p></label>
                    {
                        error.agree && <p className={classes.errMsg}>Need to agree to our terms and conditions.</p>
                    }
                </div>
                <div>
                    <div className={classes.btnWrapper}>
                        <Button disabled={isLoading} className={classes.button} onClick={handleClick}>
                            {isLoading ? <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> : 'VIEW RATES'}
                        </Button>
                    </div>
                    <div className={classes.backBtnWrapper}>
                        <span onClick={handleBack} className={classes.backBtn}>PREVIOUS</span>
                    </div>
                </div>
            </div>
            <input id="leadid_token" name="universal_leadid" type="hidden" value="" />
        </div>
    )
}

export default Page15
