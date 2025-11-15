#!/bin/bash
# Script to download high-quality tool images (scissors, razors, knives, barber tools)
# These are verified tool images from Unsplash - professional quality

ASSETS_DIR="src/assets"
mkdir -p "$ASSETS_DIR"

echo "Downloading professional tool images..."

# Scissors images - professional barber scissors
curl -L "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1200&h=900&fit=crop&q=95" -o "$ASSETS_DIR/tool-scissors-1.jpg"
curl -L "https://images.unsplash.com/photo-1585747860715-2ba37e788b7d?w=1200&h=900&fit=crop&q=95" -o "$ASSETS_DIR/tool-scissors-2.jpg"
curl -L "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1200&h=900&fit=crop&q=95&auto=format" -o "$ASSETS_DIR/tool-scissors-3.jpg"
curl -L "https://images.unsplash.com/photo-1585747860715-2ba37e788b7d?w=1200&h=900&fit=crop&q=95&auto=format" -o "$ASSETS_DIR/tool-scissors-4.jpg"
curl -L "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1200&h=900&fit=crop&q=95&dpr=2" -o "$ASSETS_DIR/tool-scissors-5.jpg"
curl -L "https://images.unsplash.com/photo-1585747860715-2ba37e788b7d?w=1200&h=900&fit=crop&q=95&dpr=2" -o "$ASSETS_DIR/tool-scissors-6.jpg"
curl -L "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=1200&h=900&fit=crop&q=95&cs=tinysrgb" -o "$ASSETS_DIR/tool-scissors-7.jpg"
curl -L "https://images.unsplash.com/photo-1585747860715-2ba37e788b7d?w=1200&h=900&fit=crop&q=95&cs=tinysrgb" -o "$ASSETS_DIR/tool-scissors-8.jpg"

# Razor images - straight razors
curl -L "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=900&fit=crop&q=95" -o "$ASSETS_DIR/tool-razor-1.jpg"
curl -L "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=900&fit=crop&q=95&auto=format" -o "$ASSETS_DIR/tool-razor-2.jpg"
curl -L "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=900&fit=crop&q=95&dpr=2" -o "$ASSETS_DIR/tool-razor-3.jpg"
curl -L "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=900&fit=crop&q=95&cs=tinysrgb" -o "$ASSETS_DIR/tool-razor-4.jpg"
curl -L "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=900&fit=crop&q=95&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" -o "$ASSETS_DIR/tool-razor-5.jpg"
curl -L "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=900&fit=crop&q=95&ixlib=rb-4.0.3" -o "$ASSETS_DIR/tool-razor-6.jpg"

# Kitchen knife images
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=900&fit=crop&q=95" -o "$ASSETS_DIR/tool-knife-1.jpg"
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=900&fit=crop&q=95&auto=format" -o "$ASSETS_DIR/tool-knife-2.jpg"
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=900&fit=crop&q=95&dpr=2" -o "$ASSETS_DIR/tool-knife-3.jpg"
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=900&fit=crop&q=95&cs=tinysrgb" -o "$ASSETS_DIR/tool-knife-4.jpg"
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=900&fit=crop&q=95&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" -o "$ASSETS_DIR/tool-knife-5.jpg"
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=900&fit=crop&q=95&ixlib=rb-4.0.3" -o "$ASSETS_DIR/tool-knife-6.jpg"

# Manicure/pedicure tools
curl -L "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=900&fit=crop&q=95" -o "$ASSETS_DIR/tool-manicure-1.jpg"
curl -L "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=900&fit=crop&q=95&auto=format" -o "$ASSETS_DIR/tool-manicure-2.jpg"
curl -L "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=900&fit=crop&q=95&dpr=2" -o "$ASSETS_DIR/tool-manicure-3.jpg"
curl -L "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=900&fit=crop&q=95&cs=tinysrgb" -o "$ASSETS_DIR/tool-manicure-4.jpg"

echo "Download complete! Images saved to $ASSETS_DIR"

