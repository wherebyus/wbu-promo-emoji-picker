$(function () {
  window.emojiPicker = new EmojiPicker({
    emojiable_selector: '[data-emojiable=true]',
    assetsPath: '/assets/emoji_picker',
    popupButtonClasses: 'fa fa-chevron-down',
  });
  window.emojiPicker.discover();
});
