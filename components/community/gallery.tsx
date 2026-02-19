'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface GalleryImage {
  image: string;
  title?: string;
  description?: string;
}

export function Gallery({ images: rawImages }: { images: GalleryImage[] }) {
  // Show newest first
  const images = [...rawImages].reverse();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="mb-12 sm:mb-20 mt-12 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Gallery</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">Moments from our community events and gatherings</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto w-full"
      >
        {/* Slider Container */}
        <div className="relative group">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full overflow-hidden rounded-lg aspect-video h-[500px]"
          >
            <Image
              src={currentImage.image || "/placeholder.svg"}
              alt={currentImage.description || currentImage.title || "Gallery image"}
              fill
              className="object-contain transition-opacity duration-500"
              priority
            />
          </motion.div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 text-black transition-all duration-300 hover:bg-white opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 text-black transition-all duration-300 hover:bg-white opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 z-10 rounded-full bg-black/60 p-3 text-white transition-all duration-300 hover:bg-black/80"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>

        {/* Image Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-2xl font-semibold text-foreground text-center"
        >
          {currentImage.title}
        </motion.h3>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex gap-3 overflow-x-auto pb-2 justify-center"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-foreground'
                  : 'hover:opacity-75'
              }`}
              style={{ width: '80px', height: '60px' }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.description || image.title || `Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
