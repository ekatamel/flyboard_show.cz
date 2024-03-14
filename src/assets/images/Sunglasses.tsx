interface IconProps {
  fill?: string
}

export const Sunglasses = ({ fill }: IconProps) => {
  return (
    <svg
      height='32px'
      viewBox='0 0 1328 841'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1327.8 457.501V444.687C1327.8 434.75 1326.74 432.758 1321.58 430.08C1312.45 425.154 1302.99 420.866 1293.27 417.244C1291.3 416.558 1289.11 415.961 1287.17 415.297C1200.58 131.527 1108.97 0 1069.13 0C1047.6 0 1040.25 14.9387 1032.39 49.2646C1013.49 131.505 1031.19 157.532 1042.42 168.974C1057.91 184.775 1083.1 171.806 1083.1 84.0331C1099.96 125.286 1167.36 252.099 1219.55 400.181C1132.34 387.168 1020.88 388.296 960.656 393.741C879.05 401.066 810.969 419.834 755.281 449.113C703.135 475.804 624.872 475.804 572.726 449.113C516.973 419.834 448.935 401.066 367.44 393.741C307.083 388.318 195.598 387.168 108.459 400.181C160.605 252.121 227.979 125.308 244.822 84.0331C244.822 171.806 270.054 184.775 285.525 168.974C296.725 157.532 314.498 131.505 295.596 49.2646C287.672 14.9387 280.368 0 258.766 0C218.882 0 127.361 131.527 40.7534 415.341C38.8278 415.983 36.7031 416.58 34.7996 417.244C25.1052 420.719 15.6101 425.234 6.42476 430.08C1.24558 432.758 0.20532 434.75 0.20532 444.687V457.501C0.20532 481.625 -2.78267 472.241 14.0386 482.289C46.818 501.963 65.3878 552.954 75.4141 623.199C89.6015 725.557 138.56 789.694 218.218 820.369C292.367 848.72 374.524 847.81 448.027 817.823C488.155 801.424 523.325 775.442 551.301 733.348C600.348 659.517 585.63 613.44 610.95 550.033C632.995 494.66 694.946 494.66 717.035 550.033C742.355 613.44 727.637 659.517 776.662 733.348C804.616 775.442 839.83 801.424 879.958 817.823C953.459 847.821 1035.62 848.731 1109.77 820.369C1189.36 789.694 1238.43 725.557 1252.59 623.199C1262.55 552.954 1281.17 501.941 1313.92 482.289C1330.75 472.241 1327.8 481.625 1327.8 457.501Z'
        fill={fill || 'black'}
      />
    </svg>
  )
}
