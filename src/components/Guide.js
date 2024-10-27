import React from 'react';

function Guide() {
  return (
    <section style={styles.section}>
      <h2>Практическое руководство по Scrum и Kanban</h2>
      <h3>Scrum</h3>
      <ol>
        <li>Определите продукт и составьте backlog.</li>
        <li>Определите роли: владелец продукта, Scrum-мастер, команда.</li>
        <li>Запланируйте спринты и проведите планирование.</li>
        <li>Проводите ежедневные встречи и ретроспективы после каждого спринта.</li>
      </ol>
      <h3>Kanban</h3>
      <ol>
        <li>Создайте Kanban-доску с колонками "To Do", "In Progress", "Done".</li>
        <li>Определите лимиты на количество задач в каждой колонке.</li>
        <li>Обновляйте доску по мере выполнения задач и анализируйте узкие места.</li>
      </ol>
      <br></br>
      <br></br>
    </section>
    
  );
}

const styles = {
  section: {
    marginBottom: '20px'
  }
};

export default Guide;
