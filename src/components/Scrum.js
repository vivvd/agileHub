import React, { useState } from 'react';
import Comments from './Comments';
import ReactDOM from 'react-dom';

function Scrum() {
  return (
    <section style={styles.section}>
      <h2>Scrum</h2>
      <p>
        Scrum — это гибкая методология управления проектами, особенно популярная в разработке программного обеспечения.
        Она основана на циклической реализации коротких итераций, называемых спринтами, и позволяет командам
        быстро адаптироваться к изменениям и доставлять ценность пользователю на каждом этапе.
      </p>
      <Comments />
    </section>
  );
}

const styles = {
  section: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto'
  }
};

export default Scrum;
