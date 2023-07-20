import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>this is profile page</div>
      <div>Username : {username}</div>
    </div>
  );
};

export default ProfilePage;
