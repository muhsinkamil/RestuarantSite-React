import React from 'react'
import Emoji from './Emoji'

const Footer = () => {
    return (
        <footer className="page-footer grey lighten-2 black-text">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h3 className="indigo-text text-darken-2">
                            About Us...
                        </h3>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aperiam tenetur cupiditate animi dolore, ab vitae nostrum repellendus.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aperiam tenetur cupiditate animi dolore, ab vitae nostrum repellendus.
                        </p>
                    </div>

                    <div className="col s12 l4 offset-l2">
                        <h3 className="indigo-text text-darken-2">
                            Connect 
                        </h3>

                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className="footer-copyright grey lighten-2 black-text">
                <h6 className="container center-align">
                    2020 Fest | Made with <Emoji label="heart" symbol="❤️"/>
                </h6>
            </div>
        </footer>
    )
}

export default Footer