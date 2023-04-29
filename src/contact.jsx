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
    <div className="bg-[#0d2636] mt-32 w-1/2 mx-auto rounded-md border border-black">
      <div className="py-8 px-4 text-center w-3/4 mx-auto">
        <h1 className="mb-8 text-4xl font-semibold text-[#D6D6D6]">Want to Chat?</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
          <div className="flex gap-4">
            <div className="w-full">
              <input 
                type='text' 
                name='name' 
                placeholder='Name'
                className={`px-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md w-full ${errors.name && 'border-red-400'}`}
                {...register('name', {
                  required: { value: true, message: 'Please enter your name' },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
              ></input>
              {errors.name && <span className="text-red-400 font-medium">{errors.name.message}</span>}
            </div>
            <div className="w-full">
              <input 
                type='text' 
                name='email' 
                placeholder='Email Address'
                className={`px-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md w-full ${errors.email && 'border-red-400'}`}
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
              ></input>
              {errors.email && (<span className="text-red-400 font-medium">Please enter a valid email address</span>)}
            </div>
          </div>
          <div>
            <input 
              type='text' 
              name='subject' 
              placeholder='Subject'
              className={`px-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md w-full ${errors.subject && 'border-red-400'}`}
              {...register('subject', {
                required: { value: true, message: 'Please enter a subject' },
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters'
                }
              })}
            ></input>
            {errors.subject && (<span className="text-red-400 font-medium">{errors.subject.message}</span>)}
          </div>
          <div>
            <textarea 
              rows="6" 
              name='message' 
              placeholder='Message'
              className={`px-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md w-full ${errors.message && 'border-red-400'}`}
              {...register('message', {
                required: true
              })}
            ></textarea>
            {errors.message && <span className="text-red-400 font-medium">Please enter a message</span>}
          </div>
          <button type='submit' className="py-2 px-4 text-center font-semibold text-xl text-[#D6D6D6] rounded-lg bg-[#05121a] hover:border-[#8FF6FF] border-2 hover:text-[#8FF6FF] focus:ring-2 focus:outline-none focus:ring-[#8FF6FF]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;