from PIL import Image

def resize_image(input_path, output_path_48, output_path_16):
    # Open the original image
    with Image.open(input_path) as img:
        # Resize to 48x48 using LANCZOS filter for high-quality downsampling
        img_48 = img.resize((48, 48), Image.LANCZOS)
        img_48.save(output_path_48, format='PNG')

        # Resize to 16x16 using LANCZOS filter
        img_16 = img.resize((16, 16), Image.LANCZOS)
        img_16.save(output_path_16, format='PNG')

if __name__ == "__main__":
    # Paths to the input and output files
    input_image_path = "icon128.png"        # Change this to your 128x128 image path
    output_image_path_48 = "icon48.png"
    output_image_path_16 = "icon16.png"

    # Resize and save images
    resize_image(input_image_path, output_image_path_48, output_image_path_16)

    print("Images resized and saved successfully!")

