import React, { useEffect, useState } from "react";
import axios from "axios";
import Profilecard from "./Profilecard";

const getInitialProfile = (currentUser) => {
  if (currentUser) return currentUser;
  const stored = localStorage.getItem("currentUser");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

const Profile = ({ currentUser }) => {
  const initial = getInitialProfile(currentUser);
  const [profile, setProfile] = useState(initial);
  const [loading, setLoading] = useState(!initial);
  const [error, setError] = useState("");

  useEffect(() => {
    if (profile) return;

    axios
      .get("https://dummyjson.com/users/1")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        setError(err.message || "Failed to load profile details");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [profile]);

  if (loading) {
    return (
      <main className="min-h-[calc(100vh-70px)] flex items-center justify-center p-4 bg-gray-50">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading profile...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-[calc(100vh-70px)] flex items-center justify-center p-4 bg-gray-50">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl max-w-md w-full">
          {error}
        </div>
      </main>
    );
  }

  const avatarUrl =
    profile?.image ||
    profile?.avatar ||
    `https://api.dicebear.com/7.x/initials/svg?seed=${profile?.username || "User"}`;

  const userInfoList = [
    { name: "User ID", value: profile?.id },
    { name: "First Name", value: profile?.firstName },
    { name: "Last Name", value: profile?.lastName },
    { name: "Username", value: profile?.username },
  ];

  return (
    <main className="min-h-[calc(100vh-70px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 bg-gray-100 mb-4 shadow-sm">
            <img
              src={avatarUrl}
              alt={profile?.username || "User Avatar"}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {profile?.firstName} {profile?.lastName}
          </h2>
          <p className="text-sm text-blue-600 font-medium">
            @{profile?.username}
          </p>
        </div>

        <Profilecard userinfo={userInfoList} />
      </div>
    </main>
  );
};

export default Profile;
