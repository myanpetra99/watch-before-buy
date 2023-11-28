# WATCH BEFORE BUY Chrome Extension

![icon](src/icon.png)

## Overview

The **WATCH BEFORE BUY** Chrome extension transforms your online shopping experience by providing direct access to product review videos without leaving the e-commerce product page. This extension currently supports various popular e-commerce platforms, enabling users to click on a video icon and seamlessly redirect to YouTube videos for a more engaging and informed buying decision.

## Screenshot
![Tokopedia](https://i.postimg.cc/Twv7WgkD/Screenshot-2023-11-28-at-16-16-15.png)
![Shopee](https://i.postimg.cc/xdzpCtPQ/Screenshot-2023-11-28-at-16-22-31.png)
![Amazon](https://i.postimg.cc/Y25N3YYn/Screenshot-2023-11-28-at-16-26-15.png)

## Features

- **Direct YouTube Video Access**: Allows users to click on a video icon to access reviews directly from YouTube.
- **OAuth Integration (Coming Soon)**: Users will soon be able to log in with their Google account and use their own API key for a personalized experience.
- **Supported E-commerce Platforms**: Currently supports the following e-commerce platforms:
  - Tokopedia
  - Shopee
  - Bukalapak
  - Lazada
  - Blibli
  - Amazon
  - eBay
  - Alibaba
  - Walmart

## Future Development

In the future, the extension is planned to include support for additional review platforms, such as TikTok, to provide users with a diverse range of reviews from various sources.

## Installation

1. Clone or download the repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded the extension.
5. The extension should now be installed and active.

## Usage

1. Navigate to a product page on one of the supported e-commerce platforms.
2. Look for the video icon on the page.
3. Click on the video icon to be redirected to YouTube videos for the product reviews.
4. Engage with the reviews directly on YouTube to make more informed purchase decisions.

## OAuth Integration (Coming Soon)

Soon, you will be able to log in with your Google account to use your personalized API key. This feature will enhance your experience by providing more relevant and accurate information.

## Supported E-commerce Platforms

| Store Name | Target Query | Mode      |
|------------|--------------|-----------|
| Tokopedia  | `#pdp_comp-variant_options` | Portrait  |
| Shopee     | `.product-detail.page-product__detail` | Landscape |
| Bukalapak  | `.c-main-product__scan.c-main-product__separator` | Portrait |
| Lazada     | `.pdp-block.pdp-block__main-information` | Landscape |
| Blibli     | `#product-info` | Portrait |
| Amazon     | `#apex_desktop` | Portrait |
| eBay       | `.vim.x-buybox` | Portrait |
| Alibaba    | `.right-bottom` | Landscape |
| Walmart    | `[data-testid="price-wrap"]` | Portrait |

## Contribution

Contributions are welcome! If you encounter any issues, have suggestions, or want to add support for more e-commerce platforms, feel free to create a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
