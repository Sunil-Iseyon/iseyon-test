'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import img1 from '@/public/community/image1.webp';
import img2 from '@/public/community/img2.webp';
import img3 from '@/public/community/img3.webp';
import img4 from '@/public/community/img4.webp';
import img5 from '@/public/community/img5.webp';
import img6 from '@/public/community/img6.webp';
import img7 from '@/public/community/img7.webp';
import img8 from '@/public/community/img8.webp';
import img9 from '@/public/community/img9.webp';
import img10 from '@/public/community/img10.webp';
import img11 from '@/public/community/img11.webp';
import img12 from '@/public/community/img12.webp';
import img13 from '@/public/community/img13.webp';
import img14 from '@/public/community/img14.webp';

interface GalleryImage {
  id: number;
  src: string | StaticImageData;
  alt: string;
  title: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: img2,
    alt: 'Community gathering 1',
    title: 'Community Event 1',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: img5,
    alt: 'Community gathering 2',
    title: 'Community Event 2',
    width: 400,
    height: 500,
  },
  {
    id: 3,
    src: img3,
    alt: 'Community gathering 3',
    title: 'Community Event 3',
    width: 400,
    height: 400,
  },
  {
    id: 4,
    src: img4,
    alt: 'Community gathering 4',
    title: 'Community Event 4',
    width: 500,
    height: 400,
  },
  {
    id: 5,
    src: img7,
    alt: 'Community gathering 5',
    title: 'Community Event 5',
    width: 400,
    height: 600,
  },
  {
    id: 6,
    src: img6,
    alt: 'Community gathering 6',
    title: 'Community Event 6',
    width: 600,
    height: 400,
  },
  {
    id: 7,
    src: img9,
    alt: 'Community gathering 7',
    title: 'Community Event 7',
    width: 400,
    height: 400,
  },
  {
    id: 8,
    src: img10,
    alt: 'Community gathering 8',
    title: 'Community Event 8',
    width: 600,
    height: 400,
  },
  {
    id: 9,
    src: img11,
    alt: 'Community gathering 9',
    title: 'Community Event 9',
    width: 400,
    height: 500,
  },
  {
    id: 10,
    src: img12,
    alt: 'Community gathering 10',
    title: 'Community Event 10',
    width: 500,
    height: 400,
  },
  {
    id: 11,
    src: img6,
    alt: 'Community gathering 11',
    title: 'Community Event 11',
    width: 600,
    height: 400,
  },
  {
    id: 12,
    src: img14,
    alt: 'Community gathering 12',
    title: 'Community Event 12',
    width: 400,
    height: 500,
  },
  {
    id: 13,
    src: img1,
    alt: 'Community gathering 13',
    title: 'Community Event 13',
    width: 100,
    height: 100,
  },
  {
    id: 14,
    src: img8,
    alt: 'Community gathering 14',
    title: 'Community Event 14',
    width: 600,
    height: 400,
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentImage = galleryImages[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="mb-20 mt-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Gallery</h2>
        <p className="mt-2 text-muted-foreground">Moments from our community events and gatherings</p>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Slider Container */}
        <div className="relative group">
          {/* Main Image */}
          <div className="relative w-full overflow-hidden rounded-lg aspect-video h-[500px]">
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              className="object-contain transition-opacity duration-500"
              priority
            />
          </div>

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
            {currentIndex + 1} / {galleryImages.length}
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
        <h3 className="mt-6 text-2xl font-semibold text-foreground text-center">
          {currentImage.title}
        </h3>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 justify-center">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-foreground'
                  : 'hover:opacity-75'
              }`}
              style={{ width: '80px', height: '60px' }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
