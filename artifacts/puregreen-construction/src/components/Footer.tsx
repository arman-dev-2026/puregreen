export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-baseline font-display text-xl tracking-wide uppercase mb-2">
              <span className="font-normal text-white">Pure</span>
              <span className="font-bold text-primary ml-1">Green</span>
            </div>
            <span className="text-muted-foreground text-[10px] font-sans tracking-widest uppercase">
              Construction Inc.
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-400">
            <a href="tel:6479601307" className="hover:text-primary transition-colors">
              647-960-1307
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="mailto:puregreen.construction@yahoo.com" className="hover:text-primary transition-colors">
              puregreen.construction@yahoo.com
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col items-center text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-display">
            &copy; {currentYear} PureGreen Construction Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
