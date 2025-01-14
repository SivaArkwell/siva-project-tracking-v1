import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://sivacreative.com" target="_blank" rel="noopener noreferrer">
          Siva Creative Inc.
        </a>
        <span className="ms-1">&copy; 2021 RKWell Andrew Arkwell</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI for React
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
