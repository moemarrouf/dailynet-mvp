declare module 'mage-icons-react' {
  import { FC, SVGProps } from 'react'
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    color?: string
    strokeWidth?: number | string
  }

  export const Home: FC<IconProps>
  export const Users: FC<IconProps>
  export const Bell: FC<IconProps>
  export const User: FC<IconProps>
} 