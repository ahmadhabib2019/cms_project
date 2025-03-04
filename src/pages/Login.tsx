import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { FaEnvelope, FaLock } from "react-icons/fa";
import supabase from "../supabaseClient";
import gambarLogin from "../assets/doctor.png"; // Impor gambar
import logoWhite from "../assets/white-logo.webp"; // Impor gambar
import logomediverse from "../assets/logo-mediverse.png"; // Impor gambar
import { PiSignInBold } from "react-icons/pi";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi input
    if (!email || !password) {
      setError("Email dan password harus diisi");
      return;
    }

    // Login dengan Supabase
    const { data, error: supabaseError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (supabaseError) {
      setError(supabaseError.message); // Tampilkan error dari Supabase
    } else {
      setError("");
      console.log("Login berhasil!", data);
      
      // access token dari session
      const accessToken = data.session?.access_token;
      console.log("Bearer Token:", accessToken);

      // Simpan token
      localStorage.setItem("supabase_token", accessToken || "");

      navigate("/dashboard"); // Redirect ke halaman Dashboard setelah login berhasil
    }
  };

  return (
    <div className="login-container">
      <div>
      <img src={logomediverse} className="logo-mediverse" />
      </div>
      <div className="login-left">
        <h2>Welcome to mediverse</h2>
        <p>Masuk dan kelola dashboard Mediverse Anda</p>
        <p></p>
        <form onSubmit={handleLogin}>
          {/* Input Email */}
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
            type="email"
            label="Masukkan email"
            icon={<FaEnvelope />}
            error={error && !email ? error : ""}
          />

          {/* Input Password */}
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi"
            type="password"
            label="Kata Sandi"
            icon={<FaLock />}
            error={error && !password ? error : ""}
          />
<a href="#" className="forgot-password">
          Lupa Kata Sandi?
        </a>
        <br />
          {/* Tombol Login */}
          <button type="submit" className="login-button">
            MASUK SEKARANG <PiSignInBold />
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        
      </div>
      <div className="login-right">
        <div className="rounded-container">
        <div>
            <img src={logoWhite} className="logo-white" />
          </div>
          <div>
            <img src={gambarLogin} className="login-image" />
          </div>
          <h2>Your Personal</h2>
          <h1>Healthcare Assistant</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;