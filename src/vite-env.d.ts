/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: "https://vqmxculxawfltawseqzg.supabase.co";
    readonly VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxbXhjdWx4YXdmbHRhd3NlcXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MDg4MzIsImV4cCI6MjA1NDk4NDgzMn0.rrkx4C2tCVYet5ncUP-b9HQLndXwJ9-RH33ACv_4MCQ";
    // Tambahkan variabel lingkungan lain di sini jika diperlukan
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }