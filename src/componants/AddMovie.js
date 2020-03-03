import React, { Component } from 'react'
import Modal from 'react-modal';
import './AddMovie.css'
import RatingStars from './RatingStars'
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
}

class AddMovie extends Component{
    constructor (props){
        super(props)
        this.state = {
            subtitle : null,
            modalIsOpen : false,
            newMovie : {
                title: "",
                synopsis: "",
                actors: "",
                rating: 0
              }
        }
    }

    // setIsOpen=()=> {React.useState(false)}

    // modalIsOpen=()=> {React.useState(false)}
    // const [modalIsOpen,setIsOpen] = React.useState(false);

   openModal=()=> {
    //this.setIsOpen(true);
    this.setState({modalIsOpen : true})

  }
 
   closeModal=()=> {
       this.setState({modalIsOpen : false})
    //this.setIsOpen(false);
  }

  changeMovieTitle=(e)=>{
    this.setState({newMovie: {...this.state.newMovie, title : e.target.value}})
    }
    changeMovieSynopsis=(e)=>{
        this.setState({newMovie: {...this.state.newMovie, synopsis : e.target.value}})
    }
    changeMovieActor=(e)=>{
        this.setState({newMovie: {...this.state.newMovie, actors : e.target.value}})
    }
    changeMovieRating = (value)=>{
        this.setState({newMovie: {...this.state.newMovie, rating : value}})
    }
    saveNewMovie=()=>{
        if (this.state.newMovie.title){
            this.props.saveMovie(this.state.newMovie)
            this.setState({newMovie: {
                title: "",
                synopsis: "",
                actors: "",
                rating: 0
            }})
            this.closeModal()
        }
        else alert("Movie should have at least a title")

    }

  render(){
    return (
      <div className="addMovie">
        <svg style={{margin : "60px"}} onClick={this.openModal} height="100px" viewBox="0 0 448 448" width="100px" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Add a new movie</h2>
            <label>Title :</label>
            <input type="text" className="title" value={this.state.newMovie.title} onChange={this.changeMovieTitle}/><br/>
            <label>Actors :</label>
            <input type="text" name="Actors" value={this.state.newMovie.actors} onChange={this.changeMovieActor}/><br/>
            <label>Synopsis :</label>
            <input type="text" name="synopsis" value={this.state.newMovie.synopsis} onChange={this.changeMovieSynopsis}/><br/>
            <div className="newMovieRating">
                <label>Rating : </label>
                <div><RatingStars rating={0} getRating={this.changeMovieRating}/></div>
            </div>
            <input className="submit" type="submit" value="Save" onClick={this.saveNewMovie}/>
          <button className="close" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    )
  }
}
 
export default AddMovie;