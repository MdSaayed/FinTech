import React, { Component } from "react";

class ErrorBoundary extends Component {
  // State To Track If An Error Has Occurred
  state = { HasError: false };

  // Lifecycle Method To Update State When An Error Is Detected
  static GetDerivedStateFromError() {
    return { HasError: true };
  }

  // Lifecycle Method To Log The Error Details (Only In Development Mode)
  componentDidCatch(Error, Info) {
    console.error("Error In Component:", Error, Info);
  }

  render() {
    // If An Error Occurs, Display The Error Message UI
    if (this.state.HasError) {
      return (
        <section>
          <div className="Container">
            <div className="Flex Items-Center Justify-Center Min-H-Screen Bg-Gray-100">
              <div className="Text-Center P-6 Bg-White Shadow-Lg Rounded-Lg Max-W-Md W-Full">
                <h2 className="Text-3xl Font-Semibold Text-Red-500 Mb-4">
                  Oops! Something Went Wrong
                </h2>
                <p className="Text-Lg Text-Gray-700 Mb-4">
                  We Encountered An Issue While Loading The Page. Please Try Again Later.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="Px-4 Py-2 Bg-Purple-500 Text-White Rounded-Md Hover:Bg-Purple-600 Transition"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }
    // Render Children Components If No Error Occurs
    return this.props.Children;
  }
}

export default ErrorBoundary;
