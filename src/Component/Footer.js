import React, { Component } from "react";
import Fade from "react-awesome-reveal";

class Footer extends Component {
    render() {
        if (!this.props.data) return null;
        const network = this.props.data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                        <i className={network.className}></i>
                    </a>

                </li>
            );
        });

        return (
            <footer>
                <div className="row">
                    <Fade buttom>
                        <div className="twelve columns">
                            <ul className="social-links">{network}</ul>
                            <ul className="copyright">
                                <li>&copy; copyright 2025 Efwan Rizaldi</li>
                                <li>
                                    Design by {" "}
                                    <a title="styleshout" href="http://wwww.styleshout.com/" target="_blank"
                                        rel="noopener noreferrer">
                                        Styleshout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Fade>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );

    }
}

export default Footer;