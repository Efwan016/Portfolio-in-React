import ReactGA from 'react-ga';
import './App.css';
import { Component } from 'react';
import $ from 'jquery';
import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';
import Footer from './Component/Footer';
import Certificates from './Component/Certificates';
import Whatsapp from './Component/Whatsapp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo:"bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType:"json",
      cache:"false",
      success: function(data) {
        this.setState({
          resumeData : data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }
  
  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Certificates data={this.state.resumeData.certificates || []} />
        <Footer data={this.state.resumeData.main} />
    </a>
      </div>
    )
  }
}

export default App;
