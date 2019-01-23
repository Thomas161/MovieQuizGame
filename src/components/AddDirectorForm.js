import React, { Component } from 'react';
import '../../src/AddDirectorForm.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'



class DirectorFormMain extends Component{
    constructor(props){
        super(props);
            this.state = { name: "", movies: [], moviesTemp: "", image: "" };
            this.onFieldChange = this.onFieldChange.bind(this);
             this.onSubmit = this.onSubmit.bind(this);
              this.onMovies = this.onMovies.bind(this);
              this.previewFile = this.previewFile.bind(this);
        
    }

    previewFile(e){

       const file = document.querySelector("#imgUpload").files[0];
       const image = URL.createObjectURL(file);
       this.setState({ image });
       
    }
    
    onSubmit(e){
        e.preventDefault();
        const {name, image, movies} = this.state;
        this.props.onAddDirector({ name, image, movies });

    }

    onMovies(e){
        this.setState({
movies: this.state.movies.concat([this.state.moviesTemp]),
moviesTemp: ''
        });
    }

    onFieldChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return <form onSubmit={this.onSubmit} style={{ alignItems: "center" }}>
            <div className="AddDirectorForm_input">
              <label htmlFor="name">Name </label>
              <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
            </div>
            <hr />
            <div className="AddDirectorForm_input_img">
              <label htmlFor="image">Img URL</label>
              <hr/>
              <input id="imgUpload" type="file" onChange={this.previewFile} />
              <img src={this.state.image} alt="" />
            </div>
            <hr />
            <div className="AddDirectorForm_input_movie">
              <label htmlFor="moviesTemp">
                Movie ... Input 1 correct film and submit
              </label>
              <label />
              {this.state.movies.map(m => <p key={m}>{m}</p>)}
              <hr />
              <input type="text" name="moviesTemp" min="4" max="4" value={this.state.moviesTemp} onChange={this.onFieldChange} />
              <hr />

              <input type="button" value="+" onClick={this.onMovies} />
            </div>
            <hr />
            <div>
              <input type="submit" value="add" />
            </div>
          </form>;
    }
}

function AddDirectorForm({ match, onAddDirector }) {
  return (
    <div className="AddDirectorForm">
      <h3>Director</h3>
      <DirectorFormMain onAddDirector={onAddDirector}/>
    </div>
  );
}
function mapDispatchToProps(dispatch,props){
    return {
        onAddDirector: (director)=> {
            dispatch({type: 'ADD_AUTHOR', director});
            props.history.push('/');
        }
    }
}

export default withRouter(connect(()=> {}, mapDispatchToProps)(AddDirectorForm));