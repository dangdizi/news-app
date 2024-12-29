"use client"; // Đánh dấu đây là Client Component

import { useParams } from 'next/navigation';

const UserDetails = () => {
  const params = useParams(); // Dùng để lấy `id` từ URL
  const id = params?.id;

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserDetails;
