import Role from './Role'
const StaffLanding = ({ roles, name }: { roles: number[]; name: string }) => {
  return (
    <main className="min-h-screen   bg-blue-50">
      <div className="pt-10 flex flex-col justify-center items-center ">
        <h2 className=" text-3xl md:text-4xl font-light text-blue-900 mb-2">
          Welcome {name}
        </h2>
        <h3>Continue to your role as </h3>
      </div>
      <div className="flex flex-wrap justify-center mt-6 ">
        {roles.length > 0 &&
          roles.map((role) => {
            return <Role role={role} />
          })}
      </div>
    </main>
  )
}

export default StaffLanding
