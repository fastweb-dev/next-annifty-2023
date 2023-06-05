const Background = ({children}) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className="bg-white dark:bg-gray-900 transition-all">
      {children}
    </div>
  )
}

export default Background;