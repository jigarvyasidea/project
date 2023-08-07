import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_beovmgz', 'template_ecx7wvp', form.current, 'D1_fODzIP4n68F955')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Email validation!

  const [username1, setUsername] = useState('');
  const [phoneNumber1, setPhoneNumber] = useState('');
  const [email1, setEmail] = useState('');
  const [subject1, setSubject] = useState('');
  const [message1, setMessage] = useState('');
  const [errMsg1, setErrMsg] = useState('');
  const [successMsg1, setSuccessMsg] = useState('');

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email1)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = () => {
    if (!emailValidation(email1)) {
      setErrMsg('Give a valid Email!');
    } else {
      setSuccessMsg(
        `Thank you dear ${username1}, Your Messages has been sent Successfully!`
      );

      // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number
      const phoneNumber = '+918269761111';

      // Create the WhatsApp message with the form data
      const message = `Name: ${username1}%0aPhone Number: ${phoneNumber1}%0aEmail: ${email1}%0aSubject: ${subject1}%0aMessage: ${message1}`;

      // Create the WhatsApp link
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;

      // Open the WhatsApp link in a new window
      window.open(whatsappLink);
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            {/* form from here for contact */}
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              ref={form}
              onSubmit={sendEmail}
            >
              {errMsg1 && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                  {errMsg1}
                </p>
              )}
              {successMsg1 && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg1}
                </p>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    type="text"
                    name="user_name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username1}
                    className={`${
                      errMsg1 === 'Username is required!' && 'outline-designColor'
                    } contactInput`}
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    type="text"
                    name="user_number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber1}
                    className={`${
                      errMsg1 === 'Phone number is required!' && 'outline-designColor'
                    } contactInput`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  type="email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email1}
                  className={`${
                    errMsg1 === 'Please give your Email!' && 'outline-designColor'
                  } contactInput`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  type="text"
                  name="user_subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject1}
                  className={`${
                    errMsg1 === 'Plese give your Subject!' && 'outline-designColor'
                  } contactInput`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message1}
                  className={`${
                    errMsg1 === 'Message is required!' && 'outline-designColor'
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                />
              </div>
              <div>
                <button
                  type="submit"
                  value="Send"
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-yellow-600 border-transparent"
                >
                  Send_Message!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
