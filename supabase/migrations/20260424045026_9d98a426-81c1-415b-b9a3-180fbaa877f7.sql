-- Enquiries table to permanently store all submissions
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source TEXT NOT NULL CHECK (source IN ('functions', 'contact')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_date TEXT,
  guests TEXT,
  message TEXT,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  email_error TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Anyone (including unauthenticated visitors) can submit an enquiry
CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries
  FOR INSERT
  WITH CHECK (true);

-- No public read access — enquiries contain personal contact info.
-- Owner views records via the Lovable Cloud dashboard (service role bypasses RLS).

CREATE INDEX idx_enquiries_created_at ON public.enquiries (created_at DESC);
CREATE INDEX idx_enquiries_source ON public.enquiries (source);