import React from 'react';

const Page = async ({params}: {
  params: Promise<{ slug: string }>
}) => {

  const {slug} = await params
  console.log(slug)
  // const post = await getPost(slug)

  return (
    <div>
      fff
    </div>
  );
};

export default Page;