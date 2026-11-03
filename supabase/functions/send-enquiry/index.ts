import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_TO = "timesberwickmgmt@gmail.com";

interface Payload {
  type: "contact" | "functions";
  name: string;
  email: string;
  phone?: string;
  date?: string;
  guests?: string | number;
  message?: string;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Payload;

    const isStr = (v: unknown): v is string => typeof v === "string";
    const trim = (v: unknown, max: number) => (isStr(v) ? v.trim().slice(0, max) : "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const type = body?.type;
    if (type !== "contact" && type !== "functions") {
      return new Response(JSON.stringify({ error: "Invalid enquiry type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const name = trim(body?.name, 100);
    const email = trim(body?.email, 255);
    const phone = trim(body?.phone, 30);
    const date = trim(body?.date, 50);
    const guests = trim(body?.guests, 20);
    const message = trim(body?.message, 1000);

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!emailRegex.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const { error: dbError } = await supabase.from("enquiries").insert({
      source: type,
      name,
      email,
      phone: phone || null,
      event_date: date || null,
      guests: guests || null,
      message: message || null,
      email_sent: false,
    });
    if (dbError) console.error("DB insert error:", dbError);

    const label = type === "functions" ? "Function Enquiry" : "Contact Message";
    const rows: [string, string][] = [
      ["Type", label],
      ["Name", name],
      ["Email", email],
      ["Phone", phone || "—"],
      ["Preferred Date", date || "—"],
      ["Guests", guests || "—"],
      ["Message", message || "—"],
    ];
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#fff;">
        <h2 style="color:#0F172A;border-bottom:2px solid #C9A961;padding-bottom:8px;">New Enquiry Submission</h2>
        <p style="color:#55575d;">A new ${esc(label.toLowerCase())} was just submitted from the website.</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          ${rows.map(([k, v]) => `<tr><td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:600;color:#0F172A;width:140px;vertical-align:top;">${esc(k)}</td><td style="padding:10px 8px;border-bottom:1px solid #eee;color:#333;white-space:pre-wrap;">${esc(String(v))}</td></tr>`).join("")}
        </table>
        <p style="color:#999;font-size:12px;margin-top:24px;">Sent from timesberwick.com.au</p>
      </div>`;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Times Berwick <onboarding@resend.dev>",
        to: [NOTIFY_TO],
        reply_to: email,
        subject: "New Enquiry Submission",
        html,
      }),
    });

    const emailData = await emailRes.json();
    if (!emailRes.ok) {
      console.error("Resend error:", emailData);
      return new Response(JSON.stringify({ error: "Unable to send email at this time. Please try again later." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-enquiry error:", e);
    return new Response(JSON.stringify({ error: "An unexpected error occurred. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
