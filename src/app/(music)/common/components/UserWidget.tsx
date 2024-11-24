import { useUser } from "../context/UserProvider";

const UserWidget = () => {
  const { user, login } = useUser();

  return (
    <div className="text-white">
      {user ? (
        <>Welcome {user.display_name}</>
      ) : (
        <button className="btn btn-dark float-end" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
};

export default UserWidget;
