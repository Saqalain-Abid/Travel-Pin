import { Link } from 'react-router-dom';
import QuickLinksFooter from './QuickLinks';

export default function Footer() {

  return (
    <>
    <div className='max-w-6xl w-full mx-auto'>
      <QuickLinksFooter />
    </div>
      <footer className="bg-[#f1f1f1] py-2 flex flex-col">
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center text-gray-700">
          </div>
        </div>
      </footer>
    </>
  );
}
