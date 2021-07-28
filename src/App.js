import React, { lazy, Suspense } from 'react'
import classes from './App.module.css'
import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import Container from 'react-bootstrap/Container';

const Home = lazy(() => import('./views/home/Home'));
const DoNotSell = lazy(() => import('./views/doNotSell/DoNotSell'));
const Partners = lazy(() => import('./views/partners/Partners'));
const Terms = lazy(() => import('./views/terms/Terms'));
const Privacy = lazy(() => import('./views/privacy/Privacy'));
const Contact = lazy(() => import('./views/contact/Contact'));


const App = () => {
  return (
    <div className={`${classes.appWrapper}`}>
      <Container className={classes.siteContainer}>
        <Navbar />
        <div className={classes.appContainer}>
          <div className={classes.outerLine1}></div>
          <div className={classes.outerLine2}></div>
          <div className={classes.mainContainer}>
            <main>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/do-not-sell" component={DoNotSell} />
                  <Route path="/partners" component={Partners} />
                  <Route path="/terms-of-service" component={Terms} />
                  <Route path="/privacy-policy" component={Privacy} />
                  <Route path="/contactus" component={Contact} />
                </Switch>
              </Suspense>
            </main>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default App
