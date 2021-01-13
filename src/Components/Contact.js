import React from "react"

const Contact = () => {

  return (
    <div className="center form-group">
      <h3 className="red-text">Write to us!!</h3>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="name" autoComplete="off" />
              <label htmlFor="name">Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input type="email" id="email" autoComplete="off" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="text-area col s12">
              <h6
                className="left-align green-text"
                style={{ marginBottom: "10px" }}
              >
                Message
              </h6>
              <textarea name="message" placeholder="Message" cols="50" />
            </div>
          </div>

          <button className="btn red">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
