import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          ATZ Company
        </a>
        <span className="ms-1">&copy; 2024 ATZ GROUP.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Designed by</span>
        <a href="https://atzsoftware.com/" target="_blank" rel="noopener noreferrer">
          Team ATZ
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
