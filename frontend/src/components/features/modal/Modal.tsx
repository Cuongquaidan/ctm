"use client";
import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom';
import { motion } from "framer-motion";
interface ModalProps {
  onClose: () => void;
  id?: string;
  title?: string;
  description?: string;
  classNameRoot?: string;
  classNameMainModal?: string;
  children: ReactNode;
}

function Modal({ onClose, id, title, description, classNameRoot, classNameMainModal, children }: ModalProps) {
  return createPortal(
    <div className={`${classNameRoot}`}>
      {/* Overlay + Modal */}
      <motion.div

        className="theme-modal show"
        tabIndex={-1}
        id={id}
        aria-hidden="false"
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 1050,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* --- Lớp phủ mờ nền --- */}
        <div
          className="modal-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
          onClick={
            () => {
              onClose();
            }
          }
        ></div>

        {/* --- Modal chính --- */}
        <div
          className={`modal-dialog modal-dialog-centered modal-fullscreen-sm-down ${classNameMainModal}`}
          style={{
            position: "relative",
            zIndex: 2,
            maxHeight: "90vh",
            margin: "auto",
          }}
        >
          <div className="modal-content  background-image-2 rounded-3 shadow-lg border-0 p-3" style={{
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}>
            <div className="modal-header border-0 flex-col  pb-2"
              style={{
                alignItems: "start",
                justifyContent: "start",
                flexShrink: 0,
              }}
            >
              {title && (<h5 className="modal-title fw-bold w-100">{title}</h5>)}
              {description && (<p className='mt-1 text-content text-start'>{description}</p>)}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  onClose();
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>


            <div
              style={{
                width: "100%",
                height: "100%",
                overflowY: "scroll",
                overflowX: "hidden"
              }}
              className='hide-scrollbar'
            >
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}


export default Modal