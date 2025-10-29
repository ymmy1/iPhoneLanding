import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 lg:px-10 px-5 flex justify-between items-center'>
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
          <img src={bagImg} alt='search' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
