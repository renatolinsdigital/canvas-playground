import { useEffect, useState } from "react";

interface ImageProps {
  fileName?: string;
  className?: string;
  fileExtension?: string;
  alternativeText: string;
  externalImageUrl?: string;
  isDomainImage?: boolean;
}

const Image = ({
  fileName,
  fileExtension,
  alternativeText,
  externalImageUrl,
  isDomainImage = false,
  className = "",
  ...rest
}: ImageProps) => {
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  useEffect(() => {
    const resolveImagePath = async () => {
      try {
        let imagePath = "";
        if (externalImageUrl) {
          imagePath = externalImageUrl;
        } else {
          if (!fileName || !fileExtension) {
            throw new Error("Image file name is required");
          }

          const importResponse = isDomainImage
            ? await import(`@domain/images/${fileName}.${fileExtension}`)
            : await import(`@shared/images/${fileName}.${fileExtension}`);
          imagePath = importResponse.default;
        }
        setImagePath(imagePath);
      } catch (error) {
        console.error(error);
      }
    };

    resolveImagePath();
  }, [fileName, fileExtension, externalImageUrl, isDomainImage]);

  if (imagePath) {
    return (
      <img
        src={imagePath}
        alt={alternativeText}
        className={`rounded-lg border border-gray-300 ${className}`}
        {...rest}
      />
    );
  }

  return <p>{alternativeText}</p>;
};

export default Image;
