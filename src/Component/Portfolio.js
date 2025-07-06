import React, { Component } from "react";
import Fade from "react-awesome-reveal";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedImage: "",
            selectedTitle: "",
        };
    }

    openModal = (img, title) => {
        this.setState({ isOpen: true, selectedImage: img, selectedTitle: title });
    };

    closeModal = () => {
        this.setState({ isOpen: false });
    };
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map((projects, index) => {
            let projectImage = "image/portfolio/" + projects.image;

            return (
                <div key={index} className="portfolio-item">
                    <div className="item-wrap" style={{ textAlign: "center" }}>
                        <img
                            src={projectImage}
                            alt={projects.title}
                            style={{ cursor: "pointer", width: "100%", borderRadius: "10px" }}
                            onClick={() => this.openModal(projectImage, projects.title)}
                        />
                        <div style={{ marginTop: "10px" }}>
                            <a
                                href={projects.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#00cccc", textDecoration: "none", fontWeight: "bold" }}
                            >
                                {projects.title}
                            </a>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out some of my works</h1>
                            <div id="portfolio-wrapper">
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* Modal */}
                {this.state.isOpen && (
                    <div className="modal-overlay" onClick={this.closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={this.closeModal}>
                                &times;
                            </span>
                            <img
                                src={this.state.selectedImage}
                                alt={this.state.selectedTitle}
                                style={{ maxWidth: "100%", maxHeight: "70vh", borderRadius: "10px" }}
                            />
                            <div style={{ textAlign: "center", marginTop: "10px", color: "#fff" }}>
                                {this.state.selectedTitle}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}

export default Portfolio;