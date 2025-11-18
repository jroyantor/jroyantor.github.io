source "https://rubygems.org"

# GitHub Pages uses its own Jekyll version & plugins.
# Do NOT install Jekyll directly.
gem "github-pages", group: :jekyll_plugins

gem "bigdecimal"


# Plugins supported by GitHub Pages
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"   # still works with GitHub Pages
end

# Windows-specific timezone data (required on Windows)
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo-data"
end

# Modern file watcher for Windows (optional, replaces broken wdm)
gem "rb-inotify"
