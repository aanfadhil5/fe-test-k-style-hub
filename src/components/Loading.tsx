interface LoadingProps {
  size?: 'small' | 'medium' | 'large';  
  text?: string;                         
}


const Loading = ({ size = "medium", text = "Loading..." }: LoadingProps) => {
  
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8", 
    large: "w-12 h-12"
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`loading-spinner ${sizeClasses[size]}`}></div>
      <p className="mt-4 text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default Loading; 