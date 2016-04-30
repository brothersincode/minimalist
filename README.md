# Minimalist

<p lang="fa" dir="rtl" align="right">شاخه شده از <a href="http://markdown.pioul.fr/" title="Minimalist Online Markdown Editor">ویرایشگر آنلاین مارک‌داون مینیمالیست</a>
	نوشته <a href="http://pioul.fr/a-propos/" title="Philippe Masset">فیلیپ ماسه</a></p>
<p lang="fa" dir="rtl" align="right">با الهام از <a href="https://github.com/dariubs/rtlmd" title="RTL Markdown Editor">ویرایشگر راست‌به‌چپ مارک‌داون</a>
	کاری از <a href="http://dariubs.github.io/" title="Dariush Abbasi">داریوش عباسی</a></p>

<p lang="fa" dir="rtl" align="right">و استفاده از <a href="http://rastikerdar.github.io/compare-fonts/" title="مقایسه قلم‌های فارسی">قلم‌های آزاد</a> فارسی به طراحی <a href="http://rastikerdar.blog.ir/" title="Saber Rasti Kerdar">صابر راستی کردار</a></p>

<p lang="fa" dir="rtl" align="right">به فارسی <a href="http://fa.geminorum.ir/" title="Nasser Rafie">ناصر رفیع</a> /
	<a href="https://github.com/pioul/Minimalist-Online-Markdown-Editor" title="روی گیت‌هاب">متن اصلی</a> /
	<a href="https://chrome.google.com/webstore/detail/minimalist-markdown-edito/pghodfjepegmciihfhdipmimghiakcjf" title="Chrome app">اپ کروم</a> /
	<a href="https://github.com/brothersincode/minimalist" title="روی گیت‌هاب">نسخه فارسی</a>
</p>

[![it's a geminorum project](http://img.shields.io/badge/it's_a-geminorum_project-lightgrey.svg?style=flat-square)](http://geminorum.ir/)
[![Brothers in Code](http://img.shields.io/badge/Brothers-in_Code-lightgrey.svg?style=flat-square)](https://github.com/brothersincode/)
[![Analytics](https://ga-beacon.appspot.com/UA-865830-4/minimalist/readme?pixel)](https://github.com/brothersincode/minimalist)

---
# Minimalist Online Markdown Editor

This is the source for the **simplest** and **slickest** online Markdown editor, available online here: <http://markdown.pioul.fr>  
Just write Markdown and see what it looks like as you type. And convert it to HTML in one click.

## The Minimalist Markdown Editor project

The Minimalist Markdown Editor project is available both online as a web app, and offline and with file support as a Chrome app:

- [Web app](http://markdown.pioul.fr) (the source code is in this repo)
- [Chrome app](https://chrome.google.com/webstore/detail/minimalist-markdown-edito/pghodfjepegmciihfhdipmimghiakcjf) ([GitHub repository](https://github.com/pioul/Minimalist-Markdown-Editor-for-Chrome))

## Contributing

### Building

1. Ensure that [Node.js](http://nodejs.org/) is installed, and open a terminal in the project's root directory.
2. Run `npm install` to install the project's developement dependencies.
3. Run `npm run build` to build the web app. The builds will be placed in the `dist/` directory.

Note: Building should only be necessary if you think about contributing. If you want to run one of the apps, hit one of the links above.

### Git workflow

The two project branches share a decent amount of code. This common source code sits in `app-shared/` in each of these repos. As you can see from the commit history, changes to files in- and outside of `app-shared/` are committed separately to help with cherry-picking the common source changes from the other repo afterward.

E.g. You've made changes to `src/css/main.css` and `src/app-shared/css/main.css`. Since changes have been made to files in- and outside of `app-shared/`, instead of committing all changes at once, make two commits:

1. The first one will be called "[app-shared] commit_message", and will commit changes to `src/app-shared/css/main.css`.
2. The second one will be called "commit_message", and will commit changes to `src/css/main.css`.

If changes had only been made to `src/css/main.css`, then there would've been no need for the first commit. And if changes had only been made to `src/app-shared/css/main.css`, there would've been no need for the second commit.

That's really all there is to know about this project's Git workflow, so fork away!

### Target env

We aim at compatibility down to IE9.

The source for this app is currently authored in ES5, with ES5 polyfills when needed. I'm thinking about authoring in ES6+ and transpiling + polyfilling, but that'd require lots of carefully picked ES6+ polyfills to run in most browsers, so I'm waiting for a good reason to do so.
