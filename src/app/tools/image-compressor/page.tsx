"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  Image as ImageIcon,
  ArrowRight,
  Upload,
  Download,
  Trash2,
  Check,
  X,
  FileImage,
  ZoomIn,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageFile {
  id: string;
  file: File;
  originalSize: number;
  compressedSize: number | null;
  compressedBlob: Blob | null;
  quality: number;
  preview: string;
  compressedPreview: string | null;
  status: "pending" | "compressing" | "done" | "error";
}

export default function ImageCompressorPage() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [globalQuality, setGlobalQuality] = useState(80);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Format file size
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  // Process files
  const processFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    
    if (fileArray.length === 0) return;

    // Filter only image files
    const imageFiles = fileArray.filter((file) => {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file",
          description: `${file.name} is not an image`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    if (imageFiles.length === 0) return;

    // Process each file and create promises
    const imagePromises = imageFiles.map((file) => {
      return new Promise<ImageFile>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            file,
            originalSize: file.size,
            compressedSize: null,
            compressedBlob: null,
            quality: globalQuality,
            preview: e.target?.result as string,
            compressedPreview: null,
            status: "pending",
          });
        };
        reader.onerror = () => {
          toast({
            title: "Error reading file",
            description: `Could not read ${file.name}`,
            variant: "destructive",
          });
        };
        reader.readAsDataURL(file);
      });
    });

    try {
      const newImages = await Promise.all(imagePromises);
      setImages((prev) => [...prev, ...newImages]);
      
      toast({
        title: "Images uploaded",
        description: `${newImages.length} image${newImages.length > 1 ? "s" : ""} added successfully`,
      });
    } catch {
      toast({
        title: "Upload failed",
        description: "Failed to process some images",
        variant: "destructive",
      });
    }
  }, [globalQuality, toast]);

  // Handle file selection via input
  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
    // Reset input
    e.target.value = "";
  }, [processFiles]);

  // Handle drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
  }, [processFiles]);

  // Compress single image
  const compressImage = useCallback(async (imageId: string) => {
    const image = images.find((img) => img.id === imageId);
    if (!image) return;

    setImages((prev) =>
      prev.map((img) =>
        img.id === imageId ? { ...img, status: "compressing" } : img
      )
    );

    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const imgElement = new window.Image();

      // Wait for image to load
      await new Promise<void>((resolve, reject) => {
        imgElement.onload = () => resolve();
        imgElement.onerror = () => reject(new Error("Failed to load image"));
        imgElement.src = image.preview;
      });

      // Calculate new dimensions (max 2048px)
      let { width, height } = imgElement;
      const maxDimension = 2048;
      
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = (height / width) * maxDimension;
          width = maxDimension;
        } else {
          width = (width / height) * maxDimension;
          height = maxDimension;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(imgElement, 0, 0, width, height);

      // Convert to blob
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => {
            if (b) resolve(b);
            else reject(new Error("Failed to compress"));
          },
          "image/jpeg",
          image.quality / 100
        );
      });

      // Create preview
      const compressedPreview = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(blob);
      });

      setImages((prev) =>
        prev.map((img) =>
          img.id === imageId
            ? {
                ...img,
                compressedBlob: blob,
                compressedSize: blob.size,
                compressedPreview,
                status: "done",
              }
            : img
        )
      );
    } catch {
      setImages((prev) =>
        prev.map((img) =>
          img.id === imageId ? { ...img, status: "error" } : img
        )
      );
      toast({
        title: "Compression failed",
        description: `Failed to compress ${image.file.name}`,
        variant: "destructive",
      });
    }
  }, [images, toast]);

  // Compress all images
  const compressAll = useCallback(async () => {
    const pendingImages = images.filter((img) => img.status === "pending");
    for (const image of pendingImages) {
      await compressImage(image.id);
    }
  }, [images, compressImage]);

  // Download single image
  const downloadImage = useCallback((imageId: string) => {
    const image = images.find((img) => img.id === imageId);
    if (!image?.compressedBlob) return;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(image.compressedBlob);
    link.download = `compressed-${image.file.name.replace(/\.[^/.]+$/, "")}.jpg`;
    link.click();
    URL.revokeObjectURL(link.href);
  }, [images]);

  // Download all images
  const downloadAll = useCallback(() => {
    images.forEach((image) => {
      if (image.compressedBlob) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(image.compressedBlob);
        link.download = `compressed-${image.file.name.replace(/\.[^/.]+$/, "")}.jpg`;
        link.click();
        URL.revokeObjectURL(link.href);
      }
    });
  }, [images]);

  // Remove image
  const removeImage = useCallback((imageId: string) => {
    setImages((prev) => prev.filter((img) => img.id !== imageId));
  }, []);

  // Clear all
  const clearAll = useCallback(() => {
    setImages([]);
  }, []);

  // Calculate totals
  const totalOriginalSize = images.reduce((sum, img) => sum + img.originalSize, 0);
  const totalCompressedSize = images.reduce(
    (sum, img) => sum + (img.compressedSize || 0),
    0
  );
  const totalSavings = totalOriginalSize - totalCompressedSize;
  const savingsPercent = totalOriginalSize > 0 
    ? Math.round((totalSavings / totalOriginalSize) * 100) 
    : 0;

  const pendingCount = images.filter((img) => img.status === "pending").length;
  const doneCount = images.filter((img) => img.status === "done").length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-12 sm:py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
                <Link href="/tools" className="hover:text-brand-primary">Free Tools</Link>
                <ArrowRight className="h-3.5 w-3.5" />
                <span className="text-text-primary font-medium">Image Compressor</span>
              </nav>

              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-medium">
                  <ImageIcon className="h-3.5 w-3.5 mr-1.5 text-brand-primary" />
                  Free Tool
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
                  Image Compressor
                </h1>
                <p className="text-lg text-text-secondary">
                  Compress images instantly in your browser. Reduce file sizes while maintaining 
                  quality for faster website loading. No upload to server - 100% private.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="py-8 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            {/* Upload Area */}
            <Card className="border-border/60 mb-8">
              <CardContent className="pt-6">
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all ${
                    isDragging 
                      ? "border-brand-primary bg-brand-primary/10" 
                      : "border-border hover:border-brand-primary hover:bg-brand-primary/5"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                  <Upload className="h-12 w-12 text-text-muted mx-auto mb-4" />
                  <p className="text-lg font-medium text-text-primary mb-2">
                    Drop images here or click to upload
                  </p>
                  <p className="text-sm text-text-muted">
                    Supports JPG, PNG, WebP, GIF • No size limit
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quality Slider */}
            {images.length > 0 && (
              <Card className="border-border/60 mb-8">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Compression Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-text-muted shrink-0">Lower size</span>
                    <Slider
                      value={[globalQuality]}
                      onValueChange={([value]) => {
                        setGlobalQuality(value);
                        setImages((prev) =>
                          prev.map((img) => ({ ...img, quality: value }))
                        );
                      }}
                      min={10}
                      max={100}
                      step={5}
                      className="flex-1"
                    />
                    <span className="text-sm text-text-muted shrink-0">Higher quality</span>
                  </div>
                  <p className="text-center text-sm font-medium text-brand-primary mt-2">
                    {globalQuality}% Quality
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Images Grid */}
            {images.length > 0 && (
              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-text-primary">
                    {images.length} Image{images.length > 1 ? "s" : ""}
                    {doneCount > 0 && (
                      <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                        {doneCount} compressed
                      </Badge>
                    )}
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={clearAll}>
                      <Trash2 className="h-4 w-4 mr-1" />
                      Clear All
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={compressAll}
                      disabled={pendingCount === 0}
                    >
                      <Sparkles className="h-4 w-4 mr-1" />
                      Compress All ({pendingCount})
                    </Button>
                    <Button
                      size="sm"
                      onClick={downloadAll}
                      disabled={doneCount === 0}
                      className="bg-brand-primary hover:bg-brand-primary-hover"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download All ({doneCount})
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {images.map((image) => (
                    <Card key={image.id} className="overflow-hidden">
                      <div className="relative aspect-video bg-surface">
                        <img
                          src={image.compressedPreview || image.preview}
                          alt={image.file.name}
                          className="w-full h-full object-cover"
                        />
                        {image.status === "compressing" && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="flex items-center gap-2 text-white">
                              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                              <span>Compressing...</span>
                            </div>
                          </div>
                        )}
                        {image.status === "done" && (
                          <Badge className="absolute top-2 right-2 bg-green-500">
                            <Check className="h-3 w-3 mr-1" />
                            Done
                          </Badge>
                        )}
                        {image.status === "error" && (
                          <Badge className="absolute top-2 right-2 bg-red-500">
                            <X className="h-3 w-3 mr-1" />
                            Error
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm font-medium text-text-primary truncate mb-2">
                          {image.file.name}
                        </p>
                        <div className="flex justify-between text-xs text-text-muted mb-3">
                          <span>Original: {formatSize(image.originalSize)}</span>
                          {image.compressedSize && (
                            <>
                              <span className="text-green-600 font-medium">
                                -{Math.round((1 - image.compressedSize / image.originalSize) * 100)}%
                              </span>
                              <span>Compressed: {formatSize(image.compressedSize)}</span>
                            </>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {image.status === "pending" && (
                            <Button
                              size="sm"
                              onClick={() => compressImage(image.id)}
                              className="flex-1 bg-brand-primary hover:bg-brand-primary-hover"
                            >
                              Compress
                            </Button>
                          )}
                          {image.status === "done" && (
                            <Button
                              size="sm"
                              onClick={() => downloadImage(image.id)}
                              className="flex-1"
                              variant="default"
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          )}
                          {image.status === "error" && (
                            <Button
                              size="sm"
                              onClick={() => compressImage(image.id)}
                              className="flex-1"
                              variant="destructive"
                            >
                              Retry
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeImage(image.id)}
                          >
                            <Trash2 className="h-4 w-4 text-text-muted" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            {doneCount > 0 && (
              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600 dark:text-green-400">Total Savings</p>
                      <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                        {formatSize(totalSavings)} ({savingsPercent}%)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-muted">
                        {formatSize(totalOriginalSize)} → {formatSize(totalCompressedSize)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-surface/50">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-bold text-text-primary mb-6 text-center">
              Why Use Our Image Compressor?
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <Sparkles className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Private</h3>
                  <p className="text-sm text-text-secondary">
                    All compression happens in your browser. Your images never leave your device.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <ZoomIn className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Adjustable Quality</h3>
                  <p className="text-sm text-text-secondary">
                    Control the balance between file size and image quality with our slider.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto p-3 rounded-full bg-brand-primary/10 w-fit mb-3">
                    <FileImage className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Batch Processing</h3>
                  <p className="text-sm text-text-secondary">
                    Compress multiple images at once. No limits, no watermarks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
