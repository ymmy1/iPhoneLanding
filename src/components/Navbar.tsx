import { useState } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='relative w-full py-5 lg:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt='Apple' width={14} height={18} />
        <div className='flex flex-1 justify-center max-lg:hidden'>
          {navLists.map((item) => (
            <a
              className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
              key={item}
              href='#'
            >
              {item}
            </a>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-lg:justify-end max-lg:flex-1'>
          <img src={searchImg} alt='search' width={18} height={18} />
          <img src={bagImg} alt='bag' width={18} height={18} />
          <button
            aria-label='Open menu'
            aria-expanded={menuOpen}
            aria-controls='mobile-curtain-menu'
            onClick={() => setMenuOpen((v) => !v)}
            className='hidden max-lg:block p-1 cursor-pointer text-gray hover:text-white transition-colors'
            type='button'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <path d='M3 6h18' />
              <path d='M3 12h18' />
              <path d='M3 18h18' />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sliding curtain menu for mobile */}
      <div
        id='mobile-curtain-menu'
        className={`lg:hidden absolute inset-x-0 top-0 z-50 overflow-hidden bg-black/95 backdrop-blur-sm border-b border-white/10 transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        role='dialog'
        aria-modal='true'
      >
        <div className='relative px-5 py-6'>
          <button
            type='button'
            aria-label='Close menu'
            onClick={() => setMenuOpen(false)}
            className='absolute cursor-pointer right-5 top-5 p-2 text-gray hover:text-white transition-colors'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <path d='M6 6l12 12' />
              <path d='M18 6l-12 12' />
            </svg>
          </button>
          <ul className='flex flex-col p-10 h-screen'>
            {navLists.map((item) => (
              <li key={item}>
                <a
                  href='#'
                  onClick={() => setMenuOpen(false)}
                  className='block py-[3%] text-3xl text-white hover:text-gray transition-colors'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
