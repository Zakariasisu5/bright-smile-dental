import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have gone missing. 
          Let's get you back to our dental services.
        </p>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="w-full">
              Return to Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book Appointment
          </Button>
        </div>
        
        <div className="mt-12 text-muted-foreground">
          <p className="text-sm">Need immediate dental care?</p>
          <p className="text-lg font-semibold text-primary">(555) 123-SMILE</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
