import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wnluehglrquhgmlenbtn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndubHVlaGdscnF1aGdtbGVuYnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODg4MzQsImV4cCI6MjA3OTY2NDgzNH0.AcPbMFABD-ouNvdHQidh7d2frHOSOU_bYjAA_TOfewE';

export const supabase = createClient(supabaseUrl, supabaseKey);