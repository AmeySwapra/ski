import React, { useState, useRef } from 'react'
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom'

const RouteTransition = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(false)
  const nextPath = useRef(null)

  const handleLinkClick = (path) => {
    if (path !== location.pathname) {
      nextPath.current = path
      setIsAnimating(true)
    }
  }

  const handleAnimationEnd = () => {
    if (nextPath.current) {
      navigate(nextPath.current)
      nextPath.current = null
      setIsAnimating(false)
    }
  }

  return (
    <>
      <div className="transition-wrapper">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onNavigate: handleLinkClick })
        )}
      </div>

      {isAnimating && (
        <div
          className="yellow-transition"
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </>
  )
}

export default RouteTransition
