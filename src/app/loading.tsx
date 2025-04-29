import { useThemeMode } from '@/context/ThemeMode'
import React from 'react'
import { Atom } from 'react-loading-indicators'

const Loading = () => {
    const { theme } = useThemeMode()
  return (
    <div className='flex justify-center items-center p-40'>
      <Atom color={theme ? "#efefef" : "#161716"} size="medium" text="" textColor="" />
    </div>
  )
}

export default Loading