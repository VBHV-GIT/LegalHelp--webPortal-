import HeaderBox from '@/components/ui/HeaderBox'
import HomePage from '@/components/ui/HomePage'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { Section } from 'lucide-react'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : 'Shrawani', lastName : 'Wagh', email:"waghshrawani2003@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
         <header className='home-header'>
          {/* <HeaderBox/> */}
       {/* <HeaderBox
       type="greeting"
       title="Welcome"
       user= {loggedIn?.firstName || 'Guest'}
       subtext="access and manage your transactions efficiently "/>
       <TotalBalanceBox
       accounts = {[]}
       totalBanks={1}
       totalCurrentBalance={1250.50}
       /> */}
       <HomePage/>
        </header>
        
      </div>

      {/* <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 12.50},{currentBalance: 123.50}]}
      /> */}
    </section>
  )
}

export default Home