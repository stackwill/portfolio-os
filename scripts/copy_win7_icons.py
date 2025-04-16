#!/usr/bin/env python3
import os
import shutil
from PIL import Image

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)

def backup_existing_icons(icons_dir):
    backup_dir = os.path.join(icons_dir, 'original_backup')
    create_directory(backup_dir)
    
    for file in os.listdir(icons_dir):
        if file.endswith('.png'):
            src = os.path.join(icons_dir, file)
            dst = os.path.join(backup_dir, file)
            if not os.path.exists(dst):
                shutil.copy2(src, dst)

def resize_existing_icon(icon_path, size=(32, 32)):
    try:
        with Image.open(icon_path) as img:
            if img.size != size:
                print(f"Resizing {icon_path} from {img.size} to {size}")
                img = img.convert('RGBA')
                img = img.resize(size, Image.Resampling.LANCZOS)
                img.save(icon_path, 'PNG')
                return True
    except Exception as e:
        print(f"Error resizing {icon_path}: {e}")
    return False

def convert_ico_to_png(src, dst, size=(32, 32)):
    try:
        # Open ICO file
        with Image.open(src) as img:
            # Convert to RGBA if necessary
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            
            # Resize if necessary
            if img.size != size:
                img = img.resize(size, Image.Resampling.LANCZOS)
            
            # Save as PNG
            img.save(dst, 'PNG')
        return True
    except Exception as e:
        print(f"Error converting {src}: {e}")
        return False

def main():
    # Paths
    win7_dir = "win7"
    icons_dir = "public/assets/icons"
    
    # Create icons directory if it doesn't exist
    create_directory(icons_dir)
    
    # Backup existing icons
    backup_existing_icons(icons_dir)
    
    # First, resize any existing oversized icons
    projects_icon = os.path.join(icons_dir, 'projects.png')
    if os.path.exists(projects_icon):
        resize_existing_icon(projects_icon)
    
    # Icon mapping
    icon_mapping = {
        # Program icons
        'notepad': ('Shell32.dll/shell32_2.ico', 'notepad.png'),  # Notepad icon
        'about': ('Shell32.dll/shell32_16771.ico', 'about.png'),  # Info icon
        'projects': ('Shell32.dll/shell32_20.ico', 'projects.png'),  # Folder icon
        'terminal': ('Shell32.dll/shell32_16.ico', 'terminal.png'),  # Console icon
        'contact': ('Shell32.dll/shell32_16715.ico', 'contact.png'),  # Contact icon
        'skills': ('Shell32.dll/shell32_16769.ico', 'skills.png'),  # Tools icon
        'games': ('Shell32.dll/shell32_16784.ico', 'games.png'),  # Games icon
        
        # System icons
        'start': ('Shell32.dll/shell32_16.ico', 'start.png'),  # Windows logo
        'shutdown': ('Shell32.dll/shell32_27.ico', 'shutdown.png'),  # Power icon
        'volume-on': ('Shell32.dll/shell32_16824.ico', 'volume-on.png'),  # Speaker icon
        'volume-off': ('Shell32.dll/shell32_16825.ico', 'volume-off.png')  # Muted speaker
    }
    
    # Copy and convert icons
    for program, (src_rel, dst_name) in icon_mapping.items():
        src = os.path.join(win7_dir, src_rel)
        dst = os.path.join(icons_dir, dst_name)
        
        if os.path.exists(src):
            if convert_ico_to_png(src, dst):
                print(f"Converted {program} icon")
            else:
                print(f"Failed to convert {program} icon")
        else:
            print(f"Warning: Source icon not found for {program}")

if __name__ == "__main__":
    main()