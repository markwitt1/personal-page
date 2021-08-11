import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace(
      "https://drive.google.com/file/d/1SlAIPoN7wJsKWYBNphWyPpi0aF5V9EgE/view"
    );
  });
  return null;
};

export default RedirectPage;
