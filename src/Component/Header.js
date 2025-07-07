import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

class Header extends Component {
    componentDidMount() {
        setTimeout(() => {
            const sections = document.querySelectorAll("section, div[id]");
            const navLinks = document.querySelectorAll("#nav li");

            window.addEventListener("scroll", () => {
                let current = "";

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 100) {
                        current = section.getAttribute("id");
                    }
                });

                navLinks.forEach((li) => {
                    li.classList.remove("current");
                    const anchor = li.querySelector("a");
                    if (anchor && anchor.getAttribute("href") === `#${current}`) {
                        li.classList.add("current");
                    }
                });
            });

            // Tambahkan efek current saat klik langsung
            const navAnchors = document.querySelectorAll("#nav a");
            navAnchors.forEach((a) => {
                a.addEventListener("click", function () {
                    navLinks.forEach((li) => li.classList.remove("current"));
                    this.parentElement.classList.add("current");
                });
            });
        }, 100)
    }

    render() {
        if (!this.props.data) return null;
        const project = this.props.data.project;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;

        return (
            <header id="home">
                <ParticlesBg type="square" bg={true} />
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#certificates">Certificates</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <Fade bottom>
                            <h1 className="responsive-headline">{name}</h1>
                        </Fade>
                        <Fade bottom duration={1200}>
                            <h3>{description}</h3>
                        </Fade>
                        <Fade bottom duration={2000}>
                            <ul className="social">
                                <li>
                                    <a href={project} className="button btn project-btn">
                                        <i className="fa fa-book"></i>Project
                                    </a>
                                </li>
                                <li>
                                    <a href={github} className="button btn github-btn">
                                        <i className="fa fa-github"></i>Github
                                    </a>
                                </li>
                            </ul>

                        </Fade>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
