import { useFormContext } from 'react-hook-form'

const TextArea = () => {
  const { register } = useFormContext()

  return (
    <>
      <label
        className="flex items-center justify-between text-sm font-bold text-textDescription"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className="max-h-24 flex-1 rounded border px-3 py-2 text-zinc-800 shadow-sm transition-all ease-in focus:outline-none focus:ring-2 focus:ring-pink-600"
        cols={50}
        rows={10}
        maxLength={1000}
        {...register('message')}
        placeholder="Write your message"
      ></textarea>
    </>
  )
}

export default TextArea
