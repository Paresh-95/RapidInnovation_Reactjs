import React from 'react';
import { MdSend, MdPerson, MdEmail, MdSubject, MdMessage } from 'react-icons/md';
import {useFormik} from "formik"
import { contactForm } from '../Schemas';
import toast from 'react-hot-toast';

const initialValues = {
  name:"",
  email:"",
  subject:"",
  message:"",
}

function Contact() {

 const {values,errors,touched,handleBlur,handleChange,handleSubmit} =  useFormik({
    initialValues:initialValues,
    validationSchema:contactForm,
    onSubmit:(values,action)=>{
      console.log(values); 
      toast.success("Message Send Successfully")
      action.resetForm()
    },
    
  })
  console.log(errors);
  



  return (
    <div className="max-w-6xl lg:max-h-[700px] mx-auto my-10 bg-white rounded-xl shadow-2xl shadow-black mb-32 overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img 
          src="https://images.pexels.com/photos/3369569/pexels-photo-3369569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Contact us" 
          className="object-cover w-full h-full max-sm:hidden"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-4xl italic font-extrabold mb-6 text-center text-gray-800  ">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-violet-600">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdPerson className="h-5 w-5 text-gray-400 group-focus-within:text-violet-500 transition-colors duration-300" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 sm:text-sm"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.name && touched.name ?<p className='text-red-500 font-semibold ml-4'>{errors.name}</p>:null}            
          </div>
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-violet-600">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="h-5 w-5 text-gray-400 group-focus-within:text-violet-500 transition-colors duration-300" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 sm:text-sm"
                placeholder="your@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                
              />
            </div>
            {errors.email && touched.email ?<p className='text-red-500 font-semibold ml-4'>{errors.email}</p>:null}
          </div>
          <div className="group">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-violet-600">Subject</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdSubject className="h-5 w-5 text-gray-400 group-focus-within:text-violet-500 transition-colors duration-300" />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 sm:text-sm"
                placeholder="Subject of your message"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.subject && touched.subject ?<p className='text-red-500 font-semibold ml-4'>{errors.subject}</p>:null}
          </div>
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-violet-600">Message</label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                <MdMessage className="h-5 w-5 text-gray-400 group-focus-within:text-violet-500 transition-colors duration-300" />
              </div>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 sm:text-sm"
                placeholder="Your message here..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={500}
              ></textarea>
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                0/500
              </div>
              {errors.message && touched.message ?<p className='text-red-500 font-semibold ml-4'>{errors.message}</p>:null}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-300"
            >
              <MdSend className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact