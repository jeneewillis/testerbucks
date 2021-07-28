import React, {useEffect} from 'react'
import classes from './Page16.module.css'
import footageImg from '../../../media/image/final.png'


const Page16 = ({ firstname, lastname }) => {
    useEffect(() => {
        window.gtag('event', 'PageView', { 'event_category': 'Insurance', 'event_label': 'InsuranceConversion' });
    }, [])
    return (
        <div>
            <p className={classes.headerText}><span>Congratulations {firstname} {lastname}!</span></p>
            <p className={classes.subtitleText}>
                Your application has been pre-approved to save on auto insurance. Within the next 24 hours one of our car insurance specialists will contact you to verify information to recieve your quote.
            </p>
            <div className={classes.imgWrapper}>
                <img src={footageImg} alt="Final step" />
            </div>
        </div>
    )
}

export default Page16
