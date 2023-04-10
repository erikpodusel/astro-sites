import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

export interface InputProps extends  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  class?: string
}

export const Input: FC<InputProps> = (props) => {
  return <input {...props} className={props?.className ?? props?.class ?? 'input'} />
}
