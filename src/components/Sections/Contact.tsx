import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useContext, useState } from 'react'
import { emailTest } from '../../helpers/inputValidations'
import axiosClient from '../../config/axios'
import { PuffLoader } from 'react-spinners'
import '../../scss/alert.scss'
import SectionsContext from '../../contexts/SectionsContext'

type formState = {
  name: string
  portfolioEmail: string | undefined
  contactEmail: string
  subject: string
  additionalMessage: string
}

type onChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

type alert = {
  status: 'none' | 'error' | 'success'
  message: string
}

const Contact: React.FC = () => {
  //STATE
  //contact form
  const [form, setForm] = useState<formState>({
    name: '',
    subject: '',
    portfolioEmail: process.env.REACT_APP_ECOCLYB_EMAIL,
    contactEmail: '',
    additionalMessage: '',
  })
  //loading state
  const [loading, setLoading] = useState<boolean>(false)
  //mail message
  const [sentMessage, setSentMessage] = useState<alert>({
    status: 'none',
    message: '',
  })

  //HANDLERS
  //when an input changes
  const handleOnChange = (e: onChangeEvent) => {
    const { id, value } = e.currentTarget
    setForm({
      ...form,
      [id]: value,
    })
  }
  //to send an email
  const handleSendForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setSentMessage({ message: '', status: 'none' })
    //1st. test the arguments
    if (form.name === '' || form.contactEmail === '') {
      setSentMessage({
        status: 'error',
        message: 'At least set your name and email',
      })
    } else {
      if (!emailTest.test(form.contactEmail)) {
        //wrong email , send message
        setSentMessage({ status: 'error', message: 'Enter a valid email' })
        return
      } else {
        //do the thing
        //2nd. load and send
        setLoading(true)
        axiosClient
          .post(`/portfolio/send`, form)
          .then((result) => result)
          .then((data) => {
            //everything s fine haha
            if (data) {
              setSentMessage({
                status: 'success',
                message: 'Message sent, you will soon recieve a reply',
              })
              // //Google Analytics
              // //Analytic
              // ReactGa.event({
              //   category: "Button",
              //   action: "Formulario enviado exitosamente",
              // });
            } else {
              //something goes wrong, sent a worng message
              setSentMessage({
                status: 'error',
                message: 'There was an issue, send it later',
              })
            }
            setLoading(false)
          })
          .catch((err) => {
            setSentMessage({
              status: 'error',
              message: 'There was an issue, send it later',
            })
            setLoading(false)
          })
      }
    }
  }
  const context = useContext(SectionsContext)

  return (
    <section className="contact" ref={context?.contactRef}>
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              If you want to know something more about me, or you are interested in my services, do
              not hesitate to leave me a message, I usually read them often and I respond quickly to
              them. ;)
            </p>
            <div className="icons">
              <div className="row">
                <FontAwesomeIcon icon="user" />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Miguel Angel Peña Santos</div>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon="map-marker-alt" />

                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Sto. Dgo., Dominican Republic</div>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon="envelope" />
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">miguelangelpena.dev@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right" style={{ position: 'relative' }}>
            {loading ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <PuffLoader color="crimson" size={85} />
                <div style={{ margin: '20px 0 0 0' }}>Sending Email...</div>
              </div>
            ) : (
              <Fragment>
                <div className="text">Message me</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        id="name"
                        value={form.name}
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="field email">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        id="contactEmail"
                        value={form.contactEmail}
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      id="subject"
                      value={form.subject}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols={30}
                      rows={10}
                      placeholder="Message.."
                      required
                      id="additionalMessage"
                      value={form.additionalMessage}
                      onChange={handleOnChange}
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit" onClick={handleSendForm}>
                      Send message
                    </button>
                  </div>
                </form>
                {sentMessage.status !== 'none' && (
                  <div className={`${sentMessage.status}-msg`} style={{ width: '100%' }}>
                    <FontAwesomeIcon
                      icon={sentMessage.status === 'error' ? 'times-circle' : 'check'}
                      style={{ marginRight: '15px' }}
                    />
                    {sentMessage.message}
                  </div>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
