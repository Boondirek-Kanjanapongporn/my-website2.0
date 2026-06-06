import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/data/contactConfig";
import { Send, CheckCircle, XCircle, Loader, Mail } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current!,
        emailConfig.publicKey
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
        Get in touch
      </p>
      <h1 className="mb-2 flex items-center gap-3 text-4xl font-bold tracking-tight">
        Contact <Mail size={32} />
      </h1>
      <p className="text-muted-foreground mb-12 text-sm">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Left: form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="border-border bg-background focus:border-foreground rounded-sm border px-4 py-2.5 text-sm transition-colors outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="border-border bg-background focus:border-foreground rounded-sm border px-4 py-2.5 text-sm transition-colors outline-none"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
              className="border-border bg-background focus:border-foreground rounded-sm border px-4 py-2.5 text-sm transition-colors outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your message..."
              className="border-border bg-background focus:border-foreground resize-none rounded-sm border px-4 py-2.5 text-sm transition-colors outline-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-fit cursor-pointer items-center gap-2 rounded-sm border px-6 py-2.5 text-sm font-medium transition-colors duration-200 disabled:opacity-50"
            style={{ borderColor: "hsl(var(--border))" }}
            onMouseEnter={(e) => {
              if (status !== "loading")
                e.currentTarget.style.backgroundColor =
                  "hsl(var(--skill-tile))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {status === "loading" ? (
              <>
                <Loader size={15} className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </button>

          {/* Status messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-green-500">
              <CheckCircle size={16} /> Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-500">
              <XCircle size={16} /> Something went wrong. Please try again.
            </div>
          )}
        </form>

        {/* Right: info */}
        <div className="flex flex-col gap-8">
          <div
            className="flex flex-col gap-6 rounded-sm p-8"
            style={{ backgroundColor: "hsl(var(--skill-tile))" }}
          >
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                Email
              </p>
              <a
                href="mailto:boondirek1@gmail.com"
                className="text-sm hover:underline"
              >
                boondirek1@gmail.com
              </a>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                Location
              </p>
              <p className="text-sm">Glasgow, Scotland, United Kingdom</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                Response time
              </p>
              <p className="text-sm">Usually within 24–48 hours</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                Open to
              </p>
              <p className="text-sm">
                MSc programme enquiries, Engineering roles, and collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}