import React, { Component } from 'react'
import './styles/style.css';
import GeneralInfo from './components/GeneralInfo'
import ExperienceInfo from './components/ExperienceInfo'
import EducationInfo from './components/EducationInfo'
import FormView from './components/FormView'

class App extends Component {
  constructor(props) {
    super(props)
    
    // Setting state
    this.state = {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      
      expComp: [],
      expPos: [],
      expStart: [],
      expEnd: [],
      expDesc: [],

      course: [],
      uni: [],
      eduStart: [],
      eduEnd: [],
      eduDesc: [],
    }

    // Binding functions
    this.fullName = this.fullName.bind(this);
    this.title = this.title.bind(this);
    this.email = this.email.bind(this);
    this.phone = this.phone.bind(this);
    this.loc = this.loc.bind(this);
    this.summary = this.summary.bind(this);

    this.company = this.company.bind(this);
    this.expPos = this.expPos.bind(this);
    this.expStart = this.expStart.bind(this);
    this.expEnd = this.expEnd.bind(this);
    this.expDesc = this.expDesc.bind(this);
    this.expDel = this.expDesc.bind(this);
    this.expAdd = this.expDesc.bind(this);

    this.course = this.course.bind(this);
    this.uni = this.uni.bind(this);
    this.eduStart = this.eduStart.bind(this);
    this.eduEnd = this.eduEnd.bind(this);
    this.eduDesc = this.eduDesc.bind(this);
    this.eduDel = this.eduDesc.bind(this);
    this.eduAdd = this.eduDesc.bind(this);
  }

  // General Functions
  fullName(e) {
    e.preventDefault();
    this.setState({fullName: e.target.value});
  }
  title(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }
  email(e) {
    e.preventDefault();
    this.setState({email: e.target.value});
  }
  phone(e) {
    e.preventDefault();
    this.setState({phone: e.target.value});
  }
  loc(e) {
    e.preventDefault();
    this.setState({location: e.target.value});
  }
  summary(e) {
    e.preventDefault();
    this.setState({summary: e.target.value});
  }

  // Experience Functions
  company(e) {
    e.preventDefault();

  }
  expPos(e) {
    e.preventDefault();

  }
  expStart(e) {
    e.preventDefault();

  }
  expEnd(e) {
    e.preventDefault();

  }
  expDesc(e) {
    e.preventDefault();

  }
  expAdd() {
    alert('adding exp');
  }
  expDel() {
    alert('deleting exp')
  }

  // Education Functions
  course(e) {
    e.preventDefault();

  }
  uni(e) {
    e.preventDefault();

  }
  eduStart(e) {
    e.preventDefault();

  }
  eduEnd(e) {
    e.preventDefault();

  }
  eduDesc(e) {
    e.preventDefault();

  }
  eduAdd() {
    alert('adding education');
  }
  eduDel() {
    alert('deleting education')
  }

  render() {
    return (
      <div id='container'>
        <div id='input-container'>
          <GeneralInfo
            fullName = {this.fullName}
            title = {this.title}
            email = {this.email}
            phone = {this.phone}
            loc = {this.loc}
            summary = {this.summary}
          />
          <ExperienceInfo 
            company = {this.company}
            expPos = {this.expPos}
            expStart = {this.expStart}
            expEnd = {this.expEnd}
            expDesc = {this.expDesc}
            expDel = {this.expDel}
            expAdd = {this.expAdd}
          />
          <EducationInfo 
            course = {this.course}
            uni = {this.uni}
            eduStart = {this.eduStart}
            eduEnd = {this.eduEnd}
            eduDesc = {this.eduDesc}
            eduDel = {this.eduDel}
            eduAdd = {this.eduAdd}
          />
        </div>
        <div id='view-container'>
          <FormView output={this.state}/> 
        </div>
      </div>
    );
  }
}

export default App;