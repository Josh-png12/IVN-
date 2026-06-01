import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'magenta'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ivn-purple focus:ring-offset-2'

    const variants = {
      primary: 'bg-ivn-purple text-white hover:bg-ivn-purple-dark shadow-md hover:shadow-lg',
      outline: 'border-2 border-white text-white hover:bg-white hover:text-ivn-purple-dark',
      ghost: 'text-ivn-purple hover:bg-ivn-purple-light',
      magenta: 'bg-ivn-magenta text-white hover:brightness-110 shadow-md hover:shadow-lg',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
