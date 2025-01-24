import React from 'react';

function PersonalInfo({ formData, onChange }) {
  return (
    <div className="form-section">
      <h3>Personal Information</h3>
      <div className="form-grid">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName || ''}
          onChange={onChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email || ''}
          onChange={onChange}
          className="form-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone || ''}
          onChange={onChange}
          className="form-input"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location || ''}
          onChange={onChange}
          className="form-input"
        />
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary || ''}
          onChange={onChange}
          className="form-input full-width"
          rows="4"
        />
      </div>
    </div>
  );
}

export default PersonalInfo; 