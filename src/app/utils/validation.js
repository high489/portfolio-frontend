const validateContactForm = (formData) => {
  const errors = {};

  const nameRegex = /^[\p{L}0-9 '-]+$/u;
  if (!formData.user_name.match(nameRegex) || formData.user_name.trim() === '') {
    errors.user_name = true;
  }
  
  // eslint-disable-next-line
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!formData.user_email.match(emailRegex) || formData.user_email.trim() === '') {
    errors.user_email = true;
  }

  if (formData.subject.length > 150 || formData.subject.trim() === '') {
    errors.subject = true;
  }

  if (formData.message.length > 500 || formData.message.trim() === '') {
    errors.message = true;
  }

  return errors;
};

export { validateContactForm };