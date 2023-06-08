import { ReactNode } from 'react'
import './index.css'

function Layout({ children }: { children: ReactNode }) {
  return <div className='container'>
    {children}
  </div>
}

export default Layout
