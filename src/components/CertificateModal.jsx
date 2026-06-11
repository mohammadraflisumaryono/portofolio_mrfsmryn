import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative bg-[#111] rounded-2xl border border-white/10 w-full max-w-4xl overflow-hidden flex flex-col shadow-2xl"
            style={{ height: "90vh" }}
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* ── Close button (floating top-right) ── */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.92 }}
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-lg transition-colors"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <i className="bx bx-x text-white text-2xl leading-none"></i>
            </motion.button>

            {/* ── PDF area (flex-1 → takes almost all height) ── */}
            <div className="flex-1 overflow-hidden bg-black/60 min-h-0">
              {certificate.pdfUrl ? (
                <motion.iframe
                  src={`${certificate.pdfUrl}#toolbar=1`}
                  title={`${certificate.title} PDF`}
                  className="w-full h-full border-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                />
              ) : (
                /* Fallback when no PDF */
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-600">
                  <i className="bx bx-file-blank text-5xl"></i>
                  <span className="text-sm">No PDF available for this certificate</span>
                </div>
              )}
            </div>

            {/* ── Compact footer ── */}
            <div
              className="border-t border-white/10 px-5 py-3 flex flex-col gap-2"
              style={{ background: "linear-gradient(to right, #141414, #1c1c1c)" }}
            >
              {/* Row 1 — title + issuer + verify button */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug truncate">
                    {certificate.title}
                  </p>
                  <p className="text-[#ffd700] text-xs mt-0.5 truncate">
                    {certificate.issuer}
                  </p>
                </div>

                {certificate.credentialUrl?.trim() && (
                  <motion.a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-black transition-all"
                    style={{ background: "#e99b63" }}
                  >
                    <i className="bx bx-link-external text-sm leading-none"></i>
                    Verify
                  </motion.a>
                )}
              </div>

              {/* Row 2 — date · credential ID */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{certificate.date}</span>
                {certificate.credentialId && (
                  <>
                    <span className="text-gray-700">·</span>
                    <span>
                      ID:{" "}
                      <span className="font-mono text-[#e99b63]">
                        {certificate.credentialId}
                      </span>
                    </span>
                  </>
                )}
              </div>

              {/* Row 3 — skill tags (only if present) */}
              {certificate.skills?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full text-gray-400"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;