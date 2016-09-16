$(document).ready(function() {
    editor.updateWordCount = function(text) {
        var wordCount = "";

        if (text.length) {
            wordCount = text.trim().replace(/\s+/gi, " ").split(" ").length;
            wordCount = wordCount.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + ' \u06a9\u0644\u0645\u0647'; // Format number (add commas and unit)
        }

        this.wordCountContainers.text(this.formatNumbers(wordCount, 'fa_IR'));
    };

    editor.locale = {
        fa_IR: ['\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9']
    };

    editor.formatNumbers = function(str, locale) {
        if (this.locale.hasOwnProperty(locale)) {
            this.locale[locale].forEach(function(v, k) {
                str = str.replace(new RegExp(k, 'g'), v);
            });
        }

        // https://github.com/IranOpenFontGroup/Discussions/issues/5
        str = str.replace(new RegExp(",", 'g'), '\u066c');

        return str;
    };

    editor.updateWordCount(editor.markdownPreview.text());
});
