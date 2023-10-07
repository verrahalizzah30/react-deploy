// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../component/contactus.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan data dalam alert
    alert(`First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nComment: ${formData.comment}`);
  };

  return (
    <div className="contactus">
      <div className="row">
        <div className="col-md-6">
          <h1 className="titlecontactus greenlabel">Contact Us</h1>
          <p className="subtcontact greenlabel">
            Need to get in touch with us? Either fill out the form <br /> with your inquiry or find the department email youd <br /> like to contact below
          </p>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="inputFirstName" className="form-label greenlabel">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputLastName" className="form-label greenlabel">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label greenlabel">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputComment " className='greenlabel'>What can we help you with?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="comment"
                style={{ height: '100px' }}
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary green">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
