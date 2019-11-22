import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'

function Gallery () {
  return (
    <div>
      <Container id="gallery-app" className="app-present">
        <h1 className='app-title'>Gallery</h1>
        <h2>Smart Appliance Repair, Home Appliance Services, Other Appliance Services, All Brand Services</h2>
        <p>We fix all major home appliances: washers, dryers, cooktops, ovens, stoves, refrigerators, freezers, vine coolers, dishwashers, trush compactors, garbage disposals, microwaves, ice machines and other.<br/>Los Angeles, CA</p><br/>
        <Row>



            <Col lg={true}>
              <Carousel>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media4.fl.yelpcdn.com/bphoto/uHo8W7usbtvo1UVHfsid4Q/o.jpg" rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media1.fl.yelpcdn.com/bphoto/XlJW3gh-rDqkNVaHRCIQNA/o.jpg" rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media1.fl.yelpcdn.com/bphoto/pGDJ08HWyC0gLJzukEPUQw/o.jpg" rounded />
                </Carousel.Item>
              </Carousel>
              <a href="https://www.yelp.com/biz_photos/baisel-appliance-repair-los-angeles?start=0" target="_blank">Check out our Yelp Gallery</a>

            </Col>

            <Col lg={true}>
              <Carousel>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media2.fl.yelpcdn.com/bphoto/z3cgUB24GUQraHnoTfqQHA/o.jpg" rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media1.fl.yelpcdn.com/bphoto/cjODU-3gAceYsJ6RnKT2NQ/o.jpg" rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media3.fl.yelpcdn.com/bphoto/6zgVpQEa8ACtN4pgImn0mQ/o.jpg" rounded />
                </Carousel.Item>
              </Carousel>
              <a href="https://www.yelp.com/biz_photos/baisel-appliance-repair-los-angeles?start=0" target="_blank">Click here to see more in Yelp</a>
            </Col>

            <Col lg={true}>
              <Carousel>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media2.fl.yelpcdn.com/bphoto/1jlRFPFTyWoIrkQqjJceOw/o.jpg" rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media1.fl.yelpcdn.com/bphoto/DKtyxOYp2Ylsx0gro9XKvA/o.jpg" rounded />
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media3.fl.yelpcdn.com/bphoto/J7rOyPzZ9uJA3kqHa-0xeA/o.jpg" rounded />
                </Carousel.Item>
              </Carousel>
              <a href="https://www.yelp.com/biz_photos/baisel-appliance-repair-los-angeles?start=0" target="_blank">Review our Yelp Gallery</a>
            </Col>


        </Row>
      </Container>
    </div>
  )
}

export default Gallery;