import React, { Component } from 'react'
import './styles/style.css';
import GeneralInfo from './components/GeneralInfo'
import ExperienceInfo from './components/ExperienceInfo'
import EducationInfo from './components/EducationInfo'
import FormGeneral from './components/FormGeneral'
import FormExp from './components/FormExp'
import FormEdu from './components/FormEdu'

class App extends Component {
  constructor(props) {
    super(props)
    
    // Setting initial state types, and values (to display default vals)
    this.state = {
      fullName: 'John Doeman',
      title: 'Software Engineer',
      email: 'john.doeman@gmail.com',
      phone: '0412345678',
      location: 'Brisbane, QLD',
      summary: 'A summary piece of text should be written here.',

      expKeys: [0],  // experience keys (just index for now)
      expComp: ['A Company'],
      expPos: ['Software Engineer'],
      expStart: ['2020'],
      expEnd: ['Present'],
      expDesc: ['I love this job'],

      eduKeys: [0],  // education keys (just index for now)
      course: ['Masters of Engineering'],
      uni: ['The University of Western Australia'],
      eduStart: ['2015'],
      eduEnd: ['Present'],
      eduDesc: ['Thesis: Classification of Deep Learning Galaxies'],

      value: {key: '', text: ''}, // A template object to create other states from
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

  // Functions to update General Section of CV
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

  // Functions to update Experience Section of CV
  company(e, key) {
    e.preventDefault();
    const temp = this.state.expComp;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ expComp: newArr })
  }
  expPos(e, key) {
    e.preventDefault();
    const temp = this.state.expPos;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ expPos: newArr })
  }
  expStart(e, key) {
    e.preventDefault();
    const temp = this.state.expStart;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ expStart: newArr })
  }
  expEnd(e, key) {
    e.preventDefault();
    const temp = this.state.expEnd;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ expEnd: newArr })
  }
  expDesc(e, key) {
    e.preventDefault();
    const temp = this.state.expDesc;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ expDesc: newArr })
  }
  expAdd(e) {
    console.log('adding exp...');
    // Add a new key, +1 of last number in array
    this.setState(prevState => ({
      expKeys: [...prevState.expKeys, this.state.expKeys[this.state.expKeys.length - 1] + 1],
      expComp: [...prevState.expComp, ''],
    }))
    console.log('exp keys: '+this.state.expKeys)
  }
  expDel(key) {
    console.log('deleting exp: '+key)
    this.setState({expKeys: this.state.expKeys.filter(a => a !== key)}) /// Delete item of specific key
  }

  // Functions to update Education Section of CV
  course(e, key) {
    e.preventDefault();
    const temp = this.state.course;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ course: newArr })
  }
  uni(e, key) {
    e.preventDefault();
    const temp = this.state.uni;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ uni: newArr })
  }
  eduStart(e, key) {
    e.preventDefault();
    const temp = this.state.eduStart;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ eduStart: newArr })
  }
  eduEnd(e, key) {
    e.preventDefault();
    const temp = this.state.eduEnd;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ eduEnd: newArr })
  }
  eduDesc(e, key) {
    e.preventDefault();
    const temp = this.state.eduDesc;
    const newArr = [...temp.slice(0, key), e.target.value, ...temp.slice(key + 1)]
    this.setState({ eduDesc: newArr })
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

          { this.state.expKeys.map((idx) => ( // Render component according to each key
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

          { this.state.eduKeys.map((idx) => ( // Render component according to each key
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
        
        <div id="view-container">

          <FormGeneral output={this.state}/>
          { this.state.expKeys.map((idx) => ( // Render component according to each key
            <FormExp
              keyy = {idx}
              output = {this.state}
          />)) }
          { this.state.eduKeys.map((idx) => ( // Render component according to each key
            <FormEdu
              keyy = {idx}
              output = {this.state}
          />)) }

        </div>

      </div>
    );
  }
}

export default App;