import React, { useState } from 'react'
import axios from 'axios'
import Button from '@design/button'

import styles from './contactform.module.css'

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: '' }
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xeqpewgr',
      data: inputs
    })
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        handleServerResponse(true, 'thanks, we will get back to you!')
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div gap={2} columns={[1, '3fr']}>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.div}>
          <input
            className={styles.input}
            id="name"
            // type="text"
            placeholder="Name"
            name="name"
            onChange={handleOnChange}
            required
            value={inputs.name}
          />
        </div>

        <div className={styles.div}>
          <input
            className={styles.input}
            id="email"
            placeholder="Email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </div>

        <div className={styles.div}>
          <textarea
            className={styles.input}
            id="message"
            placeholder="Message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </div>

        <div className={styles.div}>
          <Button
            className={styles.button}
            type="submit"
            disabled={status.submitting}
          >
            {!status.submitting ? (
              !status.submitted ? (
                'Submit'
              ) : (
                'Submitted'
              )
            ) : (
              <p>Submitting ...</p>
            )}
          </Button>
        </div>
      </form>
      {status.info.error && <div>Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <div>{status.info.msg}</div>}
    </div>
  )
}

export default ContactForm
