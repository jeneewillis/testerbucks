import React, { useState, useEffect, lazy, Suspense } from 'react'
import Form from 'react-bootstrap/Form';
import classes from './Home.module.css'
import StepBar from '../../components/stepBar/StepBar'
import { useHistory, useLocation } from 'react-router-dom'

import getMake from '../../actions/getMake'
import getModel from '../../actions/getModel'
import getTrim from '../../actions/getTrim'
import postQuote from '../../actions/postQuote'
import firstVisit from '../../actions/firstVisit'

const Page1 = lazy(() => import('../../components/forms/page1/Page1'));
const Page2 = lazy(() => import('../../components/forms/page2/Page2'));
const Page3 = lazy(() => import('../../components/forms/page3/Page3'));
const Page4 = lazy(() => import('../../components/forms/page4/Page4'));
const Page5 = lazy(() => import('../../components/forms/page5/Page5'));
const Page6Another = lazy(() => import('../../components/forms/page6Another/Page6Another'));
const Page6 = lazy(() => import('../../components/forms/page6/Page6'));
const Page7 = lazy(() => import('../../components/forms/page7/Page7'));
const Page8 = lazy(() => import('../../components/forms/page8/Page8'));
const Page9 = lazy(() => import('../../components/forms/page9/Page9'));
const Page10 = lazy(() => import('../../components/forms/page10/Page10'));
const Page11 = lazy(() => import('../../components/forms/page11/Page11'));
const Page12 = lazy(() => import('../../components/forms/page12/Page12'));
const Page13Accident = lazy(() => import('../../components/forms/page13Accident/Page13Accident'));
const Page13Ticket = lazy(() => import('../../components/forms/page13Ticket/Page13Ticket'));
const Page13Dui = lazy(() => import('../../components/forms/page13Dui/Page13Dui'));
const Page14 = lazy(() => import('../../components/forms/page14/Page14'));
const Page15 = lazy(() => import('../../components/forms/page15/Page15'));
const Page16 = lazy(() => import('../../components/forms/page16/Page16'));

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Home = () => {
    let urlQuery = useQuery();
    
    useEffect(() => {
        var s = document.createElement('script');
        s.id = 'LeadiDscript_campaign';
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//create.lidstatic.com/campaign/5b75f9a1-f5dd-dc74-7aec-16718cb7adb8.js?snippet_version=2';
        var LeadiDscript = document.getElementById('LeadiDscript');
        LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
    }, []);
    const history = useHistory()
    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'POP') {
                history.push({ hash: "" });
                handleBack();
            }
        })
    })

    const [sessionTime, setSessionTime] = useState(new Date());
    const [formData, setFormData] = useState({
        car: [],
        hadInsurance: '',
        insurance: {
            state: '',
            company: "",
            howLong: ''
        },
        gender: '',
        married: '',
        homeOwner: '',
        accident: '',
        ticket: '',
        dui: '',
        birthDate: '',
        sessionTime: 0,
        userAgent: '',
        contact: {
            fName: "",
            lName: "",
            email: "",
            zip: "",
            city: "San Francisco",
            state: "Califonia",
            street: "",
            phone: "",
            leadId: ""
        },
        subId: urlQuery.get('s1') || ''
    })
    useEffect(() => {
        console.log(formData);
    }, [formData])
    const [carData, setCarData] = useState({
        year: '',
        make: '',
        model: '',
        trim: ''
    })
    const [current, setCurrent] = useState(0)
    const [makes, setMakes] = useState('')
    const [models, setModels] = useState('')
    const [trims, setTrims] = useState('')
    const [prgVal, setPrgVal] = useState(0)
    const [curStep, setCurStep] = useState(0)
    const renderSwitch = () => {
        switch (prgVal) {
            case 0:
                return <Page1 handleZip={(zip, city, state) => handleZip(zip, city, state)} />;
            case 1:
                return <Page2 isFirst={current === 0 ? true : false} handleForward={handleForward} handleBack={handleBack} data={carData.year} handleYear={(year) => handleYear(year)} />;
            case 2:
                return <Page3 makes={makes} handleForward={handleForward} handleBack={handleBack} data={carData.make} handleMake={(make) => handleMake(make)} />;
            case 3:
                return <Page4 models={models} handleForward={handleForward} handleBack={handleBack} data={carData.model} handleModel={(model) => handleModel(model)} />;
            case 4:
                return <Page5 trims={trims} handleForward={handleForward} handleBack={handleBack} data={carData.trim} handleTrim={(trim) => handleTrim(trim)} />;
            case 5:
                return <Page6Another handleAdd={handleAdd} handleNext={handleNext} handleBack={handleBack} />
            case 6:
                return <Page6 data={formData.car} handleDelete={(del) => handleDelete(del)} handleEdit={(edit) => handleEdit(edit)} handleAdd={handleAdd} handleNext={handleNext} />;
            case 7:
                return <Page7 handleForward={handleForward} handleBack={handleBack} data={formData.hadInsurance} handleInsurance={(insurance) => handleInsurance(insurance)} />;
            case 8:
                return <Page8 handleForward={handleForward} handleBack={handleBack} data={formData.insurance.company} handleCompany={(company) => handleCompany(company)} />;
            case 9:
                return <Page9 handleForward={handleForward} handleBack={handleBack} data={formData.insurance.howLong} handleHowLong={(howLong) => handleHowLong(howLong)} />;
            case 10:
                return <Page10 handleForward={handleForward} handleBack={handleBack} data={formData.gender} handleGender={(gender) => handleGender(gender)} />;
            case 11:
                return <Page11 handleForward={handleForward} handleBack={handleBack} data={formData.married} handleMarried={(married) => handleMarried(married)} />;
            case 12:
                return <Page12 handleForward={handleForward} handleBack={handleBack} data={formData.homeOwner} handleHomeOwner={(homeOwner) => handleHomeOwner(homeOwner)} />;
            case 13:
                return <Page13Accident handleForward={handleForward} handleBack={handleBack} data={formData.accident} handleAccident={(accident) => handleAccident(accident)} />;
            case 14:
                return <Page13Ticket handleForward={handleForward} handleBack={handleBack} data={formData.ticket} handleTicket={(ticket) => handleTicket(ticket)} />;
            case 15:
                return <Page13Dui handleForward={handleForward} handleBack={handleBack} data={formData.dui} handleDui={(dui) => handleDui(dui)} />;
            case 16:
                return <Page14 handleForward={handleForward} handleBack={handleBack} data={formData.birthDate} handleBirthDate={(birthDate) => handleBirthDate(birthDate)} />;
            case 17:
                return <Page15 data={formData.contact} handleBack={handleBack} handleContact={(contact) => handleContact(contact)} />;
            case 18:
                return <Page16 firstname={formData.contact.fName} lastname={formData.contact.lName} />;
            default:
                return 'Next pages are under development';
        }
    }

    const handleBack = () => {
        if (prgVal === 1 && current === 0) {
            history.push({ hash: "step1" });
            return;
        }
        if (prgVal === 1) {
            setPrgVal(6)
        } else if (prgVal === 10) {
            setPrgVal(formData.hadInsurance === true ? 9 : 7)
        } else if (prgVal === 6) {
            history.push({ hash: "step6" });
            return;
        } else {
            setPrgVal(prgVal - 1)
        }
    }
    const handleForward = () => {
        if (prgVal === 4 && (formData.car).length === 4) {
            setPrgVal(7)
        } else if (prgVal === 7 && formData.hadInsurance === false) {
            setPrgVal(10)
        } else if (prgVal === 5) {
            setPrgVal(7)
        } else {
            setPrgVal(prgVal + 1)
        }
    }
    const handleZip = (zip, city, state) => {
        setSessionTime(new Date())
        firstVisit();
        let tempData = formData
        tempData.contact.zip = zip
        tempData.contact.city = city
        tempData.contact.state = state
        setFormData(tempData)
        setPrgVal(1)
    }
    const handleYear = async (year) => {
        let tempData = carData
        tempData['year'] = year
        setCarData(tempData)
        const makes = await getMake(year)
        setMakes(makes)
        setPrgVal(2)
    }
    const handleMake = async (make) => {
        let tempData = carData
        tempData['make'] = make
        setCarData(tempData)
        const models = await getModel(carData.year, make)
        setModels(models)
        setPrgVal(3)
    }
    const handleModel = async (model) => {
        let tempData = carData
        tempData['model'] = model
        setCarData(tempData)
        const trims = await getTrim(carData.year, carData.make, model)
        setTrims(trims)
        if (trims.length <= 1) {
            handleTrim(trims[0])
        } else {
            setPrgVal(4)
        }
    }
    const handleTrim = async (trim) => {
        let tempData = carData;
        let temData = formData;
        let tempArray = temData.car;
        tempData['trim'] = trim;
        setCarData(tempData);
        (current === (formData.car).length) ? tempArray.push(tempData) : tempArray[current] = tempData;
        temData.car = tempArray;
        setFormData(temData);
        setPrgVal((formData.car).length === 4 ? 7 : 5)
    }
    const handleDelete = (del) => {
        let tempData = formData;
        let tempArray = tempData.car;
        tempArray.splice(del, 1);
        tempData.car = tempArray
        setFormData(tempData)
    }
    const handleEdit = (edit) => {
        setCurrent(edit)
        setCarData(formData['car'][edit]);
        setPrgVal(1)
    }
    const handleAdd = () => {
        setCurrent((formData.car).length)
        setCarData({
            year: '', make: '', model: '', trim: ''
        })
        setPrgVal(1)
    }
    const handleNext = () => {
        setPrgVal(7)
    }
    const handleInsurance = (insurance) => {
        let tempData = formData;
        if (insurance === false) tempData['hadInsurance'] = false;
        setFormData(tempData)
        setPrgVal(insurance ? 8 : 10)
    }
    const handleCompany = (company) => {
        let tempData = formData
        tempData['insurance']['company'] = company
        setFormData(tempData)
        setPrgVal(9)
    }
    const handleHowLong = (howLong) => {
        let tempData = formData
        tempData['insurance']['howLong'] = howLong
        tempData['hadInsurance'] = true
        setFormData(tempData)
        setPrgVal(10)
    }
    const handleGender = (gender) => {
        let tempData = formData
        tempData['gender'] = gender
        setFormData(tempData)
        setPrgVal(11)
    }
    const handleMarried = (married) => {
        let tempData = formData
        tempData['married'] = married
        setFormData(tempData)
        setPrgVal(12)
    }
    const handleHomeOwner = (homeOwner) => {
        let tempData = formData
        tempData['homeOwner'] = homeOwner
        setFormData(tempData)
        setPrgVal(13)
    }
    const handleAccident = (accident) => {
        let tempData = formData
        tempData['accident'] = accident
        setFormData(tempData)
        setPrgVal(14)
    }
    const handleTicket = (ticket) => {
        let tempData = formData
        tempData['ticket'] = ticket
        setFormData(tempData)
        setPrgVal(15)
    }
    const handleDui = (dui) => {
        let tempData = formData
        tempData['dui'] = dui
        setFormData(tempData)
        setPrgVal(16)
    }
    const handleBirthDate = (birthDate) => {
        let tempData = formData
        tempData['birthDate'] = birthDate
        setFormData(tempData)
        setPrgVal(17)
    }
    const handleContact = async (contact) => {
        let tempData = formData
        tempData['contact'] = contact;
        let nowTime = new Date();
        tempData['sessionTime'] = (nowTime - sessionTime) / 1000;
        tempData['userAgent'] = navigator.userAgent;
        setFormData(tempData);

        let res = await postQuote(tempData)
        if (res === true) {
            setPrgVal(18)
        } else {
            alert("Something went wrong! Please try again...")
            setPrgVal(17)
        }
    }
    useEffect(() => {
        if (prgVal < 2) setCurStep(0);
        if (prgVal === 2) setCurStep(1);
        if (prgVal === 3) setCurStep(2);
        if (prgVal === 4) setCurStep(3);
        if (prgVal === 5 || prgVal === 6) setCurStep(4);
        if (prgVal > 6 && prgVal < 16) setCurStep(5);
        if (prgVal === 16) setCurStep(6);
        if (prgVal === 17) setCurStep(7);
        if (prgVal === 18) {
            history.replace({ hash: 'thankyou' })
            setCurStep(8);
        }
        if (prgVal > 0 && prgVal < 18) history.push({ hash: 'step' + prgVal })
    }, [prgVal, history])
    
    return (
        <div className={classes.wizardElement}>
            {
                prgVal > 0 && <StepBar curStep={curStep} />
            }
            <Form onSubmit={(e) => e.preventDefault()}>
                <Suspense fallback={<div>Loading...</div>}>
                    {renderSwitch()}
                </Suspense>
            </Form>
        </div>
    )
}

export default Home
