const ProgressBar = ({ steps, currentStep }) => {
    return (
      <div className="w-full flex lg:ml-28 mb-10 sm:mx-auto">
        {steps.map((step, index) => (
          <div className="flex-1 flex items-center" key={index}>
            <div
              className={`w-8 h-8 rounded-full transition-all duration-1000 ${
                index <= currentStep ? "bg-primary animate-grow" : "bg-gray-300"
              } flex items-center justify-center text-white`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-2 relative overflow-hidden transition-all duration-1000  ${
                  index < currentStep ? "bg-primary animate-grow" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 h-2 w-full ${
                    index < currentStep
                      ? "bg-primary animate-fill"
                      : "bg-gray-300"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default ProgressBar;