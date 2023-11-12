const validateContactForm = (formData) => {
  const errors = {};

  const nameRegex = /^[a-zA-Z0-9 '-]+$/;
  if (!formData.user_name.match(nameRegex) || formData.user_name.trim() === '') {
    errors.nameError = true;
  }
  
  // eslint-disable-next-line
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!formData.user_email.match(emailRegex) || formData.user_email.trim() === '') {
    errors.emailError = true;
  }

  if (formData.subject.length > 150 || formData.subject.trim() === '') {
    errors.subjectError = true;
  }

  if (formData.message.length > 500 || formData.message.trim() === '') {
    errors.messageError = true;
  }

  return errors;
};

export { validateContactForm };