import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--tactical-blue) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--tactical-blue) / 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'glitch 5s infinite'
        }} />
      </div>
      
      {/* Scan line effect */}
      <div className="scan-line" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="glass-panel hud-corner p-12 animate-fade-in">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <WifiOff className="w-24 h-24 text-destructive animate-pulse" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-glitch">
                <WifiOff className="w-24 h-24 text-destructive opacity-50" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Mission Failed Text */}
          <div className="mb-6">
            <div className="inline-block px-4 py-1 bg-destructive/20 border border-destructive/50 rounded mb-4">
              <span className="text-destructive text-sm font-bold tracking-widest uppercase">
                Error Code: 404
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 tracking-wider uppercase font-tactical animate-glitch">
              MISSION FAILED
            </h1>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-tactical-blue to-transparent mb-6" />
          </div>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            The intel you are looking for has been <span className="text-destructive font-semibold">redacted</span> or 
            deleted from the server. We'll get 'em next time.
          </p>

          {/* Respawn Button */}
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-tactical-blue hover:bg-tactical-blue/80 text-white font-bold tracking-wider uppercase px-8 py-6 text-lg shadow-lg shadow-tactical-blue/20 transition-all hover:scale-105"
            >
              <span className="mr-2">◄</span>
              RESPAWN AT LOBBY
              <span className="ml-2">►</span>
            </Button>
          </Link>

          {/* Additional tactical details */}
          <div className="mt-8 pt-8 border-t border-tactical-border">
            <div className="flex justify-center gap-8 text-xs text-muted-foreground uppercase tracking-widest">
              <div>STATUS: <span className="text-destructive">DISCONNECTED</span></div>
              <div className="hidden sm:block">LOCATION: <span className="text-tactical-blue">UNKNOWN</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
