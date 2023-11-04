import { FaSpinner } from 'react-icons/fa'
import { ButtonContactFormProps } from '@/types'

const ContactButtonForm = ({ loading }: ButtonContactFormProps) => {
  return (
    <>
      {loading ? (
        <button
          type="button"
          className="w-full mt-4 flex h-20 max-h-10 cursor-progress items-center justify-center rounded bg-blue-600 px-3 py-2shadow-sm outline-none transition-all ease-in"
          disabled
        >
          <FaSpinner className="mr-3 h-5 w-5 animate-spin" />
          Sending...
        </button>
      ) : (
        <input
          className="w-full mt-4 h-20 max-h-10 flex-1 cursor-pointer rounded bg-blue-600 px-3 py-2 shadow-sm outline-none transition-all ease-in hover:bg-blue-800 hover:font-bold hover:text-white"
          placeholder="Send"
          type="submit"
          value="Send"
        />
      )}
    </>
  )
}

export default ContactButtonForm
