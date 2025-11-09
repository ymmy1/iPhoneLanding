import { useEffect, useRef, useState } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Lock page scroll (html/body) when the curtain menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (menuOpen) {
      html.classList.add('overflow-hidden');
      body.classList.add('overflow-hidden', 'overscroll-none', 'touch-none');
    } else {
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden', 'overscroll-none', 'touch-none');
    }
    return () => {
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden', 'overscroll-none', 'touch-none');
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('.collapsed-menu_item');
      if (!items.length) return;

      if (menuOpen) {
        gsap.set(items, { opacity: 0, y: 8 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.035,
          ease: 'power2.out',
          delay: 0.15,
        });
      } else {
        gsap.to(items, {
          opacity: 0,
          duration: 0.1,
          ease: 'power2.in',
        });
      }
    },
    { dependencies: [menuOpen], scope: menuRef }
  );

  return (
    <header className='relative w-full py-5 lg:px-10 px-5 flex justify-between items-center bg-zinc'>
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
        <div className='flex items-center gap-7 max-lg:justify-end max-lg:flex-1'>
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
        ref={menuRef}
        className={`lg:hidden absolute inset-x-0 top-0 z-50 overflow-hidden bg-zinc backdrop-blur-sm border-b border-white/10 transition-[height] duration-400 ease-in ${
          menuOpen ? 'h-screen' : 'h-0 pointer-events-none'
        }`}
        role='dialog'
        aria-modal='true'
      >
        <div className='relative px-5 py-6'>
          <button
            type='button'
            aria-label='Close menu'
            onClick={() => setMenuOpen(false)}
            className='absolute cursor-pointer right-3 top-3 p-2 text-gray hover:text-white transition-colors'
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
                  className='collapsed-menu_item block py-[2%] text-3xl text-white hover:text-gray transition-colors'
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
