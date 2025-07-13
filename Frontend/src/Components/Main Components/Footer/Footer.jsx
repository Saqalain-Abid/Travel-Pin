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
            

            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> | 
              <Link to="/terms-of-service" className="text-blue-600 hover:underline ml-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
