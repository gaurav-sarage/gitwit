import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className="bg-white px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
                <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="GitWit Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">GitWit</span>
            </Link>
            <div className="flex items-center lg:order-2">
              {!userId && (
                <>
                <Link href="/sign-in" className="text-black focus:ring-4 focus:ring-gray-300 hover:text-indigo-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2 focus:outline-none">Login</Link>

                <Link href="/sign-up" className="text-white hover:bg-black focus:ring-4 font-medium bg-indigo-700 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Register</Link>
                </>
              )}
              
              {/* {userId && (
                <Link href="profile" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                    Profile
                </Link>
              )} */}
              <div className='block py-2 px-3 text-white rounded md:text-blue-700 md:p-0'>
                <UserButton className="gap-2" afterSignOutUrl='/' />
            </div>

                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/about" className="block py-2 pr-4 pl-3 text-black hover:text-indigo-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0" aria-current="page">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="block py-2 pr-4 pl-3 text-black hover:text-indigo-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Projects</Link>
                    </li>
                    <li>
                        <Link href="/trending-projects" className="block py-2 pr-4 pl-3 text-black hover:text-indigo-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Trending Projects</Link>
                    </li>
                    <li>
                        <Link href="/community" className="block py-2 pr-4 pl-3 text-black hover:text-indigo-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Community</Link>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
    )
};

export default Header;
