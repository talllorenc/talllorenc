const AdminInfo = ({onLogout}) => {
    const logout = ()=>{
        onLogout()
    }
  return (
    <div>
      <div className="flex justify-between">
        <span>TALLLORENC</span>
        <button onClick={logout} className="border-[2px] border-red-600 p-1 rounded-lg hover:border-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminInfo;
