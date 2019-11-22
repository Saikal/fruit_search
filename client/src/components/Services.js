import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class Services extends Component {
  render() {
    return (
      <div>
        <Container id="service-app" className="app-present">
          <h1 className="app-title">Services</h1>
          <h2>Appliances we repair are wide range of Dryers, Dishwashers, <br/>Freezers, Microwave, Oven, Refrigerators, etc. all brands.</h2>
          <p>Smart Appliance Repair provides the same day service, for All Major home appliances: washers, dryers, cooktops, ovens, stoves, refrigerators, freezers, vine coolers, dishwashers, trush compactors, garbage disposals, microwaves, ice machines! Smart Appliance Repairs, Home Appliance Services, Appliance Services - Los Angeles, CA</p><br/>
          <Row>
            <Col lg={true}>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/h6wY2yDxi8ccoe-LzXhE2aAB4pbBMRA4mzwwGk-kRU-QrfEbczHqspNKl_NjAo51VZShuZcQqD7WuvNXRzi-wv-BSN1XTIGMb-Lgq--8yG33nD-BSGmHdQvmEJi3LD8U8VPmMGUAkGroirKES6TnuIE6fXhypj6fayot1VdJwm-iYEl0ykTrhXnWchmATX5lb4cMDSvyw_3naWK_F2vrR8mrhrSB1r3uc3n9SowbySYQz-9HLRQ9u9CKDKUZdFqgZLAem7uH2U9_8pCtWSirPAa6e2Lwyx9wYI30_GmP2AFi5pqp8-M0rtHblpK14fb_o84jpPKiChzxfJiZfbzQDBIeaF7rlE4t4acUmUGs_UZNkbEmHX3BsfKpuerQbhKSuhUB77nKRi4pzpN27XdbHrauq9v-Hl7TRgf51HILtr18tpAhBe1Q6aHNKjm0yY3-MUlLrRawuUn2pJdhH6dL7j69Krxsn0L3fR9S6s8NRYaF44W46eR3rafyzcAGWHiGb2y4ctETfhgnZyW8fU2hswclSuScgu6R1HhRjfmWUPIifCMTxT7MVhjQoSoecmTmfUjm1si5ktcnKFleoaZSlK7aCARxj_kvBfrYl1tmL3RU2fvMJbFkggOgcLVeJ4lDRZ6bSfiGmcmRP6IHMT20m_MQN0lbnX2QhuwUarBdYH32ZjdsyaZtAoe48CuStF7lcxPFvXd9mshGzsdlqEjkuioOaT91lvec5wpp21fTM2AlWC0=w1076-h908-no" rounded />
            </Col>
            <Col lg={true}>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/XCLeZ7JsvF_K2VMJ2WbWlzFfgEYjp4OilmjokX-ZOAHKlA9HYbjAm_25FmrFpgB8oyw5-dIOPRFzhqbCv7mtVVrUnzI9e-3bkVK37vyxsw8Y7eXxJM4W0JR2M-rIYuPWsyj8nNaPoCzTxMHnGk03qhivUTm98iTxbCKkdcC3sVyt1R7PhpZ9samcWSt9acL7yuRYdnnt9QTOv7eLkAzQp_fTYOrUcN3RUEz7fhJ-6l9vtyekPxkze8oJKZ9jp10eVzjOK0WTjTUL_NLhvR_lpUnmu2KyYUe-kJN5T2PmagBzKVYswuag1DG7AoYtVLWZIiuNFHcuXB1wXLdKfNBcMlsrrPR6KMDk0TZZGtfWSuFj7hOsbhV_QRW24WtLn_CGHZVzq9WjOlMCJdtRYcVrEOWFsBp7enH4d9rXfV0Mr7E35XU7PzpKrIVTmDWGMSo_V7Pt24tyiaimmbHe6HKuDBO5qe_A6MZ9pg4sZozc24kQplTfbEnlX9g9-8aTL_zxetGT1lCWhM0UNippX83n9JQD-R-YMMgAIiBxBlSVollyFtlaZvnkB0glsn5Y7MVkUCr56IgZ2-LHydahIiVSpzDarylJhL74dqsgNsei1ayrCtRCzp2VBu7Agof7ec8m81ejF5zXaglKYGOEDaMKxbxVy-FMw2HLO1KB8DMR8XO_sFSTh3a4LULh4jdORgi6Y_lw8aeP7blP4wK082HMyYVhqllRksQWDhTm3nxReKM6hJw=w276-h286-no" rounded />
            </Col>
            <Col lg={true}>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media1.fl.yelpcdn.com/bphoto/7AKNiRYr2-C2f3YrcMWAiA/o.jpg" rounded />
            </Col>
          </Row>
          <a href="https://www.yelp.com/biz/baisel-appliance-repair-los-angeles" target="_blank">Click here to see<br/>Smart Appliance Fix<br/>in Yelp</a>
        </Container>
      </div>
    )
  }
}

export default Services;