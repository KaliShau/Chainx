'use client'

import { NextPage } from 'next'
import './styles/globals.scss'
import { Button } from '@/shared/ui/button/button.ui'
import { redirect } from 'next/navigation'
import routesConfig from '@/shared/config/routes.config'

const PageNotFound: NextPage = () => {
  const redirectDashboard = () => {
    redirect(routesConfig.signInLink)
  }
  return (
    <div className='not-found'>
      <div>
        <h3>OOOppss!!!</h3>
        <p>
          The page you are looking for does not exists or an other error
          occurred
        </p>
        <Button onClick={redirectDashboard}>Go Back To Home</Button>
      </div>
    </div>
  )
}

export default PageNotFound
