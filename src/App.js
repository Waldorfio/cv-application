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
      fullName: 'John Doeman',
      title: 'Software Engineer',
      email: 'john.doeman@gmail.com',
      phone: '0412345678',
      location: 'Brisbane, QLD',
      summary: 'A summary piece of text should be written here.',

      expKeys: [1],  // experience keys (just index for now)
      expComp: [],
      expPos: [],
      expStart: [],
      expEnd: [],
      expDesc: [],

      eduKeys: [1,2],  // education keys (just index for now)
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
    this.expDel = this.expDel.bind(this);
    this.expAdd = this.expAdd.bind(this);

    this.course = this.course.bind(this);
    this.uni = this.uni.bind(this);
    this.eduStart = this.eduStart.bind(this);
    this.eduEnd = this.eduEnd.bind(this);
    this.eduDesc = this.eduDesc.bind(this);
    this.eduDel = this.eduDel.bind(this);
    this.eduAdd = this.eduAdd.bind(this);
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
  company(e, key) {
    e.preventDefault();
    this.setState({
      expComp: e.target.value,
    });


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
  expAdd(e) {
    console.log('adding exp...');
    // Add a new key, +1 of last number in array
    this.setState(prevState => ({
      expKeys: [...prevState.expKeys, this.state.expKeys[this.state.expKeys.length - 1] + 1],
    }))
    console.log('exp keys: '+this.state.expKeys)
  }
  expDel(key) {
    console.log('deleting exp: '+key)
    this.setState({expKeys: this.state.expKeys.filter(a => a !== key)}) /// Delete item of specific key
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
  eduAdd(e) {
    // Add a new key, +1 of last number in array
    this.setState(prevState => ({
      eduKeys: [...prevState.eduKeys, this.state.eduKeys[this.state.eduKeys.length - 1] + 1],
    }))
    console.log('exp keys: '+this.state.eduKeys)
  }
  eduDel(key) {
    console.log('deleting exp: '+key)
    this.setState({eduKeys: this.state.eduKeys.filter(a => a !== key)}) /// Delete item of specific key
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

          { this.state.expKeys.map((idx) => (
          <ExperienceInfo
            keyy = {idx}
            company = {this.company}
            expPos = {this.expPos}
            expStart = {this.expStart}
            expEnd = {this.expEnd}
            expDesc = {this.expDesc}
            expDel = {this.expDel}
            expAdd = {this.expAdd}
          />)) }

          { this.state.eduKeys.map((idx) => (
            <EducationInfo
              keyy = {idx}
              course = {this.course}
              uni = {this.uni}
              eduStart = {this.eduStart}
              eduEnd = {this.eduEnd}
              eduDesc = {this.eduDesc}
              eduDel = {this.eduDel}
              eduAdd = {this.eduAdd}
          />)) }
        </div>
        
        <FormView output={this.state}/> 

      </div>
    );
  }
}

export default App;