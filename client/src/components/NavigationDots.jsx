import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'education', 'work', 'skills','testimonials', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#313BAC'} : {}}
                // If the item is active then background color is #313BAC otherwise empty object
            />
        ))}
    </div>
  )
}

export default NavigationDots