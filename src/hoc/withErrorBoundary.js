import React, { Component } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; 
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload(); 
  };

  

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
            <Box>
              <Typography variant="h4" color="error" gutterBottom>
                Oops! Something went wrong.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We encountered an unexpected issue. Please try reloading the page or contact support if the problem persists.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleReload}
                sx={{ mt: 2 }}
              >
                Reload Page
              </Button>
            </Box>
          </Container>
          {/* Optionally log the error to an external service */}
          {/* <p>{this.state.error && this.state.error.toString()}</p> */}
          {/* <p>{this.state.errorInfo.componentStack}</p> */}
        </div>
      );
    }

    return this.props.children; 
  }
}


const withErrorBoundary = (WrappedComponent) => {
  return function ErrorBoundaryWrapper(props) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default withErrorBoundary;
