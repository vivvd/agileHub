import React, { useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        text: newComment,
        timestamp: new Date().toLocaleString()
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div style={styles.commentsSection}>
      <h3>Комментарии</h3>
      <div style={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} style={styles.comment}>
            <p>{comment.text}</p>
            <small>{comment.timestamp}</small>
          </div>
        ))}
      </div>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Оставьте комментарий"
        style={styles.textarea}
      />
      <button onClick={handleAddComment} style={styles.button}>Добавить комментарий</button>
    </div>
  );
}

const styles = {
  commentsSection: {
    marginTop: '20px'
  },
  commentsList: {
    marginBottom: '20px'
  },
  comment: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    borderColor: '#ddd',
    marginBottom: '10px'
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Comments;
