import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

const CloseButton = () => {
  return (
    <Link href="/" passHref>
      <button className="h-7 w-7">
        <FaTimes className="h-7 w-4" />
      </button>
    </Link>
  );
};

export default CloseButton;
