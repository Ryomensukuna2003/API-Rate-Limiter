const AuthLayout = ({children}) => {
  return (

    <div className="flex min-h-screen min-w-screen w-full bg-black items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
   
  )
}

export default AuthLayout