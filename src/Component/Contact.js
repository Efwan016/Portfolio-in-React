import React, { Component } from "react";
import { Fade, Slide, } from "react-awesome-reveal";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [], // 🔹 Daftar pesan terbaru
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.contactName.value || "Anon";
        const message = e.target.contactMessage.value;

        if (!message.trim()) return;

        // 🔹 Tambahkan pesan baru ke state
        this.setState((prevState) => ({
            tweets: [
                {
                    name,
                    message,
                    time: new Date().toLocaleString(),
                },
                ...prevState.tweets,
            ],
        }));

        // 🔹 Reset form
        e.target.reset();
    };


    render() {
        if (!this.props.data) return null;
        const name = this.props.data.name;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const phone = this.props.data.phone;
        const message = this.props.data.contactmessage;

        return (
            <section id="contact">
                <Fade bottom duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1>
                                <span>Get in Touch</span>
                            </h1>
                        </div>

                        <div className="ten columns">
                            <p className="lead">{message}</p>
                        </div>
                    </div>
                </Fade>

                <div className="row">
                    <Slide left duration={1000} triggerOnce>
                        <div className="eight columns">
                            <form onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">
                                            Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            name="contactName"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactSubject"
                                            name="contactSubject"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactMessage">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea
                                            cols="40"
                                            rows="6"
                                            id="contactMessage"
                                            name="contactMessage"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form>

                            <div id="message-warning"> Error boy</div>
                            <div id="message-success">
                                <i className="fa fa-check"></i>Your message was sent, thank you!
                                <br />
                            </div>
                        </div>
                    </Slide>

                    <Slide right duration={1000}>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Address and Phone</h4>
                                <p className="address">
                                    {name}
                                    <br />
                                    {street} <br />
                                    {city}, {state} {zip}
                                    <br />
                                    <span>{phone}</span>
                                </p>
                            </div>

                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    {this.state.tweets.length === 0 ? (
                                        <>
                                            <li>
                                                <span>
                                                    Saya bahagia kemarin<br />
                                                    <a href="./">http://t.co/CGIrdxIlI3</a>
                                                </span>
                                                <b>
                                                    <a href="./">2 Days Ago</a>
                                                </b>
                                            </li>
                                            <li>
                                                <span>
                                                    Semoga kamu baik-baik saja yaa<br />
                                                    <a href="./">http://t.co/CGIrdxIlI3</a>
                                                </span>
                                                <b>
                                                    <a href="./">3 Days Ago</a>
                                                </b>
                                            </li>
                                        </>
                                    ) : (
                                        this.state.tweets.map((tweet, index) => (
                                            <li key={index}>
                                                <span>
                                                    {tweet.message} <br />
                                                    <a href="./">from {tweet.name}</a>
                                                </span>
                                                <b>
                                                    <a href="./">{tweet.time}</a>
                                                </b>
                                            </li>
                                        ))
                                    )}
                                </ul>

                            </div>
                        </aside>
                    </Slide>
                </div>

            </section>
        );
    }
}

export default Contact;