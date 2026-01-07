import React, { useState } from "react";
import { register } from "./authApi";

const Register: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      await register({
        userName,
        displayName,
        password,
      });

      alert("✅ Rejestracja zakończona sukcesem!");
      setUserName("");
      setDisplayName("");
      setPassword("");
    } catch (err: any) {
      // obsługa błędów z backendu (Identity)
      const response = err?.response?.data;

      if (Array.isArray(response)) {
        const msg = response.map((e: any) => e.description).join(", ");
        setError(msg);
      } else if (typeof response === "string") {
        setError(response);
      } else {
        setError("Błąd rejestracji");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Rejestracja</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Login"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Nazwa wyświetlana"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Rejestruję..." : "Zarejestruj"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
