// mostly code from https://reactjs.org/docs/error-boundaries.html

import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from '@reach/router';

export default class ErrorBoundary extends Component {
  public state = {
    hasError: false,
    redirect: false
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error Boundary caught an error', error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  public render() {
    const { hasError, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (hasError) {
      return (
        <h1>
          There was an error with this listing, <Link to="/">Click here</Link>{' '}
          to go back to the home page or five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}
