import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


class Contact extends Component {
  render() {
  return (
    <div>
      <Container id="contact-app" className="app-present">
        <h1 className="app-title">Contact Us</h1>
        <a href="https://www.google.com/maps/dir//550+N+Figueroa+St+%234053,+Los+Angeles,+CA/@34.0617377,-118.2806008,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80c2c6514421fb5d:0x7cf9b9c8180294e7!2m2!1d-118.2455813!2d34.0616716!3e0?hl=en" target="_blank">
          <Image style={{'width': '100%', 'margin':'45px auto 10px'}} src="https://lh3.googleusercontent.com/yxWYoIZuCU6AvowBLd95bh7UmtI2lZh04EmxgMFRnF446t-ULmEJge8kiVqeHcdsxeKx9sEH97i-5-Mh3NVMGR-NdouSSkpli-jXuXRIav6jsE6IGXYMtTgkGeHcCQhFi9GtGWbKGJD5Yu4-7FES7GUbE7LSNyK3NMSYJ2_qmEJdViRB-iSU-z_6LjuAMwzmGm2g_uUnAduonuYlu5AcqkvZC6BOLJ761qKFxeIBT53zfHEbSd0YCZigccCh7lLsI5iRwaz97ULnNcm7LMVge8GFf4rTz4XPtQ1VpbwTyzi0FxKdS3o7xdSrvzZlT66E38mDW-Swx9wDgWADjL4j-aklF65Cno8kzoocX4ocm6azvw1bDAsmnWuBHbtohZwZDhroUOCBCuhe7dJA0k4EB2EqPzbTIle6qErPzxq6wAJaErtMBPXJbSrSdpU6iK8kBvSy9jfC2ykxkLOAkrb4e__CsJ_ZS9pWdgZNYfjnU35YNRLsgwN_xkhB5tDFSv2hBDfw9QAmnw0GYcQFNU_4Uqhg2b_GokHsUNc7JvbqAGJy4oxDTu_zUV6kKVKHtYzvrkSh_2VdewgoIbpC2-nSXlgHqDJofdKParXgK-Fwb8sSvYt3EuTDMyEiDCytKNieFNM4i5gTwKKV1SDgvEyIYfswZ-k-tcst4XK3ONyPG1h_-QRv_9c9X2js7AVXb-cBz55x6kXp_6AhvIB9ABuAmhNwvxwA_IhulrfqHY3AjmjCFQ=w3292-h1676-no" rounded />
        </a>
        <Row style={{'padding': '50px 50px'}}>
          <Col lg={true}>
            <h2>Contact</h2>
            <Button className="btn-app" variant="primary" size="lg" href="tel:7737820255">
              Call Now
            </Button>
            <p>Call to (773)782-0255</p>   
            <Button className="btn-app" variant="primary" size="lg" href="sms:7737820255">
              Text Now
            </Button>
            <p>Text to (773)782-0255</p>       
          </Col>
          <Col lg={true}>
            <h2>Address</h2>
            <Button className="btn-app" variant="primary" size="lg" href="https://www.google.com/maps/dir//550+N+Figueroa+St+%234053,+Los+Angeles,+CA/@34.0617377,-118.2806008,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80c2c6514421fb5d:0x7cf9b9c8180294e7!2m2!1d-118.2455813!2d34.0616716!3e0?hl=en" target="_blank">
              Get Directions
            </Button>
            <p>550 N Figueroa St, Unit 4053<br/>Los Angeles, CA 90012</p>          
          </Col>
          <Col lg={true}>
            <h2>Business Hours</h2>
            <Container className='week-hours'>
              <Row> 
                <Col xs={5}>
                  <p>Mon:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:00 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Tue:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Wed:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Thur:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Fri:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Sat:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:00 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Sun:</p>
                </Col>
                <Col>
                  <p>Closed</p>
                </Col>
              </Row>
            </Container>         
          </Col>
        </Row>
      </Container>
    </div>
  )
  }
}

export default Contact;