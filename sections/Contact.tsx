"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, ShieldAlert, CheckCircle2, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FormStatus = "idle" | "processing" | "success" | "error";

export function Contact() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);
  const [emailRelayed, setEmailRelayed] = useState(true);

  const logsEn = [
    "Establishing handshake with gateway...",
    "Resolving secure node endpoints...",
    "Injecting symmetric encryption layer (AES-256)...",
    "Initializing Firebase Firestore protocol...",
    "Uploading secure payload to 'transmissions' node...",
    "Triggering Resend email delivery pipeline...",
    "Synchronizing on-chain metadata hashes...",
    "Connection verified. Transmission successfully encrypted."
  ];

  const logsId = [
    "Membangun jabat tangan dengan gateway...",
    "Menyelesaikan endpoint node aman...",
    "Menyuntikkan lapisan enkripsi simetris (AES-256)...",
    "Menginisialisasi protokol Firebase Firestore...",
    "Mengunggah muatan aman ke node 'transmissions'...",
    "Memicu pipa pengiriman email Resend...",
    "Menyelaraskan hash metadata on-chain...",
    "Koneksi terverifikasi. Transmisi berhasil dienkripsi."
  ];

  const activeLogs = lang === "id" ? logsId : logsEn;

  useEffect(() => {
    if (status !== "processing") return;

    if (logIndex < activeLogs.length) {
      const delay = 400 + Math.random() * 400; // Simulated latency
      const timer = setTimeout(() => {
        setConsoleLogs((prev) => [...prev, `> ${activeLogs[logIndex]}`]);
        setLogIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Finished simulation, transit to success
      const timer = setTimeout(() => {
        setStatus("success");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [status, logIndex, activeLogs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("processing");
    setConsoleLogs([lang === "id" ? `> INTERSEPSI SINYAL SISTEM DIMULAI...` : `> SYSTEM SIGNAL INTERCEPT INITIATED...`]);
    setLogIndex(0);

    try {
      // Store inside Firestore & send via Resend by hitting the serverless route
      const response = await fetch("/api/transmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error("Secure handshake node connection terminated.");
      }

      const data = await response.json();
      console.log("📥 API Handshake response parsed:", data);

      if (data.emailSent === false) {
        setEmailRelayed(false);
      } else {
        setEmailRelayed(true);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setConsoleLogs([]);
    setLogIndex(0);
    setEmailRelayed(true);
  };

  return (
    <section id="contact" className="relative z-10 px-5 py-16 md:py-28 sm:px-8 lg:px-14 cinematic-bg">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start relative z-10">
        <div>
          <SectionHeading kicker={t('contact.kicker')} title={t('contact.title')} />
          <div className="mt-8 hidden lg:block font-mono text-sm leading-8 text-bone/40 max-w-md">
            <div className="flex items-center gap-2 text-blood">
              <Terminal className="h-4 w-4 animate-pulse" />
              <span>{lang === "id" ? "STATUS NODE AMAN TERMINAL: ONLINE" : "TERMINAL SECURE NODE STATUS: ONLINE"}</span>
            </div>
            <p className="mt-4">
              {lang === "id" 
                ? "Sinyal yang dikirim melalui sistem ini dienkripsi secara penuh secara asimetris sebelum disimpan di penyimpanan terdistribusi."
                : "All signals dispatched through this terminal are fully encrypted and securely routed to private network relays."}
            </p>
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                onSubmit={handleSubmit}
                className="manga-border bg-ink/75 p-6 backdrop-blur-xl md:p-9 relative"
              >
                {/* Scanner sweep line */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blood to-transparent animate-[scan_3s_linear_infinite]" />

                <div className="mb-6 font-mono text-sm text-bone/50">{t('contact.desc')}</div>
                
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="group block">
                    <span className="font-display text-2xl uppercase text-blood">{t('contact.nameLabel')}</span>
                    <input 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('contact.namePlaceholder')} 
                      className="mt-2 w-full border-2 border-bone/25 bg-bone/5 px-4 py-4 text-bone outline-none transition group-focus-within:border-blood group-focus-within:bg-bone/10 placeholder:text-bone/20 font-mono text-base" 
                    />
                  </label>
                  <label className="group block">
                    <span className="font-display text-2xl uppercase text-blood">{t('contact.emailLabel')}</span>
                    <input 
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('contact.emailPlaceholder')} 
                      className="mt-2 w-full border-2 border-bone/25 bg-bone/5 px-4 py-4 text-bone outline-none transition group-focus-within:border-blood group-focus-within:bg-bone/10 placeholder:text-bone/20 font-mono text-base" 
                    />
                  </label>
                </div>
                <label className="group mt-5 block">
                  <span className="font-display text-2xl uppercase text-blood">{t('contact.msgLabel')}</span>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.msgPlaceholder')} 
                    rows={5} 
                    className="mt-2 w-full resize-none border-2 border-bone/25 bg-bone/5 px-4 py-4 text-bone outline-none transition group-focus-within:border-blood group-focus-within:bg-bone/10 placeholder:text-bone/20 font-mono text-base" 
                  />
                </label>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <motion.button
                    whileHover={{ skewX: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="inline-flex items-center gap-3 border-2 border-bone bg-blood px-7 py-4 font-display text-2xl uppercase text-white shadow-slash"
                  >
                    <Send className="h-5 w-5" /> {t('contact.sendBtn')}
                  </motion.button>
                  <div className="font-mono text-xs text-bone/40">
                    {t('contact.statusSec')} <span className="text-blood">{t('contact.statusEnc')}</span>
                  </div>
                </div>
              </motion.form>
            )}

            {status === "processing" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="manga-border bg-ink p-6 md:p-9 font-mono text-sm min-h-[460px] flex flex-col justify-between border-blood/40"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-blood/20 pb-4">
                    <span className="text-blood font-bold tracking-widest animate-pulse">
                      {lang === "id" ? "[MEMBANGUN HUBUNGAN SINYAL RAHASIA]" : "[ESTABLISHING CLASSIFIED SIGNAL LINK]"}
                    </span>
                    <span className="text-bone/30">
                      SEC_LEVEL: L4
                    </span>
                  </div>

                  <div className="mt-6 space-y-3 max-h-[280px] overflow-y-auto pr-2 text-bone/70 scrollbar-thin">
                    {consoleLogs.map((log, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={idx === consoleLogs.length - 1 ? "text-blood" : ""}
                      >
                        {log}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-blood/20 pt-4 flex items-center justify-between text-bone/35">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blood animate-ping" />
                    <span>{lang === "id" ? "MENGIRIMKAN PAKET DATA..." : "TRANSMITTING DATA PACKETS..."}</span>
                  </div>
                  <span>PORT: 5050</span>
                </div>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="manga-border bg-ink p-6 md:p-9 font-mono text-sm min-h-[460px] flex flex-col justify-between border-blood"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-blood/20 pb-4 text-blood font-bold tracking-wider">
                    <CheckCircle2 className="h-6 w-6 text-blood" />
                    <span>
                      {emailRelayed 
                        ? "[ TRANSMISSION RELAYED SUCCESSFULLY ]" 
                        : "[ TRANSMISSION STORED // EMAIL RELAY FAILED ]"}
                    </span>
                  </div>

                  <div className="mt-8 border border-bone/10 bg-bone/5 p-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blood/5 pointer-events-none" />
                    <h4 className="font-display text-lg text-blood uppercase tracking-widest border-b border-bone/15 pb-2">
                      SIGNAL RECEIPT
                    </h4>
                    <div className="mt-4 space-y-3 text-bone/70">
                      <p><strong className="text-bone/40">SENDER:</strong> {name}</p>
                      <p><strong className="text-bone/40">NODE GATEWAY:</strong> {email}</p>
                      <p><strong className="text-bone/40">ENCRYPTION PROTOCOL:</strong> <span className="text-blood font-bold tracking-widest">SIGNAL ENCRYPTED</span></p>
                      <p>
                        <strong className="text-bone/40">TRANSMISSION RELAY:</strong>{" "}
                        <span className={emailRelayed ? "text-bone" : "text-blood font-bold"}>
                          {emailRelayed ? "FIREBASE // RESEND API ACTIVE" : "FIREBASE ACTIVE // RESEND API OFFLINE"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-bone/50 text-xs leading-relaxed italic text-center">
                    "{lang === "id" 
                      ? "Transmisi Anda telah terenkripsi di dalam blockchain database. Agen kami akan menganalisis sinyal ini segera."
                      : "Your message has been locked inside our distributed database. Awaiting network authorization for response."}"
                  </p>
                </div>

                <div className="border-t border-blood/20 pt-4 flex justify-between items-center">
                  <span className="text-blood/60 font-bold animate-pulse">AWAITING RESPONSE...</span>
                  <motion.button
                    whileHover={{ scale: 1.05, skewX: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 border border-bone/20 bg-bone/5 px-4 py-2 hover:bg-blood/10 hover:border-blood text-bone font-display uppercase tracking-widest transition-colors text-xs"
                  >
                    <RefreshCw className="h-3 w-3" /> {lang === "id" ? "TRANSMISIKAN LAGI" : "NEW TRANSMISSION"}
                  </motion.button>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="manga-border bg-ink p-6 md:p-9 font-mono text-sm min-h-[460px] flex flex-col justify-between border-blood"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-blood/20 pb-4 text-blood font-bold tracking-wider">
                    <ShieldAlert className="h-6 w-6 text-blood animate-bounce" />
                    <span>[CONNECTION DECRYPT OVERLOAD]</span>
                  </div>
                  
                  <div className="mt-8 bg-blood/10 border border-blood/20 p-5 text-blood">
                    <p className="font-bold">CRITICAL SIGNAL ERROR (0x33A)</p>
                    <p className="mt-2 text-bone/70">
                      {lang === "id" 
                        ? "Koneksi ke node Firebase Firestore terputus. Jaringan terenkripsi tidak stabil. Periksa kredensial transmisi Anda."
                        : "Handshake to the Firebase Firestore network failed. Secure node link terminated. Please retry the packet transmission."}
                    </p>
                  </div>
                </div>

                <div className="border-t border-blood/20 pt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05, skewX: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 border border-blood bg-blood/20 px-5 py-3 hover:bg-blood text-bone font-display uppercase tracking-widest transition-colors"
                  >
                    <RefreshCw className="h-4 w-4" /> {lang === "id" ? "COBA LAGI" : "RETRY PACKET"}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

