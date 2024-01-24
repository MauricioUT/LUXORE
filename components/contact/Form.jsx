"use client"

import { useState } from 'react';

const Form = () => {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message
      })
    })
    console.log(await response.json())
  }

  return (
    <form className="contact_form" action={sendMail}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_name"
              name="form_name"
              className="form-control"
              type="text"
              placeholder="Nombre(s)"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_name"
              name="form_name"
              className="form-control"
              type="text"
              placeholder="Apellido(s)"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_email"
              name="form_email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="Email"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_phone"
              name="form_phone"
              className="form-control required phone"
              type="phone"
              placeholder="Teléfono"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_subject"
              name="form_subject"
              className="form-control required"
              type="text"
              placeholder="Monto a invertir"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="form_message"
              className="form-control required"
              rows="8"
              required="required"
              placeholder="Mensaje adicional"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            ></textarea>
          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <button onClick={sendMail} className="btn btn-lg btn-thm">
              Agendar Cita
            </button>
          </div>
          {/* End button submit */}
        </div>
      </div>
    </form>
  );
};

export default Form;
