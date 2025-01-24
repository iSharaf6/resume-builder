import React from 'react';

function Experience({ experiences, onChange, onAdd, onRemove }) {
  return (
    <div className="form-section">
      <h3>Work Experience</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="form-grid">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={exp.company || ''}
              onChange={(e) => onChange(index, 'company', e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={exp.position || ''}
              onChange={(e) => onChange(index, 'position', e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              name="startDate"
              placeholder="Start Date"
              value={exp.startDate || ''}
              onChange={(e) => onChange(index, 'startDate', e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={exp.endDate || ''}
              onChange={(e) => onChange(index, 'endDate', e.target.value)}
              className="form-input"
            />
            <textarea
              name="description"
              placeholder="Job Description"
              value={exp.description || ''}
              onChange={(e) => onChange(index, 'description', e.target.value)}
              className="form-input full-width"
              rows="3"
            />
          </div>
          <button 
            type="button" 
            onClick={() => onRemove(index)}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      ))}
      <button 
        type="button" 
        onClick={onAdd}
        className="add-btn"
      >
        Add Experience
      </button>
    </div>
  );
}

export default Experience; 