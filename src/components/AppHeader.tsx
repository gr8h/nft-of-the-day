function Header() {
  return (
    <header className="text-gray-400 bg-gray-900">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-white md:mb-0">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="32.000000pt"
            height="32.000000pt"
            viewBox="0 0 32.000000 32.000000"
            preserveAspectRatio="xMidYMid meet"
            className="p-2 w-10 h-10 text-white bg-white rounded-full"
          >
            {' '}
            <g
              transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              {' '}
              <path d="M73 290 c-18 -10 -39 -33 -48 -51 -9 -17 -12 -28 -7 -25 14 9 20 -13 14 -51 -4 -31 -3 -33 26 -33 23 0 36 7 49 26 22 35 8 57 -41 64 l-38 5 24 21 c12 12 39 31 58 43 27 16 30 21 15 21 -11 0 -34 -9 -52 -20z m17 -109 c0 -10 -7 -24 -15 -31 -13 -11 -15 -8 -15 19 0 21 5 31 15 31 8 0 15 -8 15 -19z" />{' '}
              <path d="M196 295 c4 -8 10 -12 15 -10 5 3 30 -13 55 -37 46 -42 47 -42 31 -11 -18 34 -66 73 -91 73 -9 0 -13 -6 -10 -15z" />{' '}
              <path d="M148 198 c-24 -19 -31 -53 -14 -67 10 -9 16 -9 21 -1 5 8 11 8 21 -1 11 -9 15 -8 18 2 10 31 13 69 5 69 -4 0 -13 2 -21 5 -7 3 -21 0 -30 -7z m32 -22 c0 -16 -18 -31 -27 -22 -8 8 5 36 17 36 5 0 10 -6 10 -14z" />{' '}
              <path d="M224 175 c4 -22 13 -43 19 -47 7 -5 3 -8 -11 -8 -13 0 -20 -4 -17 -10 20 -32 67 8 76 65 6 35 -14 31 -27 -5 -11 -32 -13 -33 -13 -9 -1 15 -8 33 -18 40 -15 13 -15 10 -9 -26z" />{' '}
              <path d="M282 94 c-13 -19 -39 -45 -59 -57 -20 -11 -31 -23 -25 -25 20 -6 75 32 95 66 26 45 17 59 -11 16z" />{' '}
              <path d="M10 116 c0 -21 35 -70 63 -86 41 -25 72 -26 34 -2 -15 11 -43 36 -62 57 -19 20 -35 34 -35 31z" />{' '}
            </g>{' '}
          </svg>
          <span className="ml-3 text-xl">NFT of the Day</span>
        </a>
        <nav className="flex flex-wrap justify-center items-center text-base md:mx-auto">
          <a className="mr-5 hover:text-white"></a>
        </nav>
        <button className="inline-flex items-center py-1 px-3 mt-4 text-base bg-gray-800 hover:bg-gray-700 rounded border-0 focus:outline-none md:mt-0">
          Connect Wallet
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
export default Header
