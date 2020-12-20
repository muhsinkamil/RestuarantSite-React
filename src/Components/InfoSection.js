import React from "react"

const InfoSection = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col s12 m5">
          <h3 className="indigo-text text-darken-2">Get In Touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            deleniti adipisci possimus magni laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, excepturi consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis sed quidem tempora quam.
          </p>
        </div>

        <div className="col s12 m4 offset-m3">
          <h3 className="indigo-text text-darken-2">Branches</h3>
          <div>
            <h5 className="indigo-text text-darken-1">HighBury</h5>
            <p>Location: 1275 Highbury Ave N, London</p>
          </div>
          <div>
            <h5 className="indigo-text text-darken-2">Hyde Park</h5>
            <p>Location: 1915 Hyde Park Rd, London</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
