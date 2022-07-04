function AppBody() {
  return (
    <section className="text-gray-400 bg-gray-900">
      <div className="container flex flex-col items-center py-4 px-5 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center md:items-start md:pr-16 md:mb-0 md:w-1/2 md:text-left lg:grow lg:pr-24">
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
            What can you say!
            <br className="hidden lg:inline-block" />
            About today?
          </h1>
          <textarea
            id="hero-field"
            name="hero-field"
            className="py-1 px-3 mb-8 w-full text-base leading-8 text-gray-100 bg-gray-800 focus:bg-transparent rounded border border-gray-700 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-900 transition-colors duration-200 ease-in-out"
          />
          <div className="flex justify-center">
            <button className="inline-flex place-self-end py-2 px-6 text-lg text-white bg-gray-500 hover:bg-gray-600 rounded border-0 focus:outline-none">
              I Say
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <div className="">
            <div className="p-6 bg-gray-800 rounded-lg">
              <img
                className="object-cover object-center mb-8 w-full h-80 rounded"
                src="https://dummyimage.com/720x600"
                alt="content"
              />
              <h2 className="mb-4 text-lg font-medium text-white">
                Winner post
              </h2>
              <p className="text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppBody
