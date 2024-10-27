import React from 'react';

function FAQ() {
  return (
    <section style={styles.section}>
      <h2>Часто задаваемые вопросы (FAQ)</h2>
      <dl>
        <dt>Что такое Agile?</dt>
        <dd>Agile — это гибкая методология управления проектами, ориентированная на быструю адаптацию к изменениям.</dd>
        <dt>Какая разница между Scrum и Kanban?</dt>
        <dd>Scrum работает на основе спринтов, а Kanban ориентирован на непрерывный поток задач.</dd>
      </dl>
    </section>
  );
}

const styles = {
  section: {
    marginBottom: '20px'
  }
};

export default FAQ;
