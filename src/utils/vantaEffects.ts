import { MutableRefObject } from 'react';

export const applyVantaEffect = (theme: string, vantaRef: MutableRefObject<HTMLDivElement | null>, vantaEffect: MutableRefObject<{ destroy: () => void } | null>) => {
    if (typeof window !== 'undefined') {
        const THREE = require('three');
        window.THREE = THREE; // Ensure THREE is available for Vanta.js
        const NET = require('vanta/dist/vanta.net.min.js').default;
        const DOTS = require('vanta/dist/vanta.dots.min.js').default;

        if (vantaEffect.current) vantaEffect.current.destroy();

        switch (theme) {
            case 'vector':
                vantaEffect.current = NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 20.00,
                    minWidth: 20.00,
                    scale: 0.50,
                    scaleMobile: 1.50,
                    points: 6.00,
                    maxDistance: 29.00,
                    spacing: 25.00,
                    color: '#D9185A',
                    backgroundColor: '#21143C',
                    vertexColor: '#21143C',
                    size: 5.00
                });
                break;
            case 'dots':
                vantaEffect.current = DOTS({
                    el: vantaRef.current,
                    backgroundColor: '#ebe2e2',
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    showLines: false
                });
                break;
            default:
                if (vantaEffect.current) vantaEffect.current.destroy();
                break;
        }
    }

    return () => {
        if (vantaEffect.current) vantaEffect.current.destroy();
    };
};
