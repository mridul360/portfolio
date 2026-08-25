import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';

const HireMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectDetails: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');


  const [titleRef, titleInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [successRef, successInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.projectDetails) {
      newErrors.projectDetails = 'Project details are required';
    } else if (formData.projectDetails.length < 20) {
      newErrors.projectDetails = 'Please provide more details (at least 20 characters)';
    }
    
    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const submitForm = document.createElement('form');
        submitForm.method = 'POST';
        submitForm.action = 'https://formsubmit.co/mridulhasan222006@gmail.com';
        submitForm.style.display = 'none';

        const fields = {
          _subject: `New project request from ${formData.firstName} ${formData.lastName}`,
          _template: 'table',
          _captcha: 'false',
          _next: 'https://portfolio-chi-ten-ifiqhq1ix8.vercel.app/hire',
          _url: 'https://portfolio-chi-ten-ifiqhq1ix8.vercel.app/hire',
          _replyto: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.projectDetails,
        };

        Object.entries(fields).forEach(([name, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = value;
          submitForm.appendChild(input);
        });

        document.body.appendChild(submitForm);
        submitForm.submit();
      } catch (error) {
        console.error('Unable to send project request:', error);
        setSubmitError('Your request could not be sent. Please try again or email mridulhasan222006@gmail.com directly.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitSuccess) {
    return (
      <section id="hire" className="flex min-h-dvh items-center bg-linear-to-br from-gray-900 to-gray-800 px-0 py-20 sm:py-24">
        <Container className="py-8 sm:py-12">
          <motion.div
            ref={successRef}
            initial={{ opacity: 0, y: 50 }}
            animate={successInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-5 text-center shadow-2xl sm:p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={successInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={successInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-emerald-400 mb-4"
            >
              Thank You!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={successInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-300 mb-6"
            >
              Your project request was sent successfully. I will get back to you soon.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={successInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              onClick={() => setSubmitSuccess(false)}
              className="min-h-11 rounded-lg bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-700 sm:px-6"
            >
              Submit Another Project
            </motion.button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="hire" className="flex min-h-dvh items-center bg-linear-to-br from-gray-900 to-gray-800 px-0 py-20 sm:py-24">
      <Container className="py-8 sm:py-12">
        <div className="mx-auto w-full max-w-2xl">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center sm:mb-10"
          >
            <h2 className="mb-3 bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="text-base text-gray-400 sm:text-lg">
              Tell me about your project and I'll get back to you soon
            </p>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-2xl sm:p-8"
          >
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
              <motion.div 
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={formInView ? { opacity: 1 } : {}}
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`block min-h-12 w-full rounded-lg border bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-600 focus:ring-emerald-500 focus:border-emerald-500'}`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="mt-2 text-sm text-red-400">{errors.firstName}</p>}
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block min-h-12 w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                    placeholder="Doe"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block min-h-12 w-full rounded-lg border bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-600 focus:ring-emerald-500 focus:border-emerald-500'}`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium text-gray-300">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={5}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className={`block min-h-32 w-full resize-y rounded-lg border bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:ring-2 ${errors.projectDetails ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-600 focus:ring-emerald-500 focus:border-emerald-500'}`}
                  placeholder="Describe your project in detail..."
                />
                {errors.projectDetails && <p className="mt-2 text-sm text-red-400">{errors.projectDetails}</p>}
              </motion.div>

              {submitError && (
                <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {submitError}
                </p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:ring-emerald-500 focus:ring-2"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="terms" className="font-medium text-gray-300">
                    I agree to the <a href="#" className="text-emerald-400 hover:text-emerald-300">Terms and Conditions</a> *
                  </label>
                  {errors.terms && <p className="mt-1 text-sm text-red-400">{errors.terms}</p>}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex min-h-12 w-full items-center justify-center rounded-lg bg-linear-to-r from-emerald-600 to-cyan-600 px-6 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:from-emerald-700 hover:to-cyan-700 ${isSubmitting ? 'cursor-not-allowed opacity-80' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Send Project Request'
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HireMe;