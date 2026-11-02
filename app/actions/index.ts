"use server";

export type EnquiryState = {
  ok: boolean;
  error: string;
  values: { name: string; email: string; phone: string };
} | null;

export async function sendEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "");

  const values = { name, email, phone };

  // Bots ye hidden field bhar dete hain. Chupchap success dikha do.
  if (honeypot) return { ok: true, error: "", values: { name: "", email: "", phone: "" } };

  if (name.length < 2) {
    return { ok: false, error: "Enter your name (at least 2 characters).", values };
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address.", values };
  }
  if (phone && !/^[+\d][\d\s()-]{6,}$/.test(phone)) {
    return { ok: false, error: "Enter a valid phone number, or leave it empty.", values };
  }

  try {
    // TODO: yahan real delivery lagao. Options:
    //  - Resend / Nodemailer se email
    //  - Database (Supabase / Postgres) mein lead save
    //  - Zoho CRM / WhatsApp API
    console.log("New enquiry:", values);
  } catch {
    return {
      ok: false,
      error: "We could not send your enquiry. Please try again or call us.",
      values,
    };
  }

  return { ok: true, error: "", values: { name: "", email: "", phone: "" } };
}