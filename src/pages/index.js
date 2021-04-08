import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SlideShow from '../components/Slider.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <SlideShow />

    <div className="contact">
      <div>
        <h2>
          MICHAEL FENTON<br />
          MIKE@GRDNMNGMNT.COM
        </h2>
        <p style={{ margin: '10px 0px'}}>-------------------</p>
        <h2>
          SEAMUS GUEVARA<br />
          SEAMUS@GRDNMNGMNT.COM
        </h2>
      </div>

      <svg style={{ width: '100px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.03 73.83"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="31.91" cy="36.91" r="31.91"/><path d="M134.12,73.83A36.92,36.92,0,1,1,171,36.91,37,37,0,0,1,134.12,73.83Zm0-63.83A26.92,26.92,0,1,0,161,36.91,26.95,26.95,0,0,0,134.12,10Z"/></g></g></svg>
 
    </div>

  </Layout>
)

export default IndexPage
