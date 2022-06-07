import React from 'react';
import ResetCSS from './global/resetcss';
import GitHubProvider from './providers/github-provider';
import App from './App';

function Providers() {
  return (
      <main>
        <GitHubProvider>
            <ResetCSS/>
            <App />
        </GitHubProvider>
    </main>
  )
}

export default Providers;