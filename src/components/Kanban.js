import React from 'react';
import Comments from './Comments';
import ReactDOM from 'react-dom';

function Kanban() {
  return (
    <section style={styles.section}>
      <h2>Kanban</h2>
      <p>
        Kanban — это методология управления проектами, основанная на визуализации рабочего процесса через карточки и колонки.
        Каждая задача отображается на доске, и перемещается между колонками в зависимости от статуса выполнения.
        Kanban способствует улучшению потока задач и повышению эффективности.
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

export default Kanban;
