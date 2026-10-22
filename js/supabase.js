// Konfigurasi Klien Supabase
// Masukkan kredensial dari Checkpoint 3 pada Checkpoint 10
const SUPABASE_CONFIG = {
  URL: "https://multjywzpjuyisbbqejj.supabase.co",
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11bHRqeXd6cGp1eWlzYmJxZWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MTkzMTYsImV4cCI6MjEwODE5NTMxNn0.tH_nmX-zmg2jhMX4PFEzVjrrFZB_PpOsNONGBOSSQi0"
};

let db = null;

function getSupabaseClient() {
  if (!db && window.supabase) {
    if (!SUPABASE_CONFIG.URL || !SUPABASE_CONFIG.ANON_KEY) {
      console.warn("Supabase URL dan Anon Key belum dikonfigurasi di js/supabase.js");
    } else {
      db = window.supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
    }
  }
  return db;
}
