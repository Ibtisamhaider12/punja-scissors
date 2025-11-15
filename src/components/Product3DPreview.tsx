// Unique 3D Preview Component - Innovative feature for 2025
import { useState, useEffect } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Product3DPreviewProps {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Product3DPreview = ({ image, title, isOpen, onClose }: Product3DPreviewProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Reset rotation when modal opens
  useEffect(() => {
    if (isOpen) {
      setRotation({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPos({ 
      x: e.clientX - rotation.y * 10, 
      y: e.clientY - rotation.x * 10 
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaX = (e.clientX - startPos.x) / 10;
    const deltaY = (e.clientY - startPos.y) / 10;
    setRotation({
      x: Math.max(-30, Math.min(30, deltaY)),
      y: Math.max(-30, Math.min(30, deltaX)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none [&>button]:hidden">
        <div className="relative bg-background/95 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={resetRotation}
              className="bg-background/90 backdrop-blur-sm border-2 border-secondary/30 hover:bg-secondary/10 hover:border-secondary shadow-lg"
              aria-label="Reset rotation"
            >
              <RotateCw className="h-4 w-4 text-secondary" />
            </Button>
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-premium font-bold mb-6 text-center text-foreground">{title}</h3>
            <div
              className="relative w-full h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                perspective: '1000px',
              }}
            >
              <div
                className="w-full h-full transition-transform duration-200"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm font-premium">
                Drag to rotate • Click reset to center
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Product3DPreview;

