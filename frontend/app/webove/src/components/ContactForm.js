import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birth_year: '',
    country: '',
    email: '',
    phone: '',
    note: ''
  });

  const [errors, setErrors] = useState({}); // Objekt pre chyby

  const handleChange = (e) => {
    let value = e.target.value;
    
    
    if (e.target.name === 'phone') {
      value = value.replace(/\s+/g, ''); // Odstránime všetky medzery
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  
  const validateForm = () => {
    const { name, birth_year, email, phone, country, note } = formData;
    const newErrors = {}; // Objekt na uchovávanie chýb

   
    if (!/^[a-zA-Z\s]{3,}$/.test(name)) {
      newErrors.name = 'Name must contain at least 3 letters and only letters.';
    }

    
    const currentYear = new Date().getFullYear();
    if (!/^\d+$/.test(birth_year) || birth_year < 1900 || birth_year > currentYear) {
      newErrors.birth_year = 'Year of birth must be a number between 1900 and the current year.';
    }

   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
    }

    
    if (phone && !/^\+421\d{9}$/.test(phone)) {
      newErrors.phone = 'Start with +421 and contain exactly 9 digits (+421901234567).';
    }

   
    if (!/^[a-zA-Z\s]{3,}$/.test(country)) {
      newErrors.country = 'Country must contain at least 3 letters and only letters.';
    }

    if (note.trim() === '') {
      newErrors.note = 'Note cannot be empty or just spaces.';
    }

    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    try {
      const response = await fetch('http://localhost/webove_3_roc/backend/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      const result = await response.text();
     // alert(result);

     
      setFormData({
        name: '',
        birth_year: '',
        country: '',
        email: '',
        phone: '',
        note: ''
      });

      
      setErrors({ success: 'Registration successful!' });

    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form.");
    }
  };

  return (
    <div className="row form_contact main-scrol">
      <div className="col-lg-9 form_contact1">
        <div className="row">
          <div className="col-12 col-md-5 contact-info">
            <h3>Registration Information</h3>
          </div>
          <div className="col-12 col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="birth_year" className="form-label">Year of Birth</label>
                  <input
                    type="number"
                    className={`form-control ${errors.birth_year ? 'is-invalid' : ''}`}
                    id="birth_year"
                    name="birth_year"
                    value={formData.birth_year}
                    onChange={handleChange}
                    placeholder="Your year of birth"
                    required
                  />
                  {errors.birth_year && <div className="invalid-feedback">{errors.birth_year}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="country" className="form-label">Country</label>
                  <input
                    type="text"
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    required
                  />
                  {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number (+421)"
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="note" className="form-label">Note</label>
                  <input
                    type="text"
                    className={`form-control ${errors.note ? 'is-invalid' : ''}`}
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Additional notes (optional)"
                  />
                  {errors.note && <div className="invalid-feedback">{errors.note}</div>}
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              {/* Success message */}
              <div className="col-md-12">
                {errors.success && (
                  <div className="alert alert-success">
                    {errors.success}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
