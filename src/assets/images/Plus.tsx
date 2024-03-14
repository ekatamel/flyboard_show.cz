interface IconProps {
  disabled?: boolean
  onClick?: () => void
}

export const Plus = ({ disabled, onClick }: IconProps) => {
  return (
    <svg
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='cursor-pointer lg:w-40 w-30'
      onClick={disabled ? undefined : onClick}
    >
      <circle
        cx='20'
        cy='20'
        r='19'
        fill={disabled ? 'rgba(72,72,72,0.8)' : 'rgba(255, 234, 0, 1)'}
        stroke={disabled ? 'rgba(72,72,72,0.8)' : 'rgba(255, 234, 0, 1)'}
        strokeWidth='2'
      />
      <rect x='7' y='18' width='26' height='3' rx='1' fill='black' />
      <rect
        x='21'
        y='7'
        width='26'
        height='3'
        rx='1'
        transform='rotate(90 21 7)'
        fill='black'
      />
    </svg>
  )
}