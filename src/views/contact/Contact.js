import classes from './Contact.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
    return (
        <div className={classes.wrapper}>
            <p className={classes.headerText}><span>Contact Us</span></p>
            <p className={classes.subtitleText}>Fill out the form below to contact us.</p>
            <Form noValidate className={classes.formWrapper}>
                <Form.Group controlId="contactForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="contactForm.ControlInput2">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="John Doe" />
                </Form.Group>
                <Form.Group controlId="contactForm.ControlTextarea1">
                    <Form.Label>Details</Form.Label>
                    <Form.Control as="textarea" name="detail" rows={3} />
                </Form.Group>
                <Button className={classes.button} variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </div>
    )
}

export default Contact
