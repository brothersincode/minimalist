var virastarApp;

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

    virastarApp = {

        virastarHTML: new Virastar(),
        virastarMarkdown: new Virastar({
            fix_dashes: false,
            cleanup_spacing: false,
            skip_markdown_ordered_lists_numbers_conversion: false,
        }),

        virastarTriggers: $(".buttons-container").find(".virastar"),
        virastarPreText: $("#virastar pre"),

        doVirastar: function(type){
            var html, isAfterUserInput = true;

            if ( 'markdown' == type ) {
                editor.markdownSource.val(this.virastarMarkdown.cleanup(editor.markdownSource.val()));
                editor.onInput(isAfterUserInput);

            } else if ( 'html' == type ) {
                if (editor.activePanel == "preview") {
                    html = editor.previewMarkdownConverter.render(editor.markdown);
                    html = this.virastarHTML.cleanup(html);
                    app.updateMarkdownPreview(html, isAfterUserInput);
                    editor.triggerEditorUpdatedEvent(isAfterUserInput);
                } else if (editor.activePanel == "html") {
                    html = editor.cleanHtmlMarkdownConverter.render(editor.markdown);
                    html = this.virastarHTML.cleanup(html);
                    editor.markdownHtml.value = html;
                }
            }
        },

        init: function() {

            this.virastarTriggers.on("click", function(e) {
                e.preventDefault();
                virastarApp.doVirastar($(this).data( "virastar" ));
            });

            $("#virastar a.virastar").on("click", function(e) {
                e.preventDefault();
                virastarApp.doVirastar($(this).data( "virastar" ));
            });

            this.virastarPreText.on("click", function() {
                editor.addToMarkdownSource($(this).text());
            });
        },
    };

    virastarApp.init();
});
