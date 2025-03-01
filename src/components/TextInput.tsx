import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import ikon eye dan eye-slash

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  error?: string;
  icon?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  type = "text",
  error = "",
  icon = null,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`input-field ${error ? "input-error" : ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle ikon eye/eye-slash */}
          </button>
        )}
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default TextInput;