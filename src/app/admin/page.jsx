"use client";
import { useState, useEffect } from "react";

const AdminPage = () => {
  const [logInfo, setLogInfo] = useState({
    username: "",
    password: "",
  });

  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLogIn(true);
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogInfo({ ...logInfo, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInfo),
      });

      if (res.ok) {
        const data = await res.json();
        const { token } = data;
        if (token) {
          localStorage.setItem("authToken", token);
          setIsLogIn(true);
        } else {
          console.error("Отсутствует токен в ответе");
        }
      } else {
        console.error("Ошибка входа");
      }
    } catch (error) {
      console.error("Ошибка отправки данных на сервер", error);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("authToken");
    setIsLogIn(false);
    console.log("Токен удален");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container flex flex-col justify-center items-center">
        {isLogIn ? (
          <>
            <h1>Личный кабинет</h1>
            <button onClick={onLogout}>Выйти</button>
          </>
        ) : (
          <div className="w-full max-w-md space-y-8 text-center">
            <span className="text-[20px]">Administration panel</span>
            <form method="POST" onSubmit={onSubmit} className="mt-8 space-y-6">
              <input
                id="username"
                name="username"
                type="text"
                onChange={onChange}
                value={logInfo.username}
                placeholder="Login"
                className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] sm:text-sm"
              />
              <input
                id="password"
                name="password"
                type="password"
                onChange={onChange}
                value={logInfo.password}
                placeholder="Password"
                className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] sm:text-sm"
              />
              <button className="border-[2px] border-[#F75370] p-1 rounded-lg hover:border-[#F75380]">Log in</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
