import React, { useState } from 'react';

function Templates() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Данные о шаблонах
  const templates = [
    {
      id: 1,
      title: "Kanban-доска",
      description: "Шаблон Kanban-доски для управления задачами",
      platformUrl: "https://www.notion.so/templates/kanban-board",
      previewUrl: "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/bce8172b-4bab-4908-807c-701d0ea2b10f/1723380151438/desktop.jpg"
    },
    {
      id: 2,
      title: "План спринта",
      description: "Шаблон плана спринта, доступный на notion",
      platformUrl: "https://notionso.ru/kb/sprinty/",
      previewUrl: "https://notionso.ru/wp-content/uploads/2023/10/image-472.png"
    }
  ];

  // Открыть модальное окно с описанием шаблона
  const openModal = (template) => {
    setSelectedTemplate(template);
    setShowModal(true);
  };

  // Закрыть модальное окно
  const closeModal = () => {
    setShowModal(false);
    setSelectedTemplate(null);
  };

  return (
    <section style={styles.section}>
      <h2>Шаблоны для Agile-команд</h2>
      <p>Откройте шаблоны Kanban-досок и плана спринта, чтобы использовать их для своих проектов!</p>
      <div style={styles.templateList}>
        {templates.map((template) => (
          <div key={template.id} style={styles.templateCard}>
            <h3>{template.title}</h3>
            <button onClick={() => openModal(template)} style={styles.button}>Просмотреть шаблон</button>
          </div>
        ))}
      </div>

      {showModal && selectedTemplate && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>{selectedTemplate.title}</h3>
            <img src={selectedTemplate.previewUrl} alt="Preview" style={styles.previewImage} />
            <p>{selectedTemplate.description}</p>
            <a href={selectedTemplate.platformUrl} target="_blank" rel="noopener noreferrer" style={styles.platformButton}>
              Открыть на платформе
            </a>
            <button onClick={closeModal} style={styles.closeButton}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    marginBottom: '20px'
  },
  templateList: {
    display: 'flex',
    gap: '20px'
  },
  templateCard: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'center',
    width: '180px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center'
  },
  previewImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px'
  },
  platformButton: {
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px'
  },
  closeButton: {
    padding: '8px 12px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default Templates;
