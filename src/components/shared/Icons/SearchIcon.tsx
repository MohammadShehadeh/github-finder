import { SVGProps } from 'react';

export const SearchIcon = ({ ...restProp }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...restProp}>
      <path d="M9.5 14C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14zm6 0h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5z"></path>
    </svg>
  );
};
