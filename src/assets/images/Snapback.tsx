interface IconProps {
  fill?: string
}

export const Snapback = ({ fill }: IconProps) => {
  return (
    <svg
      width='64'
      height='44'
      viewBox='0 0 64 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.2 30C11.2 30.8 5.1 31.7 0 31.4V26C0 14.2 7.8 4.2 18.4 1.1C14.2 7.1 14.8 19.7 16.2 30Z'
        fill={fill || 'black'}
      />
      <path
        d='M20.9 1.6C22.3 0.0999985 23.5 0.0999985 25.3 0.0999985C27 0.0999985 28.6 0.299998 30.2 0.599998C37.3 5.6 42.1 14.7 43.3 25.1C35.9 25.9 27.3 28 18.4 29.6C16.5 15.5 17.3 5.3 20.9 1.6Z'
        fill={fill || 'black'}
      />
      <path
        d='M45.6 24.9C44.6 16 41 8 35.7 2.4C44.2 6.3 50.2 14.8 50.6 24.8C48.9 24.7 47.3 24.7 45.6 24.9ZM64 36.3C57 36.3 48.2 43.7 36.5 43.9C29.4 44.1 21.8 38.5 15.1 32.5C28.5 30.3 42.8 26.3 51.3 27.1C55.3 30.6 60.2 33.4 64 36.3Z'
        fill={fill || 'black'}
      />
    </svg>
  )
}
