"use client"
import React from 'react'
import Modal from '@/components/features/modal/Modal'
import { motion } from 'framer-motion'

interface ModalConfirmDeleteProps {
  id: string;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onClose: () => void;
}

function ModalConfirmDelete({
  id,
  title = "Xác nhận xóa",
  message = "Bạn có chắc chắn muốn xóa không?",
  onConfirm,
  onClose
}: ModalConfirmDeleteProps) {

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal id={id} onClose={onClose} title="">
      <div className="modal-body text-center py-4">
        {/* Icon warning với Framer Motion */}
        <motion.div
          className="mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <div className="delete-icon-wrapper mx-auto d-flex align-items-center justify-content-center" style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--theme-color)',
          }}>
            <motion.i
              className="fa-solid fa-trash-can text-white"
              style={{ fontSize: '36px' }}
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h4
          className="fw-bold mb-3"
          style={{ color: '#2d3748', fontSize: '24px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h4>

        {/* Message */}
        <motion.p
          className="mb-0 text-muted"
          style={{ fontSize: '15px', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>

        <motion.p
          className="text-muted small mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <i className="fa-solid fa-triangle-exclamation me-1 text-warning"></i>
          Hành động này không thể hoàn tác!
        </motion.p>
      </div>

      <motion.div
        className="modal-footer border-0 justify-content-center gap-3 pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          type="button"
          className="btn btn-light btn-lg px-4 fw-semibold shadow-sm"
          onClick={onClose}
          style={{
            minWidth: '120px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <i className="fa-solid fa-xmark me-2"></i>
          Hủy
        </motion.button>

        <motion.button
          type="button"
          className="btn btn-danger btn-lg px-4 fw-semibold"
          onClick={handleConfirm}
          style={{
            minWidth: '120px',
            borderRadius: '12px',
            background: 'var(--theme-color)',
            border: 'none'
          }}
          whileHover={{
            scale: 1.05,

          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <i className="fa-solid fa-trash-can me-2"></i>
          Xóa ngay
        </motion.button>
      </motion.div>
    </Modal>
  )
}

export default ModalConfirmDelete
