import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL dan Anon Key harus diisi di environment variables.");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase; // Default export