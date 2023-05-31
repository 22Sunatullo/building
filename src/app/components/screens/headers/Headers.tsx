import { FC } from "react"

import styles from './Headers.module.css'

export const Headers:FC = () => {
  return (
    <header>
       <div className="container">
           <nav className="nav        ">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
           </nav>
       </div>
    </header>
  )
}
 