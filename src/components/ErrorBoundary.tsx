"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("WebGL or 3D Render Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex flex-col items-center justify-center bg-surface/10 rounded-xl border border-white/5 p-4 text-center">
          <p className="text-on-surface-variant font-body-sm mb-2">3D Visualizer temporarily unavailable.</p>
          <p className="text-primary/70 text-xs">If you are in development, try refreshing the page to clear WebGL contexts.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;