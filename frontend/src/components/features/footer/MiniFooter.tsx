import ImageError from '@/components/ui/ImageError'
import React from 'react'
import SubFooter from '@/components/features/footer/SubFooter'

function MiniFooter() {
    return (
        <footer className="footer-sm">
            <div className="container-fluid-xs">
                <SubFooter></SubFooter>
            </div>
        </footer>
    )
}

export default MiniFooter