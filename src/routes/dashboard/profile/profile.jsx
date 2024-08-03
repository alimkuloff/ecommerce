import React from "react";
import { useSelector } from "react-redux";
import { Card, Typography } from "antd";
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

const Profile = () => {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div className=" p-8 border rounded-lg shadow-lg bg-white">
      <Title level={2} className="mb-5 text-xl">User Info</Title>
      <div className="flex gap-5 flex-col">
        <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gray-200">
          <span className="text-gray-600 text-[48px]">
            {user.first_name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <div className="grid  gap-5" >
            <div>
              <Text className="text-[#808080] ">First_name:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]  mt-2">
                {user.first_name}
              </Card>
            </div>
            <div>
              <Text className="text-[#808080]">Username:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]  mt-2">
                {user.username}
              </Card>
            </div>
            <div>
              <Text className="text-[#808080]">Password:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]mt-2">
                {user.password}
              </Card>
            </div>
            <div>
              <Text className="text-[#808080]">Id:</Text>
              <Card className="bg-[#f8f8fa] text-[#323232]  mt-2">
                {user._id}
              </Card>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
