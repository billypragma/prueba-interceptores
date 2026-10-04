// src/components/errors/SafeSection.jsx
import { ErrorBoundary } from 'react-error-boundary';
import SectionFallBack from './SectionFallback';
import { logError } from '../../services/errorLogger';


function SafeSection({name, children, resetKeys}) {
    return (
        <ErrorBoundary
            resetKeys={resetKeys} 
            onError={(error, info) => 
                logError(error, { componentStack: info.componentStack, sectionName: name })
            }
            fallbackRender={({error, resetErrorBoundary }) => (
                <SectionFallBack name={name} error={error} onRetry={resetErrorBoundary} />
            )}
        >
        {children}
        
        </ErrorBoundary>
    ); 
}

export default SafeSection;