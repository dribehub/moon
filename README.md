# Minimal Nord-Themed Startpage

![Screenshot](https://user-images.githubusercontent.com/73489903/174622341-e778aefa-9496-4144-a662-7544aaccaa17.png)

This is a fork of [voxie12/moon](https://github.com/voxie12/moon), with some styling changes to better suit my current XFCE theme ([nordic-theme](https://aur.archlinux.org/packages/nordic-theme/)). I integrated [DuckDuckGo bangs](https://duckduckgo.com/bang?) feature on the top right and made them interactive to the input field. I also implemented sorting for bookmarks, so they look like trees with alternated directions between categories (see preview).
The color scheme is easily configurable on the `style.css` file only by changing CSS variables like `--bg` for background, `--text-nord` as accent for categories and bangs and `--text-milk` as secondary accent for bookmarks and descriptions on bangs.

# How to use?
* Download the repo locally using `git clone https://github.com/dribehub/nord-startpage.git` or the `Download ZIP` button.
* Add the `index.html` on your browser's home page (depending on your browser you may need to search how to add custom home pages, some may not even support this feature). 
* You're done!

## Firefox
* Go to firefox `settings/home` and you'll see `Homepage and new windows` with a dropdown menu beside it. 
* Select `Custom URLs...` and simply enter the absolute path of `index.html` inside. 
Unfortunately firefox doesn't support adding custom pages on new tabs, so I mapped `Super+H` (for home) to `firefox file:///home/dribe/Repos/nord-startpage/index.html` as a workaround, although there may be better alternatives like [installing add-ons](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) to override the default firefox settings, but I had problems with them and decided to stick with the workaround.

## Chrome
* Uninstall Chrome and install some other browser (firefox recommended). 
* See above steps to use custom pages on firefox.
