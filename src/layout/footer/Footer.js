import React from 'react'
import Container from 'react-bootstrap/Container'
import classes from './Footer.module.css'

const linksArray = ['home', 'do not sell', 'terms of service', 'privacy policy', 'partners', 'contact us'];
const urlsArray = ['', 'do-not-sell', 'terms-of-service', 'privacy-policy', 'partners', 'contactus']
const urlStr = window.location.hash.substr(1);

const Footer = () => {

    return (
        <div className={classes.footerWrapper}>
            <Container>
                <div className={classes.linkUl}>
                    {
                        linksArray.map((item, index) => (
                            <div key={index} className={`${classes.footerLinkItem} ${urlStr === urlsArray[index] && classes.active}`}>
                                <a className={`${urlStr === urlsArray[index] && classes.active}`} target="_blank" rel="noreferrer" href={"/" + urlsArray[index]}>{item}</a>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Footer
