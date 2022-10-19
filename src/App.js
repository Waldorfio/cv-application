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
      
      // experience: {
      //   expComp: [{value: ''}],
      //   expPos:  {id: 'a', value: ''},
      //   expStart: {id: 'a', value: ''},
      //   expEnd: {id: 'a', value: ''},
      //   expDesc: {id: 'a', value: ''},
      // },
      // company: {
      //   course: {id: 'a', value: ''},
      //   uni: {id: 'a', value: ''},
      //   eduStart: {id: 'a', value: ''},
      //   eduEnd: {id: 'a', value: ''},
      //   eduDesc: {id: 'a', value: ''},
      // },

      experience: [1,2,3,4],

      expComp: [],
      expPos: [],
      expStart: [],
      expEnd: [],
      expDesc: [],

      // course: [],
      // uni: [],
      // eduStart: [],
      // eduEnd: [],
      // eduDesc: [],
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
  expAdd(e) { // NOT WORKING YET, TYPEERROR: expeirence is not iterable
    alert('adding exp');
    const experience = this.state;
    this.setState({
      experience: [...experience, experience[experience.length - 1]], // Append an incremented number
    })
    alert('new arr: '+this.state.experience)
  }
  expDel(key) { /// ISSUE: Can only delete last experience component
    alert('deleting exp: '+key)
    // this.setState(state => ({
    //   experience: state.experience.filter(a => a !== key), /// Delete item of specific key
    // }));
    this.setState({experience: this.state.experience.filter(a => a !== key)}) /// Delete item of specific key
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

          { this.state.experience.map((num, idx) => (
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

          {/* <ExperienceInfo
            key = {this.state.i}
            company = {this.company}
            expPos = {this.expPos}
            expStart = {this.expStart}
            expEnd = {this.expEnd}
            expDesc = {this.expDesc}
            expDel = {this.expDel}
            expAdd = {this.expAdd}
          /> */}
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
        
        <FormView output={this.state}/> 

      </div>
    );
  }
}

export default App;