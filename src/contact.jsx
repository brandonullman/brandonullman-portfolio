import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <input 
            type='text' 
            name='name' 
            placeholder='Name'
            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: {
                value: 30,
                message: 'Please use 30 characters or less'
              }
            })}
          ></input>
          {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
          <input 
            type='text' 
            name='email' 
            placeholder='Email Address'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          ></input>
          {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
        </div>
        <input 
          type='text' 
          name='subject' 
          placeholder='Subject'
          {...register('subject', {
            required: { value: true, message: 'Please enter a subject' },
            maxLength: {
              value: 75,
              message: 'Subject cannot exceed 75 characters'
            }
          })}
        ></input>
        {errors.subject && (<span className='errorMessage'>{errors.subject.message}</span>)}
        <input 
          type='text' 
          name='message' 
          placeholder='Message'
          {...register('message', {
            required: true
          })}
        ></input>
        {errors.message && <span className='errorMessage'>Please enter a message</span>}
        <button type='submit' className="text-[#D6D6D6]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;