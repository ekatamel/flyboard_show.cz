declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.html' {
  const content: string
  export default content
}
declare module '*.jpeg' {
  const content: string
  export default content
}
declare module '*.ttf' {
  const content: string
  export default content
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
