import React from 'react';

import About from './About.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';
import Services from './Services.js';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


function Home () {
  return (
    <div>
      <div className="appliance-home">
        <h1>Smart Appliance Fix</h1>
        <Button className="btn-app" variant="primary" size="lg" href="tel:7737820255">
          Call Us Today
        </Button>
        <p>Get your problem fixed ASAP</p>
        <h2>Appliance Repair Service in<br/>Los Angeles, CA</h2>
        <Image style={{'width': '100%', 'margin':'15px auto 10px'}} src="https://lh3.googleusercontent.com/VwYqxzIy6FfAzCfD0fCT4DTeCMaFKeuByfjlAwlreEga33kZg8mseXDyaSv5YW1Qr75z8zMmQv5wxei_TiITAyoHUFXfRFhNlcGTLI3zcylfU27KqGPNUqZiW1VGFxwp84OhCrT-_lWY9b771DQt8xL2t6xkxNumB52Gtxet-tWe3bmn4uQQD3jvtInausKEDcXceAkyH7TZH1u1dvhUO9eye4EHiWzas6u7_97T2Fxv0o4ppEWudkwhW4qhua2vqd4j-oXokhXRPY0jTdfy29gEOMD6ERVPV-QV6-oHcGY3YDyIvg0vpyvwI6nlXMg21kq6uB613dZBfUjZHgGVZYu7dKcARRG5B0xuG4sLcyrQ_hSsUv_M7NT5Lpad22vXBjXSbcdoZITNO7rjKsOHHuSFhrvrl9MhIGOJZWb6ei0ATNH-w0ALWBjM4rs6RYW7xGZd0darVERsQvTtkjrZreqWkGZnRr8O55385T2vNHMAiCXIt2FIYoQqNqKLhhHJxLWTh0UjCPWwkO8nGDOXVpvRe-fB5oLHPEERXkS1DFJIcoW0M-nuQugT3PvVDlzsfSsSPt6oJFkh4jw7Nnmkhjs6t4keFiK81QzAPIxAannvXkJ7ZTwLNfxKNGCTwQee3c_PASvzmC4KFOg6mEXpf6yk5Oi57OHqNlx2z3P0nmR8MbQH7Ae4u_SyWvqYgrf-r2jmXYCu0s7Tf6F6UqsRe_mtp1j_GaACRNUXdgd-H7Ak_Q=w3000-h1308-no" rounded />
      </div>
      <Services />
      <About />
      <Gallery />
    </div>
  )
}

export default Home;