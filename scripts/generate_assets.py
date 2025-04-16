#!/usr/bin/env python3
import os
from PIL import Image, ImageDraw, ImageFont
import colorsys

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)

def create_icon(name, size=(32, 32), bg_color=(0, 0, 128), text_color=(255, 255, 255)):
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw a simple icon with the first letter
    letter = name[0].upper()
    # This would work better with a proper font file
    try:
        font = ImageFont.truetype("/usr/share/fonts/TTF/Arial.ttf", size[0] // 2)
    except:
        font = ImageFont.load_default()
    
    # Center the text
    bbox = draw.textbbox((0, 0), letter, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    x = (size[0] - w) / 2
    y = (size[1] - h) / 2
    draw.text((x, y), letter, fill=text_color, font=font)
    
    return img

def create_wallpaper(size=(1920, 1080)):
    img = Image.new('RGB', size, (0, 0, 128))  # Windows 98-style blue
    draw = ImageDraw.Draw(img)
    
    # Create a subtle pattern
    for i in range(0, size[0], 20):
        for j in range(0, size[1], 20):
            draw.rectangle([i, j, i+18, j+18], fill=(0, 0, 140))
    
    return img

def main():
    # Create directory structure
    base_dir = "public/assets"
    directories = ["icons", "wallpapers", "images", "sounds"]
    for dir_name in directories:
        create_directory(os.path.join(base_dir, dir_name))
    
    # Create program icons
    icons = [
        "notepad", "about", "projects", "terminal", "contact",
        "skills", "gallery", "blog", "games", "start",
        "shutdown", "volume-on", "volume-off"
    ]
    
    for icon_name in icons:
        icon = create_icon(icon_name)
        icon.save(os.path.join(base_dir, "icons", f"{icon_name}.png"))
    
    # Create special icons with different colors
    create_icon("start", bg_color=(0, 128, 0)).save(
        os.path.join(base_dir, "icons", "start.png")
    )
    create_icon("shutdown", bg_color=(128, 0, 0)).save(
        os.path.join(base_dir, "icons", "shutdown.png")
    )
    
    # Create wallpaper
    wallpaper = create_wallpaper()
    wallpaper.save(os.path.join(base_dir, "wallpapers", "default.jpg"))
    
    # Create user avatar
    avatar = create_icon("user", size=(64, 64), bg_color=(50, 50, 50))
    avatar.save(os.path.join(base_dir, "images", "user-avatar.png"))
    
    # Create placeholder project images
    for i in range(1, 4):
        img = Image.new('RGB', (400, 300), (200, 200, 200))
        draw = ImageDraw.Draw(img)
        bbox = draw.textbbox((0, 0), f"Project {i}", font=None)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        x = (400 - w) / 2
        y = (300 - h) / 2
        draw.text((x, y), f"Project {i}", fill=(0, 0, 0))
        img.save(os.path.join(base_dir, "images", f"project{i}.jpg"))
    
    print("Asset generation complete!")

if __name__ == "__main__":
    main() 