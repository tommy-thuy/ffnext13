type CardTitleProps = {
  text: string
}

const CardTitle = ({ text }: CardTitleProps) => {
  return (
    <h2 className="select-none text-center text-xl font-bold md:text-2xl">
      {text}
    </h2>
  )
}

export default CardTitle
