import { CustomSubmitBtn } from '@/styles/styled'

const SubmitButton = ({ text, type, variant }) => {
  return (
    <CustomSubmitBtn type={type} variant={variant}>
      {text}
    </CustomSubmitBtn>
  )
}

export default SubmitButton
