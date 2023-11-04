import ContactPresentation from './ContactPresentation';
import ContactEmailForm from './ContactEmailForm';

const ContactPage = () => {
  return (
    <div className="flex flex-col mb-10">
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 transition-all">
        <div className="animate-fade grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full">
          <ContactPresentation />
          <ContactEmailForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
