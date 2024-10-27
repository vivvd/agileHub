import React from 'react';

function Comparison() {
  return (
    <section style={styles.section}>
      <h2>Сравнение Agile и Waterfall</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Критерий</th>
            <th>Agile</th>
            <th>Waterfall</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Гибкость</td>
            <td>Высокая</td>
            <td>Низкая</td>
          </tr>
          <tr>
            <td>Структура</td>
            <td>Итеративная</td>
            <td>Последовательная</td>
          </tr>
          <tr>
            <td>Требования</td>
            <td>Могут изменяться</td>
            <td>Фиксированные</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

const styles = {
  section: {
    marginBottom: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px'
  },
  th: {
    padding: '10px',
    backgroundColor: '#f2f2f2',
    border: '1px solid #ddd'
  },
  td: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd'
  }
};

export default Comparison;
