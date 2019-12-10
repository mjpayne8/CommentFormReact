import React, {Component} from 'react';
import CommentList from '../components/CommentList.js';
import CommentForm from '../components/CommentForm.js';

class CommentBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: [
        {
          id: 1,
          author: 'Michael',
          text: 'How do you spell it?'
        },
        {
          id: 2,
          author: 'Louise',
          text: 'React is great'
        }
      ]
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleCommentSubmit(newComment){
    newComment.id = Date.now()
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }

  render(){
    return(
      <div className="CommentBox">
        <h2>Comment Form</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <h2>Comments</h2>
        <CommentList comments = {this.state.comments}/>
      </div>
    )
  }

}

export default CommentBox;
