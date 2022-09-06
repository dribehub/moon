# Nord Startpage

This is a fork of [voxie12/moon](https://github.com/voxie12/moon), customized with the [Nord Theme](https://www.nordtheme.com/) palette.
<br>You can configure the color scheme pretty easily by changing CSS variables on `style.css`:
  - `--bg` for background
  - `--text-nord` as primary accent (categories, bangs, symbols)
  - `--text-milk` as secondary accent (bookmarks, bang descriptions, date and time)

![Screenshot](https://user-images.githubusercontent.com/73489903/174622341-e778aefa-9496-4144-a662-7544aaccaa17.png)

# Features
### ❗ [DuckDuckGo bangs](https://duckduckgo.com/bang?)
  - Bangs present you with an extended search query over many popular websites.
  - Clicking on any bang interactively adds that bang on the search query.
  - Easily configurable to your needs. Just modify the `bangsMap` on `scripts/bangs.js`.
### 🔖 Bookmarks
  - Every bookmark belongs to a category, so everything looks organized and easy to point out.
  - Personally I use 4 to 5 categories, depending on my current workflow, but you can add as many as you want.
  - You can customize your `bookmarksMap` on `scripts/bookmarks.js`.
### 🔍 Modes
  - You can switch between `Search Mode` and `Find Mode` just by pressing `Esc`.
  - `Search Mode` simply searches the web, while `Find Mode` searches your bookmarks instead.
  - When on `Find Mode`, the best match is always selected, allowing you to directly navigate to that link by pressing `Enter`.
  - You can even switch modes while typing. Same input, different modes.
### ↕ Alternated sorting
  - Bookmarks are sorted by their length, making it feel more eco-friendly now that they look like trees 🌲🌲🌲.
  - The direction alternates between categories, so the trees kind of tessellate (not really).
### ✨ Minimalistic Look and Feel
  - Readability deserves special attention when it comes to polishing the user experience. I found out that using a minimal palette 
and highlighting symbols to a secondary accent color can significantly increase readability of the UI. You can try experimenting on other accent colors, but keep in mind the principes of minimalism, as it can get bloated with unnecessary distractions pretty easily.

# Usage
* Download the repo locally using `git clone https://github.com/dribehub/nord-startpage.git` or the `Download ZIP` button.
* Add the `index.html` to your browser's home page (depending on your browser you may need to search how to add custom home pages, some may not even support this feature). 
* Customize your `bookmarksMap` and `bangsMap` to your personal choice. Optionally you can change the search engine if you prefer.
* You're done!

## Firefox
* Go to firefox `settings/home` and you'll see `Homepage and new windows` with a dropdown menu beside it. 
* Select `Custom URLs...` and simply enter the absolute path of `index.html` inside. 
Unfortunately firefox doesn't support adding custom pages on new tabs, so I mapped `Super+H` (for home) to `firefox file:///home/dribe/Repos/nord-startpage/index.html` as a workaround, although there may be better alternatives like [installing add-ons](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) to override the default firefox settings, but I had problems with them and decided to stick with the workaround.

## Chrome
* Uninstall Chrome and install some other browser (firefox recommended). 
* See above steps to use custom pages on firefox.
