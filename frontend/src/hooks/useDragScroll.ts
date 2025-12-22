// ============================================================================
// CUSTOM HOOK - Drag to Scroll
// ============================================================================
// Hook này cho phép scroll bằng cách kéo chuột (drag)
// Giống như scroll trên mobile nhưng dùng chuột trên desktop
// ============================================================================

import { useRef, useEffect } from "react";

/**
 * Hook để enable drag-to-scroll cho một element
 *
 * Usage:
 * ```tsx
 * const scrollRef = useDragScroll();
 * return <div ref={scrollRef} className="overflow-x-scroll">...</div>
 * ```
 *
 * @returns ref - Ref để attach vào element cần scroll
 */
export function useDragScroll<T extends HTMLElement = HTMLDivElement>() {
    const scrollRef = useRef<T>(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        // -------------------------------------------------------------------------
        // STATE VARIABLES
        // -------------------------------------------------------------------------
        let isDown = false; // Đang giữ chuột?
        let startX: number; // Vị trí X khi bắt đầu kéo
        let scrollLeft: number; // Scroll position khi bắt đầu kéo
        let velocity = 0; // Tốc độ kéo (cho momentum scrolling)
        let lastX = 0; // Vị trí X lần trước (để tính velocity)
        let rafId: number | null = null; // RequestAnimationFrame ID

        // -------------------------------------------------------------------------
        // MOUSE DOWN - Bắt đầu kéo
        // -------------------------------------------------------------------------
        const handleMouseDown = (e: MouseEvent) => {
            // Chỉ xử lý left click (button 0)
            if (e.button !== 0) return;

            isDown = true;

            // Lưu vị trí ban đầu
            startX = e.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
            lastX = e.pageX;
            velocity = 0;

            // Hủy momentum scrolling nếu đang chạy
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }

            // Prevent text selection khi drag
            e.preventDefault();
        };

        // -------------------------------------------------------------------------
        // MOUSE LEAVE - Rời khỏi element
        // -------------------------------------------------------------------------
        const handleMouseLeave = () => {
            if (!isDown) return;

            isDown = false;

            // Apply momentum scrolling khi thả chuột
            applyMomentum();
        };

        // -------------------------------------------------------------------------
        // MOUSE UP - Thả chuột
        // -------------------------------------------------------------------------
        const handleMouseUp = () => {
            if (!isDown) return;

            isDown = false;

            // Apply momentum scrolling
            applyMomentum();
        };

        // -------------------------------------------------------------------------
        // MOUSE MOVE - Di chuyển chuột (kéo)
        // -------------------------------------------------------------------------
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;

            e.preventDefault();

            // Tính khoảng cách di chuyển
            const x = e.pageX - element.offsetLeft;
            const walk = (x - startX) * 1.5; // Nhân 1.5 để scroll nhanh hơn

            // Scroll element
            element.scrollLeft = scrollLeft - walk;

            // Tính velocity cho momentum scrolling
            velocity = e.pageX - lastX;
            lastX = e.pageX;
        };

        // -------------------------------------------------------------------------
        // MOMENTUM SCROLLING - Scroll có quán tính
        // -------------------------------------------------------------------------
        const applyMomentum = () => {
            // Chỉ apply nếu velocity đủ lớn
            if (Math.abs(velocity) < 1) {
                velocity = 0;
                return;
            }

            // Scroll theo velocity
            element.scrollLeft -= velocity * 2;

            // Giảm dần velocity (friction)
            velocity *= 0.95;

            // Continue animation
            rafId = requestAnimationFrame(applyMomentum);
        };

        // -------------------------------------------------------------------------
        // ATTACH EVENT LISTENERS
        // -------------------------------------------------------------------------
        element.addEventListener("mousedown", handleMouseDown);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("mouseup", handleMouseUp);
        element.addEventListener("mousemove", handleMouseMove);

        // -------------------------------------------------------------------------
        // CLEANUP
        // -------------------------------------------------------------------------
        return () => {
            element.removeEventListener("mousedown", handleMouseDown);
            element.removeEventListener("mouseleave", handleMouseLeave);
            element.removeEventListener("mouseup", handleMouseUp);
            element.removeEventListener("mousemove", handleMouseMove);

            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return scrollRef;
}

// ============================================================================
// ADVANCED VERSION - With Options
// ============================================================================
interface DragScrollOptions {
    direction?: "horizontal" | "vertical" | "both"; // Hướng scroll
    speed?: number; // Tốc độ scroll (1 = normal)
    momentum?: boolean; // Enable momentum scrolling
    momentumFriction?: number; // Độ ma sát (0-1)
}

/**
 * Hook nâng cao với options
 */
export function useDragScrollAdvanced<T extends HTMLElement = HTMLDivElement>(
    options: DragScrollOptions = {}
) {
    const {
        direction = "horizontal",
        speed = 1.5,
        momentum = true,
        momentumFriction = 0.95,
    } = options;

    const scrollRef = useRef<T>(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        let isDown = false;
        let startX: number, startY: number;
        let scrollLeft: number, scrollTop: number;
        let velocityX = 0,
            velocityY = 0;
        let lastX = 0,
            lastY = 0;
        let rafId: number | null = null;

        const handleMouseDown = (e: MouseEvent) => {
            if (e.button !== 0) return;

            isDown = true;
            element.classList.add("grabbing");

            startX = e.pageX - element.offsetLeft;
            startY = e.pageY - element.offsetTop;
            scrollLeft = element.scrollLeft;
            scrollTop = element.scrollTop;
            lastX = e.pageX;
            lastY = e.pageY;
            velocityX = velocityY = 0;

            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }

            e.preventDefault();
        };

        const handleMouseLeave = () => {
            if (!isDown) return;
            isDown = false;
            element.classList.remove("grabbing");
            if (momentum) applyMomentum();
        };

        const handleMouseUp = () => {
            if (!isDown) return;
            isDown = false;
            element.classList.remove("grabbing");
            if (momentum) applyMomentum();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();

            const x = e.pageX - element.offsetLeft;
            const y = e.pageY - element.offsetTop;

            if (direction === "horizontal" || direction === "both") {
                const walkX = (x - startX) * speed;
                element.scrollLeft = scrollLeft - walkX;
                velocityX = e.pageX - lastX;
                lastX = e.pageX;
            }

            if (direction === "vertical" || direction === "both") {
                const walkY = (y - startY) * speed;
                element.scrollTop = scrollTop - walkY;
                velocityY = e.pageY - lastY;
                lastY = e.pageY;
            }
        };

        const applyMomentum = () => {
            if (Math.abs(velocityX) < 1 && Math.abs(velocityY) < 1) {
                velocityX = velocityY = 0;
                return;
            }

            if (direction === "horizontal" || direction === "both") {
                element.scrollLeft -= velocityX * 2;
                velocityX *= momentumFriction;
            }

            if (direction === "vertical" || direction === "both") {
                element.scrollTop -= velocityY * 2;
                velocityY *= momentumFriction;
            }

            rafId = requestAnimationFrame(applyMomentum);
        };

        element.addEventListener("mousedown", handleMouseDown);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("mouseup", handleMouseUp);
        element.addEventListener("mousemove", handleMouseMove);

        return () => {
            element.removeEventListener("mousedown", handleMouseDown);
            element.removeEventListener("mouseleave", handleMouseLeave);
            element.removeEventListener("mouseup", handleMouseUp);
            element.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [direction, speed, momentum, momentumFriction]);

    return scrollRef;
}
