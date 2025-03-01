import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";


interface User {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState<User | null>(null); // State untuk menyimpan data user
  useEffect(() => {
    // const session = supabase.auth.session();
    // if (session) {
    //   const accessToken = session.access_token;
    //   console.log("Bearer Token dari Session:", accessToken);
    // } else {
    //   console.log("Tidak ada session yang aktif.");
    // }

    const fetchUser = async () => {
      // Ambil data user yang sedang login
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user); // Simpan data user ke state
      } else {
        navigate("/login"); // Redirect ke halaman login jika tidak ada user
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout gagal:", error.message);
    } else {
      navigate("/login"); // Redirect ke halaman login setelah logout
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome To Mediverse</h1>
      {user && (
        <div className="user-info">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.user_metadata?.full_name && (
            <p>
              <strong>Nama Lengkap:</strong> {user.user_metadata.full_name}
            </p>
          )}
        </div>
      )}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;