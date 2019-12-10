import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      author: '',
      text: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(event){
    this.setState({
      author: event.target.value
    })
  }

  handleTextChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const text = this.state.text.trim()
    const author = this.state.author.trim()
    if (!text || !author){
      return
    }

    this.props.onCommentSubmit({
      author,
      text
    })

    this.setState({
      author: '',
      text: ''
    })

  }

  render(){
    return(
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say Something"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }

}

export default CommentForm
