const StaffLanding = ({ roles, name }: { roles: number[]; name: string }) => {
  console.log(roles)

  return (
    <main className="min-h-screen   bg-blue-50">
      <div className="pt-10 flex flex-col justify-center items-center ">
        <h2 className=" text-2xl font-light text-blue-900 mb-2">
          Welcome {name}
        </h2>
        <h3>Continue to your role as </h3>
      </div>
      <div></div>
    </main>
  )
}

export default StaffLanding
