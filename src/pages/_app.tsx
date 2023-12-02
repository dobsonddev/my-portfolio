import { AppProps } from 'next/app';
import '../styles/globals.css';
import { useEffect, useMemo } from 'react';

// Import the type for NextWebVitalsMetric
import type { NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
    const vantaEffect = useMemo(() => {
        return () => {
            const script = document.createElement('script');
            script.innerHTML = `
        VANTA.WAVES({
          el: '#my-background',
          color: 0x90c0f,
          waveHeight: 10,
          shininess: 20,
          waveSpeed: 0.8,
          zoom: 0.8
        })`;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        };
    }, []);

    useEffect(() => {
        const cleanup = vantaEffect();
        return cleanup;
    }, [vantaEffect]);

    return (
        <div id="my-background" className="flex flex-col min-h-screen">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
