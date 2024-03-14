interface IconProps {
  fill?: string
}

export const Hoodie = ({ fill }: IconProps) => {
  return (
    <svg
      height='32px'
      viewBox='0 0 334 470'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M167 0C160.4 0 150.9 3.77 140.9 10.69C131 17.61 120.6 27.38 111.3 37.78C102.9 47.3 95.4 57.34 89.8 66.13C94.8 63.84 99.8 61.79 104.9 59.96L105.8 59.55C126 50.77 146.4 46.3 166.9 46.3C187.4 46.28 207.9 50.67 228.2 59.56L229 59.91C234.1 61.75 239.2 63.82 244.2 66.13C238.6 57.34 231.1 47.3 222.7 37.78C213.4 27.38 203 17.61 193.1 10.69C183.1 3.77 173.6 0 167 0ZM167 67.23C150.7 67.23 134.5 69.6 118.8 74.33C119.8 91 124.1 110.7 131.8 126.2C140.6 143.8 152.3 154.8 167 154.8C181.7 154.8 193.4 143.8 202.2 126.2C209.9 110.7 214.2 91 215.2 74.33C199.5 69.6 183.3 67.23 167 67.23ZM101 80.9C93.9 84 86.9 87.6 80.2 91.8C81.5 110.9 90.6 126.3 105 137.5C110.7 142 117.3 145.7 124.5 148.5C121.2 144.1 118.3 139.2 115.8 134.2C107.4 117.6 102.6 98.5 101 80.9ZM233 80.9C231.4 98.5 226.6 117.6 218.2 134.2C215.7 139.3 212.7 144.2 209.4 148.7C216.8 145.8 223.5 142.1 229.3 137.5C243.5 126.3 252.5 110.9 253.8 91.8C247.1 87.6 240.1 84 233 80.9ZM101.6 157.1C78.2 160.7 54.8 166.3 31.3 173.8L4.41998 402L35.6 412.4L62.1 213.8L80 215.6L66.6 417C90.2 422.7 128.7 426 167 426C205.3 426 243.8 422.7 267.4 417L254 215.6L271.9 213.8L298.4 412.4L329.5 402.1L302.7 173.8C279.3 166.4 256 160.7 232.7 157.1C228.6 159.7 224.3 161.9 219.8 163.9C216.5 175.8 216.9 189.9 219.8 203C223.5 219.7 231.5 234.8 237.4 240.6L224.6 253.4C214.5 243.2 206.5 226.3 202.2 207C199.6 195.3 198.4 182.6 200 170.3C189.6 172.6 178.5 173.5 167 172.8C155.5 173.5 144.4 172.5 134 170.2C135.6 182.5 134.4 195.2 131.8 207C127.5 226.3 119.5 243.2 109.4 253.4L96.6 240.6C102.5 234.8 110.5 219.7 114.2 203C117.1 189.8 117.5 175.7 114.2 163.7C109.8 161.8 105.6 159.6 101.6 157.1ZM111.8 311.5H222.2L239.8 389L222.2 393L207.8 329.5H126.2L111.8 393L94.2 389L111.8 311.5ZM2.27998 420.2L0.0499878 439.1C0.0999878 438.8 0.739984 440.8 4.02998 443.4C7.42998 446 12.7 448.7 17.8 450.5C22.9 452.1 27.9 452.7 30.2 452.5L33.1 430.5L2.27998 420.2ZM331.7 420.2L300.9 430.5L303.8 452.5C306.1 452.7 311.1 452.1 316.2 450.5C321.3 448.7 326.6 446 330 443.4C333.3 440.8 333.9 438.8 333.9 439.1L331.7 420.2ZM65.4 435.2L64.1 454.4V454.5C64.6 455 66.2 456.2 68.6 457.4C73.4 459.8 81.6 462.2 91.7 464.2C111.8 468 139.4 470 167 470C194.6 470 222.2 468 242.3 464.2C252.4 462.2 260.6 459.8 265.4 457.4C267.8 456.2 269.4 455 269.9 454.5V454.4L268.6 435.2C242.1 441.3 204.7 444 167 444C129.3 444 91.9 441.3 65.4 435.2Z'
        fill={fill || 'black'}
      />
    </svg>
  )
}