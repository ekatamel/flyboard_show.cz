interface WarningProps {
  color: string
}

export const Warning = ({ color }: WarningProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Feather icons / alert-triangle' clipPath='url(#clip0_895_1915)'>
        <path
          id='Vector'
          d='M10.29 3.8602L1.82002 18.0002C1.64539 18.3026 1.55299 18.6455 1.55201 18.9947C1.55103 19.3439 1.64151 19.6873 1.81445 19.9907C1.98738 20.2941 2.23675 20.547 2.53773 20.7241C2.83871 20.9012 3.18082 20.9964 3.53002 21.0002H20.47C20.8192 20.9964 21.1613 20.9012 21.4623 20.7241C21.7633 20.547 22.0127 20.2941 22.1856 19.9907C22.3585 19.6873 22.449 19.3439 22.448 18.9947C22.4471 18.6455 22.3547 18.3026 22.18 18.0002L13.71 3.8602C13.5318 3.56631 13.2807 3.32332 12.9812 3.15469C12.6817 2.98605 12.3438 2.89746 12 2.89746C11.6563 2.89746 11.3184 2.98605 11.0188 3.15469C10.7193 3.32332 10.4683 3.56631 10.29 3.8602V3.8602Z'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M12 17H12.01'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_3'
          d='M12 9V13'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_895_1915'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
