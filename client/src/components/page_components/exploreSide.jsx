import SearchedUsers from "../SearchedUsers";
import Input from "../input";

const Explore = () => {
  const dataFoundUsers = [
    {
      username: "enspire",
      avatar: "/logo.png",
      nickname: "Enspire",
      bio: "Hi, follow me!",
    },
    {
      username: "enspire",
      avatar: "/logo.png",
      nickname: "Enspire",
      bio: "Hi, follow me!",
    },
    {
      username: "enspire",
      avatar: "/logo.png",
      nickname: "Enspire",
      bio: "Hi, follow me!",
    },
    {
      username: "enspire",
      avatar: "/logo.png",
      nickname: "Enspire",
      bio: "Hi, follow me!",
    },
    {
      username: "enspire",
      avatar: "/logo.png",
      nickname: "Enspire",
      bio: "Hi, follow me!",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex p-1 mb-2">
          <Input />
        </div>
        <div
          className={`w-full h-full flex ${dataFoundUsers.length ? "flex-col" : "items-center justify-center mt-[50%]"}`}
        >
          {dataFoundUsers.length ? (
            <>
              {dataFoundUsers.map((user, index) => {
                return (
                  <SearchedUsers
                    key={index}
                    username={user.username}
                    avatar={user.avatar}
                    nickname={user.nickname}
                    bio={user.bio}
                  />
                );
              })}
            </>
          ) : (
            <div className="text-lg text-gray-500">Nothing yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
