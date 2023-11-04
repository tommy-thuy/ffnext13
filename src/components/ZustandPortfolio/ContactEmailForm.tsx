'use client';
import Input from './Input';
import TextArea from './TextArea';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { contactSchema } from '@/zod';
import { ContactProps } from '@/types';
import { sendMessageContact } from '@/services';
import ErrorFormMessage from './ErrorFormMessage';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ContactButtonForm from './ContactButtonForm';

const ContactEmailForm = () => {
  const [loading, setLoading] = useState(false);

  const methods = useForm<ContactProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(contactSchema)
  });

  const handleMessage = async (data: ContactProps) => {
    setLoading(true);
    try {
      const { response, error } = await sendMessageContact(data);
      if (!response) toast.error(error);

      toast.success(response.message);
      methods.reset();
      setLoading(false);
    } catch (error) {
      toast.error('Some unknown error has occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        data-aos="fade-right"
        data-aos-delay="100"
        onSubmit={methods.handleSubmit(handleMessage)}
        className="h-full min-w-full flex-col rounded-lg flex md:w-full md:max-w-xl lg:w-full lg:max-w-xl xl:w-full xl:max-w-xl mt-4 sm:mt-4 md:mt-4 lg:mt-12 xl:mt-12"
      >
        <div className="my-2 flex flex-col">
          <Input label="Name" placeholder="Name" name="name" type="text" />
          <ErrorFormMessage field="name" />
        </div>
        <div className="my-2 flex flex-col">
          <Input label="E-mail" placeholder="E-mail" name="email" type="email" />
          <ErrorFormMessage field="email" />
        </div>
        <div className="my-2 flex flex-col">
          <TextArea />
          <ErrorFormMessage field="message" />
        </div>
        <ContactButtonForm loading={loading} />
      </form>
    </FormProvider>
  );
};

export default ContactEmailForm;
