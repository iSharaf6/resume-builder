import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';

function App() {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    experiences: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const handleAddExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      }],
    }));
  };

  const handleRemoveExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Resume Builder</h1>
        <p>Create and optimize your perfect resume with AI</p>
      </header>
      <main className="app-main">
        <div className="resume-builder-container">
          <div className="editor-section">
            <h2>Create Your Resume</h2>
            <form className="resume-form">
              <PersonalInfo 
                formData={formData.personalInfo}
                onChange={handlePersonalInfoChange}
              />
              <Experience
                experiences={formData.experiences}
                onChange={handleExperienceChange}
                onAdd={handleAddExperience}
                onRemove={handleRemoveExperience}
              />
            </form>
          </div>
          <div className="preview-section">
            <h2>Preview</h2>
            <div className="resume-preview">
              <h3>{formData.personalInfo.fullName}</h3>
              <p>{formData.personalInfo.email} | {formData.personalInfo.phone}</p>
              <p>{formData.personalInfo.location}</p>
              <div className="summary">
                <p>{formData.personalInfo.summary}</p>
              </div>
              <div className="experience">
                <h4>Experience</h4>
                {formData.experiences.map((exp, index) => (
                  <div key={index} className="experience-entry">
                    <h5>{exp.position} at {exp.company}</h5>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
