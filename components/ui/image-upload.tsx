"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (results: any) => {
    onChange(results.info.secure_url);
  };

  if (!isMounted) return null;

  return (
    <div>
      <div>
        <div className="mb-4 flex items-center gap-4">
          {value.map((url) => (
            <div
              key={url}
              className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
            >
              <div className="z-10 absolute top-2 right-2">
                <Button
                  type="button"
                  size="icon"
                  onClick={() => onRemove(url)}
                  variant="destructive"
                >
                  <Trash className="w-4 h-4 " />
                </Button>
              </div>
              <Image
                fill
                className="object-cover"
                alt="image"
                sizes="200px"
                priority
                src={url}
              />
            </div>
          ))}
        </div>
        <CldUploadWidget onUpload={onUpload} uploadPreset="b6tjcsae">
          {({ open }) => {
            const onClick = () => {
              open();
            };
            return (
              <Button
                type="button"
                variant="secondary"
                disabled={disabled}
                onClick={onClick}
              >
                <ImagePlus className="w-4 h-4 mr-2" /> Upload an image
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default ImageUpload;
