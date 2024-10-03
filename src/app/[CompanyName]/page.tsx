import React from 'react';

interface PageProps {
  params: {
    CompanyName: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      {params.CompanyName}
    </div>
  );
};

export default Page