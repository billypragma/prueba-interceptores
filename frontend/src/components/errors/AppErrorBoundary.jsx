// src/components/errors/AppErrorBoundary.jsx

import { ErrorBoundary } from "react-error-boundary";
import AppFallback from "./AppFallback";
import { logError } from "../../services/errorLogger";

function AppErrorBounday({children}) {
    return (
        <ErrorBoundary 
            FallbackComponent={AppFallback}
            onError={(error, info) => 
                logError(error, { componentStack: info.componentStack, section: "App Global"})
            }>
                {children}
            </ErrorBoundary>
    );
    
}
export default AppErrorBounday;