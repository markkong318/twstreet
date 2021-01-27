import {
  $userImage,
  $dragger,
} from "./util/el";

$(document).ready(function () {
  $dragger.draggable({
    drag: function () {
      $userImage.css('background-position', $dragger.css('left') + ' ' + $dragger.css('top'));
      if ($userImage.hasClass('dragged') === false) {
        $userImage.addClass('dragged');
      }

      const value = $('input[name=template]:checked').val();
      if (value === 9 || value === 10) {
        $userImage.attr('class', 'inner');
      }
    }
  });
});
